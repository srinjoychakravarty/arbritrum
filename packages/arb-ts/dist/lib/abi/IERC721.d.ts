/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from 'ethers'
import {
  Contract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from '@ethersproject/contracts'
import { BytesLike } from '@ethersproject/bytes'
import { Listener, Provider } from '@ethersproject/providers'
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi'

interface IERC721Interface extends ethers.utils.Interface {
  functions: {
    'approve(address,uint256)': FunctionFragment
    'balanceOf(address)': FunctionFragment
    'getApproved(uint256)': FunctionFragment
    'isApprovedForAll(address,address)': FunctionFragment
    'ownerOf(uint256)': FunctionFragment
    'safeTransferFrom(address,address,uint256)': FunctionFragment
    'setApprovalForAll(address,bool)': FunctionFragment
    'transferFrom(address,address,uint256)': FunctionFragment
  }

  encodeFunctionData(
    functionFragment: 'approve',
    values: [string, BigNumberish]
  ): string
  encodeFunctionData(functionFragment: 'balanceOf', values: [string]): string
  encodeFunctionData(
    functionFragment: 'getApproved',
    values: [BigNumberish]
  ): string
  encodeFunctionData(
    functionFragment: 'isApprovedForAll',
    values: [string, string]
  ): string
  encodeFunctionData(
    functionFragment: 'ownerOf',
    values: [BigNumberish]
  ): string
  encodeFunctionData(
    functionFragment: 'safeTransferFrom',
    values: [string, string, BigNumberish]
  ): string
  encodeFunctionData(
    functionFragment: 'setApprovalForAll',
    values: [string, boolean]
  ): string
  encodeFunctionData(
    functionFragment: 'transferFrom',
    values: [string, string, BigNumberish]
  ): string

  decodeFunctionResult(functionFragment: 'approve', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'balanceOf', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getApproved', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'isApprovedForAll',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'ownerOf', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'safeTransferFrom',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'setApprovalForAll',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'transferFrom',
    data: BytesLike
  ): Result

  events: {
    'Approval(address,address,uint256)': EventFragment
    'ApprovalForAll(address,address,bool)': EventFragment
    'Transfer(address,address,uint256)': EventFragment
  }

  getEvent(nameOrSignatureOrTopic: 'Approval'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'ApprovalForAll'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'Transfer'): EventFragment
}

export class IERC721 extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  on(event: EventFilter | string, listener: Listener): this
  once(event: EventFilter | string, listener: Listener): this
  addListener(eventName: EventFilter | string, listener: Listener): this
  removeAllListeners(eventName: EventFilter | string): this
  removeListener(eventName: any, listener: Listener): this

  interface: IERC721Interface

  functions: {
    approve(
      _approved: string,
      _tokenId: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>

    'approve(address,uint256)'(
      _approved: string,
      _tokenId: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>

    balanceOf(_owner: string, overrides?: CallOverrides): Promise<[BigNumber]>

    'balanceOf(address)'(
      _owner: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>

    getApproved(
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>

    'getApproved(uint256)'(
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>

    isApprovedForAll(
      _owner: string,
      _operator: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>

    'isApprovedForAll(address,address)'(
      _owner: string,
      _operator: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>

    ownerOf(
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>

    'ownerOf(uint256)'(
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>

    'safeTransferFrom(address,address,uint256)'(
      _from: string,
      _to: string,
      _tokenId: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>

    'safeTransferFrom(address,address,uint256,bytes)'(
      _from: string,
      _to: string,
      _tokenId: BigNumberish,
      data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>

    setApprovalForAll(
      _operator: string,
      _approved: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    'setApprovalForAll(address,bool)'(
      _operator: string,
      _approved: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    transferFrom(
      _from: string,
      _to: string,
      _tokenId: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>

    'transferFrom(address,address,uint256)'(
      _from: string,
      _to: string,
      _tokenId: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>
  }

  approve(
    _approved: string,
    _tokenId: BigNumberish,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>

  'approve(address,uint256)'(
    _approved: string,
    _tokenId: BigNumberish,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>

  balanceOf(_owner: string, overrides?: CallOverrides): Promise<BigNumber>

  'balanceOf(address)'(
    _owner: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>

  getApproved(
    _tokenId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>

  'getApproved(uint256)'(
    _tokenId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>

  isApprovedForAll(
    _owner: string,
    _operator: string,
    overrides?: CallOverrides
  ): Promise<boolean>

  'isApprovedForAll(address,address)'(
    _owner: string,
    _operator: string,
    overrides?: CallOverrides
  ): Promise<boolean>

  ownerOf(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>

  'ownerOf(uint256)'(
    _tokenId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>

  'safeTransferFrom(address,address,uint256)'(
    _from: string,
    _to: string,
    _tokenId: BigNumberish,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>

  'safeTransferFrom(address,address,uint256,bytes)'(
    _from: string,
    _to: string,
    _tokenId: BigNumberish,
    data: BytesLike,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>

  setApprovalForAll(
    _operator: string,
    _approved: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  'setApprovalForAll(address,bool)'(
    _operator: string,
    _approved: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  transferFrom(
    _from: string,
    _to: string,
    _tokenId: BigNumberish,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>

  'transferFrom(address,address,uint256)'(
    _from: string,
    _to: string,
    _tokenId: BigNumberish,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>

  callStatic: {
    approve(
      _approved: string,
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>

    'approve(address,uint256)'(
      _approved: string,
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>

    balanceOf(_owner: string, overrides?: CallOverrides): Promise<BigNumber>

    'balanceOf(address)'(
      _owner: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    getApproved(
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>

    'getApproved(uint256)'(
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>

    isApprovedForAll(
      _owner: string,
      _operator: string,
      overrides?: CallOverrides
    ): Promise<boolean>

    'isApprovedForAll(address,address)'(
      _owner: string,
      _operator: string,
      overrides?: CallOverrides
    ): Promise<boolean>

    ownerOf(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>

    'ownerOf(uint256)'(
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>

    'safeTransferFrom(address,address,uint256)'(
      _from: string,
      _to: string,
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>

    'safeTransferFrom(address,address,uint256,bytes)'(
      _from: string,
      _to: string,
      _tokenId: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>

    setApprovalForAll(
      _operator: string,
      _approved: boolean,
      overrides?: CallOverrides
    ): Promise<void>

    'setApprovalForAll(address,bool)'(
      _operator: string,
      _approved: boolean,
      overrides?: CallOverrides
    ): Promise<void>

    transferFrom(
      _from: string,
      _to: string,
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>

    'transferFrom(address,address,uint256)'(
      _from: string,
      _to: string,
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>
  }

  filters: {
    Approval(
      _owner: string | null,
      _approved: string | null,
      _tokenId: BigNumberish | null
    ): EventFilter

    ApprovalForAll(
      _owner: string | null,
      _operator: string | null,
      _approved: null
    ): EventFilter

    Transfer(
      _from: string | null,
      _to: string | null,
      _tokenId: BigNumberish | null
    ): EventFilter
  }

  estimateGas: {
    approve(
      _approved: string,
      _tokenId: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<BigNumber>

    'approve(address,uint256)'(
      _approved: string,
      _tokenId: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<BigNumber>

    balanceOf(_owner: string, overrides?: CallOverrides): Promise<BigNumber>

    'balanceOf(address)'(
      _owner: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    getApproved(
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    'getApproved(uint256)'(
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    isApprovedForAll(
      _owner: string,
      _operator: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    'isApprovedForAll(address,address)'(
      _owner: string,
      _operator: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    ownerOf(
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    'ownerOf(uint256)'(
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    'safeTransferFrom(address,address,uint256)'(
      _from: string,
      _to: string,
      _tokenId: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<BigNumber>

    'safeTransferFrom(address,address,uint256,bytes)'(
      _from: string,
      _to: string,
      _tokenId: BigNumberish,
      data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<BigNumber>

    setApprovalForAll(
      _operator: string,
      _approved: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>

    'setApprovalForAll(address,bool)'(
      _operator: string,
      _approved: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>

    transferFrom(
      _from: string,
      _to: string,
      _tokenId: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<BigNumber>

    'transferFrom(address,address,uint256)'(
      _from: string,
      _to: string,
      _tokenId: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<BigNumber>
  }

  populateTransaction: {
    approve(
      _approved: string,
      _tokenId: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>

    'approve(address,uint256)'(
      _approved: string,
      _tokenId: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>

    balanceOf(
      _owner: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    'balanceOf(address)'(
      _owner: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    getApproved(
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    'getApproved(uint256)'(
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    isApprovedForAll(
      _owner: string,
      _operator: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    'isApprovedForAll(address,address)'(
      _owner: string,
      _operator: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    ownerOf(
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    'ownerOf(uint256)'(
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    'safeTransferFrom(address,address,uint256)'(
      _from: string,
      _to: string,
      _tokenId: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>

    'safeTransferFrom(address,address,uint256,bytes)'(
      _from: string,
      _to: string,
      _tokenId: BigNumberish,
      data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>

    setApprovalForAll(
      _operator: string,
      _approved: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    'setApprovalForAll(address,bool)'(
      _operator: string,
      _approved: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    transferFrom(
      _from: string,
      _to: string,
      _tokenId: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>

    'transferFrom(address,address,uint256)'(
      _from: string,
      _to: string,
      _tokenId: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>
  }
}
