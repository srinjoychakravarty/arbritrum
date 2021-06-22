"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Outbox__factory = void 0;
const contracts_1 = require("@ethersproject/contracts");
class Outbox__factory extends contracts_1.ContractFactory {
    constructor(signer) {
        super(_abi, _bytecode, signer);
    }
    deploy(overrides) {
        return super.deploy(overrides || {});
    }
    getDeployTransaction(overrides) {
        return super.getDeployTransaction(overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static connect(address, signerOrProvider) {
        return new contracts_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.Outbox__factory = Outbox__factory;
const _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'destAddr',
                type: 'address',
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'l2Sender',
                type: 'address',
            },
            {
                indexed: true,
                internalType: 'uint256',
                name: 'outboxIndex',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'transactionIndex',
                type: 'uint256',
            },
        ],
        name: 'OutBoxTransactionExecuted',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'uint256',
                name: 'batchNum',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'outboxIndex',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'bytes32',
                name: 'outputRoot',
                type: 'bytes32',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'numInBatch',
                type: 'uint256',
            },
        ],
        name: 'OutboxEntryCreated',
        type: 'event',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'l2Sender',
                type: 'address',
            },
            {
                internalType: 'address',
                name: 'destAddr',
                type: 'address',
            },
            {
                internalType: 'uint256',
                name: 'l2Block',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: 'l1Block',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: 'l2Timestamp',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: 'amount',
                type: 'uint256',
            },
            {
                internalType: 'bytes',
                name: 'calldataForL1',
                type: 'bytes',
            },
        ],
        name: 'calculateItemHash',
        outputs: [
            {
                internalType: 'bytes32',
                name: '',
                type: 'bytes32',
            },
        ],
        stateMutability: 'pure',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'bytes32[]',
                name: 'proof',
                type: 'bytes32[]',
            },
            {
                internalType: 'uint256',
                name: 'path',
                type: 'uint256',
            },
            {
                internalType: 'bytes32',
                name: 'item',
                type: 'bytes32',
            },
        ],
        name: 'calculateMerkleRoot',
        outputs: [
            {
                internalType: 'bytes32',
                name: '',
                type: 'bytes32',
            },
        ],
        stateMutability: 'pure',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'outboxIndex',
                type: 'uint256',
            },
            {
                internalType: 'bytes32[]',
                name: 'proof',
                type: 'bytes32[]',
            },
            {
                internalType: 'uint256',
                name: 'index',
                type: 'uint256',
            },
            {
                internalType: 'address',
                name: 'l2Sender',
                type: 'address',
            },
            {
                internalType: 'address',
                name: 'destAddr',
                type: 'address',
            },
            {
                internalType: 'uint256',
                name: 'l2Block',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: 'l1Block',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: 'l2Timestamp',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: 'amount',
                type: 'uint256',
            },
            {
                internalType: 'bytes',
                name: 'calldataForL1',
                type: 'bytes',
            },
        ],
        name: 'executeTransaction',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '_rollup',
                type: 'address',
            },
            {
                internalType: 'contract IBridge',
                name: '_bridge',
                type: 'address',
            },
        ],
        name: 'initialize',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'isMaster',
        outputs: [
            {
                internalType: 'bool',
                name: '',
                type: 'bool',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'l2ToL1Block',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'l2ToL1EthBlock',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'l2ToL1Sender',
        outputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'l2ToL1Timestamp',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        name: 'outboxes',
        outputs: [
            {
                internalType: 'contract OutboxEntry',
                name: '',
                type: 'address',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'outboxesLength',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'bytes',
                name: 'sendsData',
                type: 'bytes',
            },
            {
                internalType: 'uint256[]',
                name: 'sendLengths',
                type: 'uint256[]',
            },
        ],
        name: 'processOutgoingMessages',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
];
const _bytecode = '0x608060405234801561001057600080fd5b506000805460ff1916600117905561185c8061002d6000396000f3fe608060405234801561001057600080fd5b50600436106100b35760003560e01c80636f791d29116100715780636f791d29146102a757806380648b02146102c35780638515bc6a146102cb5780639c5cfe0b146102d35780639f0c04bf146103cf578063b0f305371461046e576100b3565b80627436d3146100b857806305d3efe6146101705780630c726847146101785780634654779014610238578063485cc955146102405780636d5161ec1461026e575b600080fd5b61015e600480360360608110156100ce57600080fd5b810190602081018135600160201b8111156100e857600080fd5b8201836020820111156100fa57600080fd5b803590602001918460208302840111600160201b8311171561011b57600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295505082359350505060200135610476565b60408051918252519081900360200190f35b61015e6104b1565b6102366004803603604081101561018e57600080fd5b810190602081018135600160201b8111156101a857600080fd5b8201836020820111156101ba57600080fd5b803590602001918460018302840111600160201b831117156101db57600080fd5b919390929091602081019035600160201b8111156101f857600080fd5b82018360208201111561020a57600080fd5b803590602001918460208302840111600160201b8311171561022b57600080fd5b5090925090506104b7565b005b61015e6105a3565b6102366004803603604081101561025657600080fd5b506001600160a01b03813581169160200135166105b2565b61028b6004803603602081101561028457600080fd5b5035610690565b604080516001600160a01b039092168252519081900360200190f35b6102af6106b7565b604080519115158252519081900360200190f35b61028b6106c0565b61015e6106cf565b61023660048036036101408110156102ea57600080fd5b81359190810190604081016020820135600160201b81111561030b57600080fd5b82018360208201111561031d57600080fd5b803590602001918460208302840111600160201b8311171561033e57600080fd5b919390928235926001600160a01b03602082013581169360408301359091169260608301359260808101359260a08201359260c08301359261010081019060e00135600160201b81111561039157600080fd5b8201836020820111156103a357600080fd5b803590602001918460018302840111600160201b831117156103c457600080fd5b5090925090506106e5565b61015e600480360360e08110156103e557600080fd5b6001600160a01b03823581169260208101359091169160408201359160608101359160808201359160a08101359181019060e0810160c0820135600160201b81111561043057600080fd5b82018360208201111561044257600080fd5b803590602001918460018302840111600160201b8311171561046357600080fd5b5090925090506108a8565b61015e610948565b60006104a98484846040516020018082815260200191505060405160208183030381529060405280519060200120610957565b949350505050565b60035490565b60005461010090046001600160a01b03163314610509576040805162461bcd60e51b815260206004820152600b60248201526a04f4e4c595f524f4c4c55560ac1b604482015290519081900360640190fd5b806000805b8281101561059a5761057887838888888681811061052857fe5b9050602002013586019261053e93929190611329565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610a2592505050565b84848281811061058457fe5b602002919091013592909201915060010161050e565b50505050505050565b6005546001600160801b031690565b60005461010090046001600160a01b031615610604576040805162461bcd60e51b815260206004820152600c60248201526b1053149150511657d253925560a21b604482015290519081900360640190fd5b60008054610100600160a81b0319166101006001600160a01b038581169190910291909117909155600180546001600160a01b03191691831691909117905560405161064f9061131c565b604051809103906000f08015801561066b573d6000803e3d6000fd5b50600280546001600160a01b0319166001600160a01b03929092169190911790555050565b6003818154811061069d57fe5b6000918252602090912001546001600160a01b0316905081565b60005460ff1690565b6004546001600160a01b031690565b600554600160801b90046001600160801b031690565b60006106f789898989898989896108a8565b905061073a8d8d8d808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152508f9250869150610be89050565b8c896001600160a01b0316896001600160a01b03167f20af7f3bbfe38132b8900ae295cd9c8d1914be7052d061a511f3f728dab189648d6040518082815260200191505060405180910390a46004805460058054600680546001600160a01b038f81166001600160a01b03198716179096556001600160801b038c8116600160801b9081028f83166001600160801b0319808816919091178416919091179096558c821695831695909517909255604080516020601f8b018190048102820181019092528981529690951695828416959490930482169391169161083c918e918b918b908b9081908401838280828437600092019190915250610e4192505050565b600480546001600160a01b03959095166001600160a01b031990951694909417909355600580546001600160801b03928316600160801b029383166001600160801b03199182161783169390931790556006805491909316911617905550505050505050505050505050565b600060038960601b60601c6001600160a01b03168960601b60601c6001600160a01b0316898989898989604051602001808a60ff1660ff1660f81b815260010189815260200188815260200187815260200186815260200185815260200184815260200183838082843780830192505050995050505050505050505060405160208183030381529060405280519060200120905098975050505050505050565b6006546001600160801b031690565b825160009061010081111561096b57600080fd5b8260005b82811015610a1b57600286066109c85786818151811061098b57fe5b6020026020010151826040516020018083815260200182815260200192505050604051602081830303815290604052805190602001209150610a0d565b818782815181106109d557fe5b602002602001015160405160200180838152602001828152602001925050506040516020818303038152906040528051906020012091505b60028604955060010161096f565b5095945050505050565b805160009082908290610a3457fe5b01602001516001600160f81b0319161415610be5578051606114610a8c576040805162461bcd60e51b815260206004820152600a6024820152690848288be988a9c8ea8960b31b604482015290519081900360640190fd5b6000610a9f82600163ffffffff61105e16565b90506000610ab483602163ffffffff61105e16565b90506000610ac984604163ffffffff61105e16565b600254909150600090610ae4906001600160a01b03166110b7565b9050806001600160a01b0316635b36c66b83856040518363ffffffff1660e01b81526004018083815260200182815260200192505050600060405180830381600087803b158015610b3457600080fd5b505af1158015610b48573d6000803e3d6000fd5b5050600380546001810182556000919091527fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b810180546001600160a01b0386166001600160a01b0319909116179055604080518281526020810187905280820188905290519193508792507fe5ccc8d7080a4904b2f4e42d91e8f06b13fe6cb2181ad1fe14644e856b44c131919081900360600190a250505050505b50565b61010083511115610c31576040805162461bcd60e51b815260206004820152600e60248201526d50524f4f465f544f4f5f4c4f4e4760901b604482015290519081900360640190fd5b825160020a8210610c7c576040805162461bcd60e51b815260206004820152601060248201526f1410551217d393d517d352539253505360821b604482015290519081900360640190fd5b6000610c89848484610476565b9050600060038681548110610c9a57fe5b6000918252602090912001546001600160a01b0316905080610cef576040805162461bcd60e51b815260206004820152600960248201526809c9ebe9eaaa8849eb60bb1b604482015290519081900360640190fd5b600084865160405160200180838152602001828152602001925050506040516020818303038152906040528051906020012090506000826001600160a01b03166357d61c0b85846040518363ffffffff1660e01b81526004018083815260200182815260200192505050602060405180830381600087803b158015610d7357600080fd5b505af1158015610d87573d6000803e3d6000fd5b505050506040513d6020811015610d9d57600080fd5b5051905080610e3757826001600160a01b03166383197ef06040518163ffffffff1660e01b8152600401600060405180830381600087803b158015610de157600080fd5b505af1158015610df5573d6000803e3d6000fd5b50505050600060038981548110610e0857fe5b9060005260206000200160006101000a8154816001600160a01b0302191690836001600160a01b031602179055505b5050505050505050565b600154604051639e5d4c4960e01b81526001600160a01b03858116600483019081526024830186905260606044840181815286516064860152865160009692959490921693639e5d4c49938a938a938a93909160849091019060208501908083838e5b83811015610ebc578181015183820152602001610ea4565b50505050905090810190601f168015610ee95780820380516001836020036101000a031916815260200191505b50945050505050600060405180830381600087803b158015610f0a57600080fd5b505af1158015610f1e573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040908152811015610f4757600080fd5b815160208301805160405192949293830192919084600160201b821115610f6d57600080fd5b908301906020820185811115610f8257600080fd5b8251600160201b811182820188101715610f9b57600080fd5b82525081516020918201929091019080838360005b83811015610fc8578181015183820152602001610fb0565b50505050905090810190601f168015610ff55780820380516001836020036101000a031916815260200191505b506040525050509150915081611057578051156110155780518082602001fd5b6040805162461bcd60e51b81526020600482015260126024820152711094925111d157d0d0531317d1905253115160721b604482015290519081900360640190fd5b5050505050565b600081602001835110156110ae576040805162461bcd60e51b815260206004820152601260248201527152656164206f7574206f6620626f756e647360701b604482015290519081900360640190fd5b50016020015190565b6000816110cc816001600160a01b0316611275565b604051806040016040528060188152602001772727afa1a7a72a2920a1aa2fa1a627a722afa6a0a9aa22a960411b815250906111865760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561114b578181015183820152602001611133565b50505050905090810190601f1680156111785780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50806001600160a01b0316636f791d296040518163ffffffff1660e01b815260040160206040518083038186803b1580156111c057600080fd5b505afa1580156111d4573d6000803e3d6000fd5b505050506040513d60208110156111ea57600080fd5b505160408051808201909152600c81526b21a627a722afa6a0a9aa22a960a11b60208201529061125b5760405162461bcd60e51b815260206004820181815283516024840152835190928392604490910191908501908083836000831561114b578181015183820152602001611133565b5061126e836001600160a01b031661127f565b9392505050565b803b15155b919050565b6000604051733d602d80600a3d3981f3363d3d373d3d3d363d7360601b81528260601b60148201526e5af43d82803e903d91602b57fd5bf360881b60288201526037816000f09150506001600160a01b03811661127a576040805162461bcd60e51b8152602060048201526016602482015275115490cc4c4d8dce8818dc99585d194819985a5b195960521b604482015290519081900360640190fd5b6104d58061135283390190565b60008085851115611338578182fd5b83861115611344578182fd5b505082019391909203915056fe608060405234801561001057600080fd5b506000805460ff191660011790556104a88061002d6000396000f3fe608060405234801561001057600080fd5b506004361061006d5760003560e01c80635780e4e71461007257806357d61c0b1461008c5780635b36c66b146100af5780636f791d29146100d457806383197ef0146100f05780639db9af81146100f8578063ebf0c71714610115575b600080fd5b61007a61011d565b60408051918252519081900360200190f35b61007a600480360360408110156100a257600080fd5b5080359060200135610123565b6100d2600480360360408110156100c557600080fd5b508035906020013561023b565b005b6100dc610330565b604080519115158252519081900360200190f35b6100d2610339565b6100dc6004803603602081101561010e57600080fd5b503561039a565b61007a6103af565b60025481565b6000805461010090046001600160a01b0316331461017a576040805162461bcd60e51b815260206004820152600f60248201526e09c9ea8be8ca49e9abe9eaaa8849eb608b1b604482015290519081900360640190fd5b60008281526003602052604090205460ff16156101ce576040805162461bcd60e51b815260206004820152600d60248201526c1053149150511657d4d4115395609a1b604482015290519081900360640190fd5b600154831461020f576040805162461bcd60e51b815260206004820152600860248201526710905117d493d3d560c21b604482015290519081900360640190fd5b506000818152600360205260409020805460ff1916600117905560028054600019019081905592915050565b60005461010090046001600160a01b03161561028d576040805162461bcd60e51b815260206004820152600c60248201526b1053149150511657d253925560a21b604482015290519081900360640190fd5b600154156102d1576040805162461bcd60e51b815260206004820152600c60248201526b1053149150511657d253925560a21b604482015290519081900360640190fd5b8161030e576040805162461bcd60e51b815260206004820152600860248201526710905117d493d3d560c21b604482015290519081900360640190fd5b60008054610100600160a81b0319163361010002179055600191909155600255565b60005460ff1690565b60005461010090046001600160a01b0316331461038f576040805162461bcd60e51b815260206004820152600f60248201526e09c9ea8be8ca49e9abe9eaaa8849eb608b1b604482015290519081900360640190fd5b610398336103b5565b565b60036020526000908152604090205460ff1681565b60015481565b6000546040805180820190915260098152684e4f545f434c4f4e4560b81b60208201529060ff16156104655760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561042a578181015183820152602001610412565b50505050905090810190601f1680156104575780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50806001600160a01b0316fffea264697066735822122060ded5f2eed3062d72d682d9c9161508dc45514a0b9865f849c11a588daae5e864736f6c634300060b0033a26469706673582212200921312a9bc456c5183c928b47d2dc2bac8520c4433ff775d46777baa6369dc964736f6c634300060b0033';