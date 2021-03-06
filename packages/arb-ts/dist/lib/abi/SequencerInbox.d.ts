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
  CallOverrides,
} from '@ethersproject/contracts'
import { BytesLike } from '@ethersproject/bytes'
import { Listener, Provider } from '@ethersproject/providers'
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi'

interface SequencerInboxInterface extends ethers.utils.Interface {
  functions: {
    'addSequencerL2Batch(bytes,uint256[],uint256,uint256,uint256,bytes32)': FunctionFragment
    'addSequencerL2BatchFromOrigin(bytes,uint256[],uint256,uint256,uint256,bytes32)': FunctionFragment
    'delayedInbox()': FunctionFragment
    'forceInclusion(uint256,uint8,uint256[2],uint256,uint256,address,bytes32)': FunctionFragment
    'inboxAccs(uint256)': FunctionFragment
    'initialize(address,address,uint256,uint256)': FunctionFragment
    'isMaster()': FunctionFragment
    'maxDelayBlocks()': FunctionFragment
    'maxDelaySeconds()': FunctionFragment
    'messageCount()': FunctionFragment
    'proveBatchContainsSequenceNumber(bytes,uint256)': FunctionFragment
    'sequencer()': FunctionFragment
  }

  encodeFunctionData(
    functionFragment: 'addSequencerL2Batch',
    values: [
      BytesLike,
      BigNumberish[],
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BytesLike
    ]
  ): string
  encodeFunctionData(
    functionFragment: 'addSequencerL2BatchFromOrigin',
    values: [
      BytesLike,
      BigNumberish[],
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BytesLike
    ]
  ): string
  encodeFunctionData(
    functionFragment: 'delayedInbox',
    values?: undefined
  ): string
  encodeFunctionData(
    functionFragment: 'forceInclusion',
    values: [
      BigNumberish,
      BigNumberish,
      [BigNumberish, BigNumberish],
      BigNumberish,
      BigNumberish,
      string,
      BytesLike
    ]
  ): string
  encodeFunctionData(
    functionFragment: 'inboxAccs',
    values: [BigNumberish]
  ): string
  encodeFunctionData(
    functionFragment: 'initialize',
    values: [string, string, BigNumberish, BigNumberish]
  ): string
  encodeFunctionData(functionFragment: 'isMaster', values?: undefined): string
  encodeFunctionData(
    functionFragment: 'maxDelayBlocks',
    values?: undefined
  ): string
  encodeFunctionData(
    functionFragment: 'maxDelaySeconds',
    values?: undefined
  ): string
  encodeFunctionData(
    functionFragment: 'messageCount',
    values?: undefined
  ): string
  encodeFunctionData(
    functionFragment: 'proveBatchContainsSequenceNumber',
    values: [BytesLike, BigNumberish]
  ): string
  encodeFunctionData(functionFragment: 'sequencer', values?: undefined): string

  decodeFunctionResult(
    functionFragment: 'addSequencerL2Batch',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'addSequencerL2BatchFromOrigin',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'delayedInbox',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'forceInclusion',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'inboxAccs', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'initialize', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'isMaster', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'maxDelayBlocks',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'maxDelaySeconds',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'messageCount',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'proveBatchContainsSequenceNumber',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'sequencer', data: BytesLike): Result

  events: {
    'DelayedInboxForced(uint256,bytes32,uint256,uint256,bytes32[2],uint256)': EventFragment
    'SequencerBatchDelivered(uint256,bytes32,uint256,bytes32,bytes,uint256[],uint256,uint256,uint256,bytes32,uint256)': EventFragment
    'SequencerBatchDeliveredFromOrigin(uint256,bytes32,uint256,bytes32,bytes32,uint256)': EventFragment
  }

  getEvent(nameOrSignatureOrTopic: 'DelayedInboxForced'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'SequencerBatchDelivered'): EventFragment
  getEvent(
    nameOrSignatureOrTopic: 'SequencerBatchDeliveredFromOrigin'
  ): EventFragment
}

export class SequencerInbox extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  on(event: EventFilter | string, listener: Listener): this
  once(event: EventFilter | string, listener: Listener): this
  addListener(eventName: EventFilter | string, listener: Listener): this
  removeAllListeners(eventName: EventFilter | string): this
  removeListener(eventName: any, listener: Listener): this

  interface: SequencerInboxInterface

  functions: {
    addSequencerL2Batch(
      transactions: BytesLike,
      lengths: BigNumberish[],
      l1BlockNumber: BigNumberish,
      timestamp: BigNumberish,
      _totalDelayedMessagesRead: BigNumberish,
      afterAcc: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    'addSequencerL2Batch(bytes,uint256[],uint256,uint256,uint256,bytes32)'(
      transactions: BytesLike,
      lengths: BigNumberish[],
      l1BlockNumber: BigNumberish,
      timestamp: BigNumberish,
      _totalDelayedMessagesRead: BigNumberish,
      afterAcc: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    addSequencerL2BatchFromOrigin(
      transactions: BytesLike,
      lengths: BigNumberish[],
      l1BlockNumber: BigNumberish,
      timestamp: BigNumberish,
      _totalDelayedMessagesRead: BigNumberish,
      afterAcc: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    'addSequencerL2BatchFromOrigin(bytes,uint256[],uint256,uint256,uint256,bytes32)'(
      transactions: BytesLike,
      lengths: BigNumberish[],
      l1BlockNumber: BigNumberish,
      timestamp: BigNumberish,
      _totalDelayedMessagesRead: BigNumberish,
      afterAcc: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    delayedInbox(overrides?: CallOverrides): Promise<[string]>

    'delayedInbox()'(overrides?: CallOverrides): Promise<[string]>

    forceInclusion(
      _totalDelayedMessagesRead: BigNumberish,
      kind: BigNumberish,
      l1BlockAndTimestamp: [BigNumberish, BigNumberish],
      inboxSeqNum: BigNumberish,
      gasPriceL1: BigNumberish,
      sender: string,
      messageDataHash: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    'forceInclusion(uint256,uint8,uint256[2],uint256,uint256,address,bytes32)'(
      _totalDelayedMessagesRead: BigNumberish,
      kind: BigNumberish,
      l1BlockAndTimestamp: [BigNumberish, BigNumberish],
      inboxSeqNum: BigNumberish,
      gasPriceL1: BigNumberish,
      sender: string,
      messageDataHash: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    inboxAccs(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>

    'inboxAccs(uint256)'(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>

    initialize(
      _delayedInbox: string,
      _sequencer: string,
      _maxDelayBlocks: BigNumberish,
      _maxDelaySeconds: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    'initialize(address,address,uint256,uint256)'(
      _delayedInbox: string,
      _sequencer: string,
      _maxDelayBlocks: BigNumberish,
      _maxDelaySeconds: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    isMaster(overrides?: CallOverrides): Promise<[boolean]>

    'isMaster()'(overrides?: CallOverrides): Promise<[boolean]>

    maxDelayBlocks(overrides?: CallOverrides): Promise<[BigNumber]>

    'maxDelayBlocks()'(overrides?: CallOverrides): Promise<[BigNumber]>

    maxDelaySeconds(overrides?: CallOverrides): Promise<[BigNumber]>

    'maxDelaySeconds()'(overrides?: CallOverrides): Promise<[BigNumber]>

    messageCount(overrides?: CallOverrides): Promise<[BigNumber]>

    'messageCount()'(overrides?: CallOverrides): Promise<[BigNumber]>

    proveBatchContainsSequenceNumber(
      proof: BytesLike,
      inboxCount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, string]>

    'proveBatchContainsSequenceNumber(bytes,uint256)'(
      proof: BytesLike,
      inboxCount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, string]>

    sequencer(overrides?: CallOverrides): Promise<[string]>

    'sequencer()'(overrides?: CallOverrides): Promise<[string]>
  }

  addSequencerL2Batch(
    transactions: BytesLike,
    lengths: BigNumberish[],
    l1BlockNumber: BigNumberish,
    timestamp: BigNumberish,
    _totalDelayedMessagesRead: BigNumberish,
    afterAcc: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  'addSequencerL2Batch(bytes,uint256[],uint256,uint256,uint256,bytes32)'(
    transactions: BytesLike,
    lengths: BigNumberish[],
    l1BlockNumber: BigNumberish,
    timestamp: BigNumberish,
    _totalDelayedMessagesRead: BigNumberish,
    afterAcc: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  addSequencerL2BatchFromOrigin(
    transactions: BytesLike,
    lengths: BigNumberish[],
    l1BlockNumber: BigNumberish,
    timestamp: BigNumberish,
    _totalDelayedMessagesRead: BigNumberish,
    afterAcc: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  'addSequencerL2BatchFromOrigin(bytes,uint256[],uint256,uint256,uint256,bytes32)'(
    transactions: BytesLike,
    lengths: BigNumberish[],
    l1BlockNumber: BigNumberish,
    timestamp: BigNumberish,
    _totalDelayedMessagesRead: BigNumberish,
    afterAcc: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  delayedInbox(overrides?: CallOverrides): Promise<string>

  'delayedInbox()'(overrides?: CallOverrides): Promise<string>

  forceInclusion(
    _totalDelayedMessagesRead: BigNumberish,
    kind: BigNumberish,
    l1BlockAndTimestamp: [BigNumberish, BigNumberish],
    inboxSeqNum: BigNumberish,
    gasPriceL1: BigNumberish,
    sender: string,
    messageDataHash: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  'forceInclusion(uint256,uint8,uint256[2],uint256,uint256,address,bytes32)'(
    _totalDelayedMessagesRead: BigNumberish,
    kind: BigNumberish,
    l1BlockAndTimestamp: [BigNumberish, BigNumberish],
    inboxSeqNum: BigNumberish,
    gasPriceL1: BigNumberish,
    sender: string,
    messageDataHash: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  inboxAccs(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>

  'inboxAccs(uint256)'(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>

  initialize(
    _delayedInbox: string,
    _sequencer: string,
    _maxDelayBlocks: BigNumberish,
    _maxDelaySeconds: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  'initialize(address,address,uint256,uint256)'(
    _delayedInbox: string,
    _sequencer: string,
    _maxDelayBlocks: BigNumberish,
    _maxDelaySeconds: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  isMaster(overrides?: CallOverrides): Promise<boolean>

  'isMaster()'(overrides?: CallOverrides): Promise<boolean>

  maxDelayBlocks(overrides?: CallOverrides): Promise<BigNumber>

  'maxDelayBlocks()'(overrides?: CallOverrides): Promise<BigNumber>

  maxDelaySeconds(overrides?: CallOverrides): Promise<BigNumber>

  'maxDelaySeconds()'(overrides?: CallOverrides): Promise<BigNumber>

  messageCount(overrides?: CallOverrides): Promise<BigNumber>

  'messageCount()'(overrides?: CallOverrides): Promise<BigNumber>

  proveBatchContainsSequenceNumber(
    proof: BytesLike,
    inboxCount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[BigNumber, string]>

  'proveBatchContainsSequenceNumber(bytes,uint256)'(
    proof: BytesLike,
    inboxCount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[BigNumber, string]>

  sequencer(overrides?: CallOverrides): Promise<string>

  'sequencer()'(overrides?: CallOverrides): Promise<string>

  callStatic: {
    addSequencerL2Batch(
      transactions: BytesLike,
      lengths: BigNumberish[],
      l1BlockNumber: BigNumberish,
      timestamp: BigNumberish,
      _totalDelayedMessagesRead: BigNumberish,
      afterAcc: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>

    'addSequencerL2Batch(bytes,uint256[],uint256,uint256,uint256,bytes32)'(
      transactions: BytesLike,
      lengths: BigNumberish[],
      l1BlockNumber: BigNumberish,
      timestamp: BigNumberish,
      _totalDelayedMessagesRead: BigNumberish,
      afterAcc: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>

    addSequencerL2BatchFromOrigin(
      transactions: BytesLike,
      lengths: BigNumberish[],
      l1BlockNumber: BigNumberish,
      timestamp: BigNumberish,
      _totalDelayedMessagesRead: BigNumberish,
      afterAcc: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>

    'addSequencerL2BatchFromOrigin(bytes,uint256[],uint256,uint256,uint256,bytes32)'(
      transactions: BytesLike,
      lengths: BigNumberish[],
      l1BlockNumber: BigNumberish,
      timestamp: BigNumberish,
      _totalDelayedMessagesRead: BigNumberish,
      afterAcc: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>

    delayedInbox(overrides?: CallOverrides): Promise<string>

    'delayedInbox()'(overrides?: CallOverrides): Promise<string>

    forceInclusion(
      _totalDelayedMessagesRead: BigNumberish,
      kind: BigNumberish,
      l1BlockAndTimestamp: [BigNumberish, BigNumberish],
      inboxSeqNum: BigNumberish,
      gasPriceL1: BigNumberish,
      sender: string,
      messageDataHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>

    'forceInclusion(uint256,uint8,uint256[2],uint256,uint256,address,bytes32)'(
      _totalDelayedMessagesRead: BigNumberish,
      kind: BigNumberish,
      l1BlockAndTimestamp: [BigNumberish, BigNumberish],
      inboxSeqNum: BigNumberish,
      gasPriceL1: BigNumberish,
      sender: string,
      messageDataHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>

    inboxAccs(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>

    'inboxAccs(uint256)'(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>

    initialize(
      _delayedInbox: string,
      _sequencer: string,
      _maxDelayBlocks: BigNumberish,
      _maxDelaySeconds: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>

    'initialize(address,address,uint256,uint256)'(
      _delayedInbox: string,
      _sequencer: string,
      _maxDelayBlocks: BigNumberish,
      _maxDelaySeconds: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>

    isMaster(overrides?: CallOverrides): Promise<boolean>

    'isMaster()'(overrides?: CallOverrides): Promise<boolean>

    maxDelayBlocks(overrides?: CallOverrides): Promise<BigNumber>

    'maxDelayBlocks()'(overrides?: CallOverrides): Promise<BigNumber>

    maxDelaySeconds(overrides?: CallOverrides): Promise<BigNumber>

    'maxDelaySeconds()'(overrides?: CallOverrides): Promise<BigNumber>

    messageCount(overrides?: CallOverrides): Promise<BigNumber>

    'messageCount()'(overrides?: CallOverrides): Promise<BigNumber>

    proveBatchContainsSequenceNumber(
      proof: BytesLike,
      inboxCount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, string]>

    'proveBatchContainsSequenceNumber(bytes,uint256)'(
      proof: BytesLike,
      inboxCount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, string]>

    sequencer(overrides?: CallOverrides): Promise<string>

    'sequencer()'(overrides?: CallOverrides): Promise<string>
  }

  filters: {
    DelayedInboxForced(
      firstMessageNum: BigNumberish | null,
      beforeAcc: BytesLike | null,
      newMessageCount: null,
      totalDelayedMessagesRead: null,
      afterAccAndDelayed: null,
      seqBatchIndex: null
    ): EventFilter

    SequencerBatchDelivered(
      firstMessageNum: BigNumberish | null,
      beforeAcc: BytesLike | null,
      newMessageCount: null,
      afterAcc: null,
      transactions: null,
      lengths: null,
      l1BlockNumber: null,
      timestamp: null,
      totalDelayedMessagesRead: null,
      delayedAcc: null,
      seqBatchIndex: null
    ): EventFilter

    SequencerBatchDeliveredFromOrigin(
      firstMessageNum: BigNumberish | null,
      beforeAcc: BytesLike | null,
      newMessageCount: null,
      afterAcc: null,
      delayedAcc: null,
      seqBatchIndex: null
    ): EventFilter
  }

  estimateGas: {
    addSequencerL2Batch(
      transactions: BytesLike,
      lengths: BigNumberish[],
      l1BlockNumber: BigNumberish,
      timestamp: BigNumberish,
      _totalDelayedMessagesRead: BigNumberish,
      afterAcc: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>

    'addSequencerL2Batch(bytes,uint256[],uint256,uint256,uint256,bytes32)'(
      transactions: BytesLike,
      lengths: BigNumberish[],
      l1BlockNumber: BigNumberish,
      timestamp: BigNumberish,
      _totalDelayedMessagesRead: BigNumberish,
      afterAcc: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>

    addSequencerL2BatchFromOrigin(
      transactions: BytesLike,
      lengths: BigNumberish[],
      l1BlockNumber: BigNumberish,
      timestamp: BigNumberish,
      _totalDelayedMessagesRead: BigNumberish,
      afterAcc: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>

    'addSequencerL2BatchFromOrigin(bytes,uint256[],uint256,uint256,uint256,bytes32)'(
      transactions: BytesLike,
      lengths: BigNumberish[],
      l1BlockNumber: BigNumberish,
      timestamp: BigNumberish,
      _totalDelayedMessagesRead: BigNumberish,
      afterAcc: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>

    delayedInbox(overrides?: CallOverrides): Promise<BigNumber>

    'delayedInbox()'(overrides?: CallOverrides): Promise<BigNumber>

    forceInclusion(
      _totalDelayedMessagesRead: BigNumberish,
      kind: BigNumberish,
      l1BlockAndTimestamp: [BigNumberish, BigNumberish],
      inboxSeqNum: BigNumberish,
      gasPriceL1: BigNumberish,
      sender: string,
      messageDataHash: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>

    'forceInclusion(uint256,uint8,uint256[2],uint256,uint256,address,bytes32)'(
      _totalDelayedMessagesRead: BigNumberish,
      kind: BigNumberish,
      l1BlockAndTimestamp: [BigNumberish, BigNumberish],
      inboxSeqNum: BigNumberish,
      gasPriceL1: BigNumberish,
      sender: string,
      messageDataHash: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>

    inboxAccs(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>

    'inboxAccs(uint256)'(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    initialize(
      _delayedInbox: string,
      _sequencer: string,
      _maxDelayBlocks: BigNumberish,
      _maxDelaySeconds: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>

    'initialize(address,address,uint256,uint256)'(
      _delayedInbox: string,
      _sequencer: string,
      _maxDelayBlocks: BigNumberish,
      _maxDelaySeconds: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>

    isMaster(overrides?: CallOverrides): Promise<BigNumber>

    'isMaster()'(overrides?: CallOverrides): Promise<BigNumber>

    maxDelayBlocks(overrides?: CallOverrides): Promise<BigNumber>

    'maxDelayBlocks()'(overrides?: CallOverrides): Promise<BigNumber>

    maxDelaySeconds(overrides?: CallOverrides): Promise<BigNumber>

    'maxDelaySeconds()'(overrides?: CallOverrides): Promise<BigNumber>

    messageCount(overrides?: CallOverrides): Promise<BigNumber>

    'messageCount()'(overrides?: CallOverrides): Promise<BigNumber>

    proveBatchContainsSequenceNumber(
      proof: BytesLike,
      inboxCount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    'proveBatchContainsSequenceNumber(bytes,uint256)'(
      proof: BytesLike,
      inboxCount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    sequencer(overrides?: CallOverrides): Promise<BigNumber>

    'sequencer()'(overrides?: CallOverrides): Promise<BigNumber>
  }

  populateTransaction: {
    addSequencerL2Batch(
      transactions: BytesLike,
      lengths: BigNumberish[],
      l1BlockNumber: BigNumberish,
      timestamp: BigNumberish,
      _totalDelayedMessagesRead: BigNumberish,
      afterAcc: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    'addSequencerL2Batch(bytes,uint256[],uint256,uint256,uint256,bytes32)'(
      transactions: BytesLike,
      lengths: BigNumberish[],
      l1BlockNumber: BigNumberish,
      timestamp: BigNumberish,
      _totalDelayedMessagesRead: BigNumberish,
      afterAcc: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    addSequencerL2BatchFromOrigin(
      transactions: BytesLike,
      lengths: BigNumberish[],
      l1BlockNumber: BigNumberish,
      timestamp: BigNumberish,
      _totalDelayedMessagesRead: BigNumberish,
      afterAcc: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    'addSequencerL2BatchFromOrigin(bytes,uint256[],uint256,uint256,uint256,bytes32)'(
      transactions: BytesLike,
      lengths: BigNumberish[],
      l1BlockNumber: BigNumberish,
      timestamp: BigNumberish,
      _totalDelayedMessagesRead: BigNumberish,
      afterAcc: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    delayedInbox(overrides?: CallOverrides): Promise<PopulatedTransaction>

    'delayedInbox()'(overrides?: CallOverrides): Promise<PopulatedTransaction>

    forceInclusion(
      _totalDelayedMessagesRead: BigNumberish,
      kind: BigNumberish,
      l1BlockAndTimestamp: [BigNumberish, BigNumberish],
      inboxSeqNum: BigNumberish,
      gasPriceL1: BigNumberish,
      sender: string,
      messageDataHash: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    'forceInclusion(uint256,uint8,uint256[2],uint256,uint256,address,bytes32)'(
      _totalDelayedMessagesRead: BigNumberish,
      kind: BigNumberish,
      l1BlockAndTimestamp: [BigNumberish, BigNumberish],
      inboxSeqNum: BigNumberish,
      gasPriceL1: BigNumberish,
      sender: string,
      messageDataHash: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    inboxAccs(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    'inboxAccs(uint256)'(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    initialize(
      _delayedInbox: string,
      _sequencer: string,
      _maxDelayBlocks: BigNumberish,
      _maxDelaySeconds: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    'initialize(address,address,uint256,uint256)'(
      _delayedInbox: string,
      _sequencer: string,
      _maxDelayBlocks: BigNumberish,
      _maxDelaySeconds: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    isMaster(overrides?: CallOverrides): Promise<PopulatedTransaction>

    'isMaster()'(overrides?: CallOverrides): Promise<PopulatedTransaction>

    maxDelayBlocks(overrides?: CallOverrides): Promise<PopulatedTransaction>

    'maxDelayBlocks()'(overrides?: CallOverrides): Promise<PopulatedTransaction>

    maxDelaySeconds(overrides?: CallOverrides): Promise<PopulatedTransaction>

    'maxDelaySeconds()'(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    messageCount(overrides?: CallOverrides): Promise<PopulatedTransaction>

    'messageCount()'(overrides?: CallOverrides): Promise<PopulatedTransaction>

    proveBatchContainsSequenceNumber(
      proof: BytesLike,
      inboxCount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    'proveBatchContainsSequenceNumber(bytes,uint256)'(
      proof: BytesLike,
      inboxCount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    sequencer(overrides?: CallOverrides): Promise<PopulatedTransaction>

    'sequencer()'(overrides?: CallOverrides): Promise<PopulatedTransaction>
  }
}
