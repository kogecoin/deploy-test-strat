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
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface BaseStrategyMasterChefInterface extends ethers.utils.Interface {
  functions: {
    "balanceOf()": FunctionFragment;
    "balanceOfPool()": FunctionFragment;
    "balanceOfWant()": FunctionFragment;
    "emergencyStatus()": FunctionFragment;
    "emergencyWithdraw()": FunctionFragment;
    "getHarvestable()": FunctionFragment;
    "getName()": FunctionFragment;
    "harvest()": FunctionFragment;
    "harvestedToken()": FunctionFragment;
    "jar()": FunctionFragment;
    "jarDeposit(uint256)": FunctionFragment;
    "owner()": FunctionFragment;
    "poolId()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "rewards()": FunctionFragment;
    "salvage(address)": FunctionFragment;
    "setJar(address)": FunctionFragment;
    "setStrategist(address)": FunctionFragment;
    "strategist()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "want()": FunctionFragment;
    "withdraw(uint256)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "balanceOf", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "balanceOfPool",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "balanceOfWant",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "emergencyStatus",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "emergencyWithdraw",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getHarvestable",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "getName", values?: undefined): string;
  encodeFunctionData(functionFragment: "harvest", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "harvestedToken",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "jar", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "jarDeposit",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "poolId", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "rewards", values?: undefined): string;
  encodeFunctionData(functionFragment: "salvage", values: [string]): string;
  encodeFunctionData(functionFragment: "setJar", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setStrategist",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "strategist",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "want", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "balanceOfPool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "balanceOfWant",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "emergencyStatus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "emergencyWithdraw",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getHarvestable",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getName", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "harvest", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "harvestedToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "jar", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "jarDeposit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "poolId", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "rewards", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "salvage", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setJar", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setStrategist",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "strategist", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "want", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {
    "EmergencyWithdraw()": EventFragment;
    "Harvested(address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "Salvage(address)": EventFragment;
    "SetFee(uint256)": EventFragment;
    "SetHarvestCutoff(uint256)": EventFragment;
    "SetJar(address)": EventFragment;
    "SetMultiHarvest(address)": EventFragment;
    "SetStrategist(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "EmergencyWithdraw"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Harvested"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Salvage"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetFee"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetHarvestCutoff"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetJar"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetMultiHarvest"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetStrategist"): EventFragment;
}

export type EmergencyWithdrawEvent = TypedEvent<[] & {}>;

export type HarvestedEvent = TypedEvent<[string] & { _from: string }>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string] & { previousOwner: string; newOwner: string }
>;

export type SalvageEvent = TypedEvent<[string] & { token: string }>;

export type SetFeeEvent = TypedEvent<[BigNumber] & { value: BigNumber }>;

export type SetHarvestCutoffEvent = TypedEvent<
  [BigNumber] & { value: BigNumber }
>;

export type SetJarEvent = TypedEvent<[string] & { jar: string }>;

export type SetMultiHarvestEvent = TypedEvent<[string] & { _to: string }>;

export type SetStrategistEvent = TypedEvent<
  [string] & { _newStrategist: string }
>;

export class BaseStrategyMasterChef extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: BaseStrategyMasterChefInterface;

  functions: {
    balanceOf(overrides?: CallOverrides): Promise<[BigNumber]>;

    balanceOfPool(overrides?: CallOverrides): Promise<[BigNumber]>;

    balanceOfWant(overrides?: CallOverrides): Promise<[BigNumber]>;

    emergencyStatus(overrides?: CallOverrides): Promise<[boolean]>;

    emergencyWithdraw(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getHarvestable(overrides?: CallOverrides): Promise<[BigNumber]>;

    getName(overrides?: CallOverrides): Promise<[string]>;

    harvest(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    harvestedToken(overrides?: CallOverrides): Promise<[string]>;

    jar(overrides?: CallOverrides): Promise<[string]>;

    jarDeposit(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    poolId(overrides?: CallOverrides): Promise<[BigNumber]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    rewards(overrides?: CallOverrides): Promise<[string]>;

    salvage(
      token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setJar(
      _jar: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setStrategist(
      _strategist: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    strategist(overrides?: CallOverrides): Promise<[string]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    want(overrides?: CallOverrides): Promise<[string]>;

    withdraw(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  balanceOf(overrides?: CallOverrides): Promise<BigNumber>;

  balanceOfPool(overrides?: CallOverrides): Promise<BigNumber>;

  balanceOfWant(overrides?: CallOverrides): Promise<BigNumber>;

  emergencyStatus(overrides?: CallOverrides): Promise<boolean>;

  emergencyWithdraw(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getHarvestable(overrides?: CallOverrides): Promise<BigNumber>;

  getName(overrides?: CallOverrides): Promise<string>;

  harvest(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  harvestedToken(overrides?: CallOverrides): Promise<string>;

  jar(overrides?: CallOverrides): Promise<string>;

  jarDeposit(
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  poolId(overrides?: CallOverrides): Promise<BigNumber>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  rewards(overrides?: CallOverrides): Promise<string>;

  salvage(
    token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setJar(
    _jar: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setStrategist(
    _strategist: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  strategist(overrides?: CallOverrides): Promise<string>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  want(overrides?: CallOverrides): Promise<string>;

  withdraw(
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    balanceOf(overrides?: CallOverrides): Promise<BigNumber>;

    balanceOfPool(overrides?: CallOverrides): Promise<BigNumber>;

    balanceOfWant(overrides?: CallOverrides): Promise<BigNumber>;

    emergencyStatus(overrides?: CallOverrides): Promise<boolean>;

    emergencyWithdraw(overrides?: CallOverrides): Promise<void>;

    getHarvestable(overrides?: CallOverrides): Promise<BigNumber>;

    getName(overrides?: CallOverrides): Promise<string>;

    harvest(overrides?: CallOverrides): Promise<void>;

    harvestedToken(overrides?: CallOverrides): Promise<string>;

    jar(overrides?: CallOverrides): Promise<string>;

    jarDeposit(_amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    poolId(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    rewards(overrides?: CallOverrides): Promise<string>;

    salvage(token: string, overrides?: CallOverrides): Promise<void>;

    setJar(_jar: string, overrides?: CallOverrides): Promise<void>;

    setStrategist(
      _strategist: string,
      overrides?: CallOverrides
    ): Promise<void>;

    strategist(overrides?: CallOverrides): Promise<string>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    want(overrides?: CallOverrides): Promise<string>;

    withdraw(_amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "EmergencyWithdraw()"(): TypedEventFilter<[], {}>;

    EmergencyWithdraw(): TypedEventFilter<[], {}>;

    "Harvested(address)"(
      _from?: string | null
    ): TypedEventFilter<[string], { _from: string }>;

    Harvested(
      _from?: string | null
    ): TypedEventFilter<[string], { _from: string }>;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    "Salvage(address)"(
      token?: string | null
    ): TypedEventFilter<[string], { token: string }>;

    Salvage(
      token?: string | null
    ): TypedEventFilter<[string], { token: string }>;

    "SetFee(uint256)"(
      value?: null
    ): TypedEventFilter<[BigNumber], { value: BigNumber }>;

    SetFee(value?: null): TypedEventFilter<[BigNumber], { value: BigNumber }>;

    "SetHarvestCutoff(uint256)"(
      value?: null
    ): TypedEventFilter<[BigNumber], { value: BigNumber }>;

    SetHarvestCutoff(
      value?: null
    ): TypedEventFilter<[BigNumber], { value: BigNumber }>;

    "SetJar(address)"(
      jar?: string | null
    ): TypedEventFilter<[string], { jar: string }>;

    SetJar(jar?: string | null): TypedEventFilter<[string], { jar: string }>;

    "SetMultiHarvest(address)"(
      _to?: string | null
    ): TypedEventFilter<[string], { _to: string }>;

    SetMultiHarvest(
      _to?: string | null
    ): TypedEventFilter<[string], { _to: string }>;

    "SetStrategist(address)"(
      _newStrategist?: string | null
    ): TypedEventFilter<[string], { _newStrategist: string }>;

    SetStrategist(
      _newStrategist?: string | null
    ): TypedEventFilter<[string], { _newStrategist: string }>;
  };

  estimateGas: {
    balanceOf(overrides?: CallOverrides): Promise<BigNumber>;

    balanceOfPool(overrides?: CallOverrides): Promise<BigNumber>;

    balanceOfWant(overrides?: CallOverrides): Promise<BigNumber>;

    emergencyStatus(overrides?: CallOverrides): Promise<BigNumber>;

    emergencyWithdraw(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getHarvestable(overrides?: CallOverrides): Promise<BigNumber>;

    getName(overrides?: CallOverrides): Promise<BigNumber>;

    harvest(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    harvestedToken(overrides?: CallOverrides): Promise<BigNumber>;

    jar(overrides?: CallOverrides): Promise<BigNumber>;

    jarDeposit(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    poolId(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    rewards(overrides?: CallOverrides): Promise<BigNumber>;

    salvage(
      token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setJar(
      _jar: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setStrategist(
      _strategist: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    strategist(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    want(overrides?: CallOverrides): Promise<BigNumber>;

    withdraw(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    balanceOf(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    balanceOfPool(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    balanceOfWant(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    emergencyStatus(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    emergencyWithdraw(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getHarvestable(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getName(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    harvest(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    harvestedToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    jar(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    jarDeposit(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    poolId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    rewards(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    salvage(
      token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setJar(
      _jar: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setStrategist(
      _strategist: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    strategist(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    want(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    withdraw(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
