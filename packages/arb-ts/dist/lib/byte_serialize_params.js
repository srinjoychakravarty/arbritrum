"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeParams = exports.argSerializerConstructor = exports.getAddressIndex = void 0;
// byte_serialize_params.ts
/**
#### Byte Serializing Solidity Arguments Schema

Arb-ts includes methods for [serializing parameters](https://developer.offchainlabs.com/docs/special_features#parameter-byte-serialization) for a solidity method into a single byte array to minimize calldata. It uses the following schema:

#### address[]:

| field         | size (bytes)       | Description                                                             |
| ------------- | ------------------ | ----------------------------------------------------------------------- |
| length        | 1                  | Size of array                                                           |
| is-registered | 1                  | 1 = all registered, 0 = not all registered                              |
| addresses     | 4 or 20 (x length) | If is registered, left-padded 4-byte integers; otherwise, eth addresses |

#### non-address[]:

| field  | size (bytes) | Description              |
| ------ | ------------ | ------------------------ |
| length | 1            | Size of array            |
| items  | (variable)   | All items (concatenated) |

#### address:

| field         | size (bytes) | Description                                                       |
| ------------- | ------------ | ----------------------------------------------------------------- |
| is-registered | 1            | 1 = registered, 0 = not registered                                |
| address       | 4 or 20      | If registered, left-padded 4-byte integer; otherwise, eth address |

 * @module Byte-Serialization
 */
const address_1 = require("@ethersproject/address");
const bytes_1 = require("@ethersproject/bytes");
const bignumber_1 = require("@ethersproject/bignumber");
const ArbAddressTable__factory_1 = require("./abi/factories/ArbAddressTable__factory");
const ARB_ADDRESS_TABLE_ADDRESS = '0x0000000000000000000000000000000000000066';
exports.getAddressIndex = (() => {
    const addressToIndexMemo = {};
    let arbAddressTable;
    return async (address, signerOrProvider) => {
        if (addressToIndexMemo[address]) {
            return addressToIndexMemo[address];
        }
        arbAddressTable =
            arbAddressTable ||
                ArbAddressTable__factory_1.ArbAddressTable__factory.connect(ARB_ADDRESS_TABLE_ADDRESS, signerOrProvider);
        const isRegistered = await arbAddressTable.addressExists(address);
        if (isRegistered) {
            const index = (await arbAddressTable.lookup(address)).toNumber();
            addressToIndexMemo[address] = index;
            return index;
        }
        else {
            return -1;
        }
    };
})();
/**
  // to use:
  ```js
  const mySerializeParamsFunction = argSerializerConstructor("rpcurl")
  mySerializeParamsFunction(["4","5", "6"])
  ```
*/
const argSerializerConstructor = (arbProvider) => {
    return async (params) => {
        return await exports.serializeParams(params, async (address) => {
            return await exports.getAddressIndex(address, arbProvider);
        });
    };
};
exports.argSerializerConstructor = argSerializerConstructor;
const isAddress = (input) => typeof input === 'string' && address_1.isAddress(input);
const toUint = (val, bytes) => bytes_1.hexZeroPad(bignumber_1.BigNumber.from(val).toHexString(), bytes);
//  outputs string suitable for formatting
const formatPrimative = (value) => {
    if (isAddress(value)) {
        return value;
    }
    else if (typeof value === 'boolean') {
        return toUint(value ? 1 : 0, 1);
    }
    else if (typeof value === 'number' ||
        +value ||
        bignumber_1.BigNumber.isBigNumber(value)) {
        return toUint(value, 32);
    }
    else {
        throw new Error('unsupported type');
    }
};
/**
 * @param params array of serializable types to
 * @param addressToIndex optional getter of address index registered in table
 */
const serializeParams = async (params, addressToIndex = () => new Promise(exec => exec(-1))) => {
    const formattedParams = [];
    for (const param of params) {
        // handle arrays
        if (Array.isArray(param)) {
            let paramArray = param;
            formattedParams.push(toUint(paramArray.length, 1));
            if (isAddress(paramArray[0])) {
                const indices = await Promise.all(paramArray.map(async (address) => await addressToIndex(address)));
                // If all addresses are registered, serialize as indices
                if (indices.every(i => i > -1)) {
                    paramArray = indices;
                    formattedParams.push(toUint(1, 1));
                    paramArray.forEach(value => {
                        formattedParams.push(toUint(value, 4));
                    });
                    // otherwise serialize as address
                }
                else {
                    formattedParams.push(toUint(0, 1));
                    paramArray.forEach(value => {
                        formattedParams.push(formatPrimative(value));
                    });
                }
            }
            else {
                paramArray.forEach(value => {
                    formattedParams.push(formatPrimative(value));
                });
            }
        }
        else {
            //  handle non-arrays
            if (isAddress(param)) {
                const index = await addressToIndex(param);
                if (index > -1) {
                    formattedParams.push(toUint(1, 1), toUint(index, 4));
                }
                else {
                    formattedParams.push(toUint(0, 1), formatPrimative(param));
                }
            }
            else {
                formattedParams.push(formatPrimative(param));
            }
        }
    }
    return bytes_1.concat(formattedParams);
};
exports.serializeParams = serializeParams;
