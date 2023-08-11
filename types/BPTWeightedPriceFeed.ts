/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export interface BPTWeightedPriceFeedInterface extends utils.Interface {
  functions: {
    "_acl()": FunctionFragment;
    "asset0()": FunctionFragment;
    "asset1()": FunctionFragment;
    "asset2()": FunctionFragment;
    "asset3()": FunctionFragment;
    "asset4()": FunctionFragment;
    "asset5()": FunctionFragment;
    "asset6()": FunctionFragment;
    "asset7()": FunctionFragment;
    "balancerPool()": FunctionFragment;
    "balancerVault()": FunctionFragment;
    "controller()": FunctionFragment;
    "decimals()": FunctionFragment;
    "delta()": FunctionFragment;
    "description()": FunctionFragment;
    "externalController()": FunctionFragment;
    "getInvariantOverSupply()": FunctionFragment;
    "getRoundData(uint80)": FunctionFragment;
    "latestRoundData()": FunctionFragment;
    "lowerBound()": FunctionFragment;
    "normalizedWeight0()": FunctionFragment;
    "normalizedWeight1()": FunctionFragment;
    "normalizedWeight2()": FunctionFragment;
    "normalizedWeight3()": FunctionFragment;
    "normalizedWeight4()": FunctionFragment;
    "normalizedWeight5()": FunctionFragment;
    "normalizedWeight6()": FunctionFragment;
    "normalizedWeight7()": FunctionFragment;
    "numAssets()": FunctionFragment;
    "pause()": FunctionFragment;
    "paused()": FunctionFragment;
    "poolId()": FunctionFragment;
    "priceFeed0()": FunctionFragment;
    "priceFeed1()": FunctionFragment;
    "priceFeed2()": FunctionFragment;
    "priceFeed3()": FunctionFragment;
    "priceFeed4()": FunctionFragment;
    "priceFeed5()": FunctionFragment;
    "priceFeed6()": FunctionFragment;
    "priceFeed7()": FunctionFragment;
    "priceFeedType()": FunctionFragment;
    "setController(address)": FunctionFragment;
    "setLimiter(uint256)": FunctionFragment;
    "skipPriceCheck()": FunctionFragment;
    "unpause()": FunctionFragment;
    "upperBound()": FunctionFragment;
    "version()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "_acl"
      | "asset0"
      | "asset1"
      | "asset2"
      | "asset3"
      | "asset4"
      | "asset5"
      | "asset6"
      | "asset7"
      | "balancerPool"
      | "balancerVault"
      | "controller"
      | "decimals"
      | "delta"
      | "description"
      | "externalController"
      | "getInvariantOverSupply"
      | "getRoundData"
      | "latestRoundData"
      | "lowerBound"
      | "normalizedWeight0"
      | "normalizedWeight1"
      | "normalizedWeight2"
      | "normalizedWeight3"
      | "normalizedWeight4"
      | "normalizedWeight5"
      | "normalizedWeight6"
      | "normalizedWeight7"
      | "numAssets"
      | "pause"
      | "paused"
      | "poolId"
      | "priceFeed0"
      | "priceFeed1"
      | "priceFeed2"
      | "priceFeed3"
      | "priceFeed4"
      | "priceFeed5"
      | "priceFeed6"
      | "priceFeed7"
      | "priceFeedType"
      | "setController"
      | "setLimiter"
      | "skipPriceCheck"
      | "unpause"
      | "upperBound"
      | "version"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "_acl", values?: undefined): string;
  encodeFunctionData(functionFragment: "asset0", values?: undefined): string;
  encodeFunctionData(functionFragment: "asset1", values?: undefined): string;
  encodeFunctionData(functionFragment: "asset2", values?: undefined): string;
  encodeFunctionData(functionFragment: "asset3", values?: undefined): string;
  encodeFunctionData(functionFragment: "asset4", values?: undefined): string;
  encodeFunctionData(functionFragment: "asset5", values?: undefined): string;
  encodeFunctionData(functionFragment: "asset6", values?: undefined): string;
  encodeFunctionData(functionFragment: "asset7", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "balancerPool",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "balancerVault",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "controller",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
  encodeFunctionData(functionFragment: "delta", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "description",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "externalController",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getInvariantOverSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getRoundData",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "latestRoundData",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "lowerBound",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "normalizedWeight0",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "normalizedWeight1",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "normalizedWeight2",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "normalizedWeight3",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "normalizedWeight4",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "normalizedWeight5",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "normalizedWeight6",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "normalizedWeight7",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "numAssets", values?: undefined): string;
  encodeFunctionData(functionFragment: "pause", values?: undefined): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(functionFragment: "poolId", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "priceFeed0",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "priceFeed1",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "priceFeed2",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "priceFeed3",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "priceFeed4",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "priceFeed5",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "priceFeed6",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "priceFeed7",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "priceFeedType",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setController",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setLimiter",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "skipPriceCheck",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "upperBound",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "version", values?: undefined): string;

  decodeFunctionResult(functionFragment: "_acl", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "asset0", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "asset1", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "asset2", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "asset3", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "asset4", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "asset5", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "asset6", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "asset7", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "balancerPool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "balancerVault",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "controller", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "delta", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "description",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "externalController",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getInvariantOverSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRoundData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "latestRoundData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "lowerBound", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "normalizedWeight0",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "normalizedWeight1",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "normalizedWeight2",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "normalizedWeight3",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "normalizedWeight4",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "normalizedWeight5",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "normalizedWeight6",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "normalizedWeight7",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "numAssets", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "poolId", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "priceFeed0", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "priceFeed1", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "priceFeed2", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "priceFeed3", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "priceFeed4", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "priceFeed5", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "priceFeed6", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "priceFeed7", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "priceFeedType",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setController",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setLimiter", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "skipPriceCheck",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "upperBound", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;

  events: {
    "NewController(address)": EventFragment;
    "NewLimiterParams(uint256,uint256)": EventFragment;
    "Paused(address)": EventFragment;
    "Unpaused(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "NewController"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewLimiterParams"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
}

export interface NewControllerEventObject {
  newController: string;
}
export type NewControllerEvent = TypedEvent<[string], NewControllerEventObject>;

export type NewControllerEventFilter = TypedEventFilter<NewControllerEvent>;

export interface NewLimiterParamsEventObject {
  lowerBound: BigNumber;
  upperBound: BigNumber;
}
export type NewLimiterParamsEvent = TypedEvent<
  [BigNumber, BigNumber],
  NewLimiterParamsEventObject
>;

export type NewLimiterParamsEventFilter =
  TypedEventFilter<NewLimiterParamsEvent>;

export interface PausedEventObject {
  account: string;
}
export type PausedEvent = TypedEvent<[string], PausedEventObject>;

export type PausedEventFilter = TypedEventFilter<PausedEvent>;

export interface UnpausedEventObject {
  account: string;
}
export type UnpausedEvent = TypedEvent<[string], UnpausedEventObject>;

export type UnpausedEventFilter = TypedEventFilter<UnpausedEvent>;

export interface BPTWeightedPriceFeed extends BaseContract {
  contractName: "BPTWeightedPriceFeed";

  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: BPTWeightedPriceFeedInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    _acl(overrides?: CallOverrides): Promise<[string]>;

    asset0(overrides?: CallOverrides): Promise<[string]>;

    asset1(overrides?: CallOverrides): Promise<[string]>;

    asset2(overrides?: CallOverrides): Promise<[string]>;

    asset3(overrides?: CallOverrides): Promise<[string]>;

    asset4(overrides?: CallOverrides): Promise<[string]>;

    asset5(overrides?: CallOverrides): Promise<[string]>;

    asset6(overrides?: CallOverrides): Promise<[string]>;

    asset7(overrides?: CallOverrides): Promise<[string]>;

    balancerPool(overrides?: CallOverrides): Promise<[string]>;

    balancerVault(overrides?: CallOverrides): Promise<[string]>;

    controller(overrides?: CallOverrides): Promise<[string]>;

    decimals(overrides?: CallOverrides): Promise<[number]>;

    delta(overrides?: CallOverrides): Promise<[BigNumber]>;

    description(overrides?: CallOverrides): Promise<[string]>;

    externalController(overrides?: CallOverrides): Promise<[boolean]>;

    getInvariantOverSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    getRoundData(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber, BigNumber, BigNumber, BigNumber]>;

    latestRoundData(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        roundId: BigNumber;
        answer: BigNumber;
        startedAt: BigNumber;
        updatedAt: BigNumber;
        answeredInRound: BigNumber;
      }
    >;

    lowerBound(overrides?: CallOverrides): Promise<[BigNumber]>;

    normalizedWeight0(overrides?: CallOverrides): Promise<[BigNumber]>;

    normalizedWeight1(overrides?: CallOverrides): Promise<[BigNumber]>;

    normalizedWeight2(overrides?: CallOverrides): Promise<[BigNumber]>;

    normalizedWeight3(overrides?: CallOverrides): Promise<[BigNumber]>;

    normalizedWeight4(overrides?: CallOverrides): Promise<[BigNumber]>;

    normalizedWeight5(overrides?: CallOverrides): Promise<[BigNumber]>;

    normalizedWeight6(overrides?: CallOverrides): Promise<[BigNumber]>;

    normalizedWeight7(overrides?: CallOverrides): Promise<[BigNumber]>;

    numAssets(overrides?: CallOverrides): Promise<[BigNumber]>;

    pause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    paused(overrides?: CallOverrides): Promise<[boolean]>;

    poolId(overrides?: CallOverrides): Promise<[string]>;

    priceFeed0(overrides?: CallOverrides): Promise<[string]>;

    priceFeed1(overrides?: CallOverrides): Promise<[string]>;

    priceFeed2(overrides?: CallOverrides): Promise<[string]>;

    priceFeed3(overrides?: CallOverrides): Promise<[string]>;

    priceFeed4(overrides?: CallOverrides): Promise<[string]>;

    priceFeed5(overrides?: CallOverrides): Promise<[string]>;

    priceFeed6(overrides?: CallOverrides): Promise<[string]>;

    priceFeed7(overrides?: CallOverrides): Promise<[string]>;

    priceFeedType(overrides?: CallOverrides): Promise<[number]>;

    setController(
      newController: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setLimiter(
      _lowerBound: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    skipPriceCheck(overrides?: CallOverrides): Promise<[boolean]>;

    unpause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    upperBound(overrides?: CallOverrides): Promise<[BigNumber]>;

    version(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  _acl(overrides?: CallOverrides): Promise<string>;

  asset0(overrides?: CallOverrides): Promise<string>;

  asset1(overrides?: CallOverrides): Promise<string>;

  asset2(overrides?: CallOverrides): Promise<string>;

  asset3(overrides?: CallOverrides): Promise<string>;

  asset4(overrides?: CallOverrides): Promise<string>;

  asset5(overrides?: CallOverrides): Promise<string>;

  asset6(overrides?: CallOverrides): Promise<string>;

  asset7(overrides?: CallOverrides): Promise<string>;

  balancerPool(overrides?: CallOverrides): Promise<string>;

  balancerVault(overrides?: CallOverrides): Promise<string>;

  controller(overrides?: CallOverrides): Promise<string>;

  decimals(overrides?: CallOverrides): Promise<number>;

  delta(overrides?: CallOverrides): Promise<BigNumber>;

  description(overrides?: CallOverrides): Promise<string>;

  externalController(overrides?: CallOverrides): Promise<boolean>;

  getInvariantOverSupply(overrides?: CallOverrides): Promise<BigNumber>;

  getRoundData(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber, BigNumber, BigNumber, BigNumber]>;

  latestRoundData(
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
      roundId: BigNumber;
      answer: BigNumber;
      startedAt: BigNumber;
      updatedAt: BigNumber;
      answeredInRound: BigNumber;
    }
  >;

  lowerBound(overrides?: CallOverrides): Promise<BigNumber>;

  normalizedWeight0(overrides?: CallOverrides): Promise<BigNumber>;

  normalizedWeight1(overrides?: CallOverrides): Promise<BigNumber>;

  normalizedWeight2(overrides?: CallOverrides): Promise<BigNumber>;

  normalizedWeight3(overrides?: CallOverrides): Promise<BigNumber>;

  normalizedWeight4(overrides?: CallOverrides): Promise<BigNumber>;

  normalizedWeight5(overrides?: CallOverrides): Promise<BigNumber>;

  normalizedWeight6(overrides?: CallOverrides): Promise<BigNumber>;

  normalizedWeight7(overrides?: CallOverrides): Promise<BigNumber>;

  numAssets(overrides?: CallOverrides): Promise<BigNumber>;

  pause(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  paused(overrides?: CallOverrides): Promise<boolean>;

  poolId(overrides?: CallOverrides): Promise<string>;

  priceFeed0(overrides?: CallOverrides): Promise<string>;

  priceFeed1(overrides?: CallOverrides): Promise<string>;

  priceFeed2(overrides?: CallOverrides): Promise<string>;

  priceFeed3(overrides?: CallOverrides): Promise<string>;

  priceFeed4(overrides?: CallOverrides): Promise<string>;

  priceFeed5(overrides?: CallOverrides): Promise<string>;

  priceFeed6(overrides?: CallOverrides): Promise<string>;

  priceFeed7(overrides?: CallOverrides): Promise<string>;

  priceFeedType(overrides?: CallOverrides): Promise<number>;

  setController(
    newController: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setLimiter(
    _lowerBound: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  skipPriceCheck(overrides?: CallOverrides): Promise<boolean>;

  unpause(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  upperBound(overrides?: CallOverrides): Promise<BigNumber>;

  version(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    _acl(overrides?: CallOverrides): Promise<string>;

    asset0(overrides?: CallOverrides): Promise<string>;

    asset1(overrides?: CallOverrides): Promise<string>;

    asset2(overrides?: CallOverrides): Promise<string>;

    asset3(overrides?: CallOverrides): Promise<string>;

    asset4(overrides?: CallOverrides): Promise<string>;

    asset5(overrides?: CallOverrides): Promise<string>;

    asset6(overrides?: CallOverrides): Promise<string>;

    asset7(overrides?: CallOverrides): Promise<string>;

    balancerPool(overrides?: CallOverrides): Promise<string>;

    balancerVault(overrides?: CallOverrides): Promise<string>;

    controller(overrides?: CallOverrides): Promise<string>;

    decimals(overrides?: CallOverrides): Promise<number>;

    delta(overrides?: CallOverrides): Promise<BigNumber>;

    description(overrides?: CallOverrides): Promise<string>;

    externalController(overrides?: CallOverrides): Promise<boolean>;

    getInvariantOverSupply(overrides?: CallOverrides): Promise<BigNumber>;

    getRoundData(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber, BigNumber, BigNumber, BigNumber]>;

    latestRoundData(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        roundId: BigNumber;
        answer: BigNumber;
        startedAt: BigNumber;
        updatedAt: BigNumber;
        answeredInRound: BigNumber;
      }
    >;

    lowerBound(overrides?: CallOverrides): Promise<BigNumber>;

    normalizedWeight0(overrides?: CallOverrides): Promise<BigNumber>;

    normalizedWeight1(overrides?: CallOverrides): Promise<BigNumber>;

    normalizedWeight2(overrides?: CallOverrides): Promise<BigNumber>;

    normalizedWeight3(overrides?: CallOverrides): Promise<BigNumber>;

    normalizedWeight4(overrides?: CallOverrides): Promise<BigNumber>;

    normalizedWeight5(overrides?: CallOverrides): Promise<BigNumber>;

    normalizedWeight6(overrides?: CallOverrides): Promise<BigNumber>;

    normalizedWeight7(overrides?: CallOverrides): Promise<BigNumber>;

    numAssets(overrides?: CallOverrides): Promise<BigNumber>;

    pause(overrides?: CallOverrides): Promise<void>;

    paused(overrides?: CallOverrides): Promise<boolean>;

    poolId(overrides?: CallOverrides): Promise<string>;

    priceFeed0(overrides?: CallOverrides): Promise<string>;

    priceFeed1(overrides?: CallOverrides): Promise<string>;

    priceFeed2(overrides?: CallOverrides): Promise<string>;

    priceFeed3(overrides?: CallOverrides): Promise<string>;

    priceFeed4(overrides?: CallOverrides): Promise<string>;

    priceFeed5(overrides?: CallOverrides): Promise<string>;

    priceFeed6(overrides?: CallOverrides): Promise<string>;

    priceFeed7(overrides?: CallOverrides): Promise<string>;

    priceFeedType(overrides?: CallOverrides): Promise<number>;

    setController(
      newController: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setLimiter(
      _lowerBound: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    skipPriceCheck(overrides?: CallOverrides): Promise<boolean>;

    unpause(overrides?: CallOverrides): Promise<void>;

    upperBound(overrides?: CallOverrides): Promise<BigNumber>;

    version(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    "NewController(address)"(
      newController?: PromiseOrValue<string> | null
    ): NewControllerEventFilter;
    NewController(
      newController?: PromiseOrValue<string> | null
    ): NewControllerEventFilter;

    "NewLimiterParams(uint256,uint256)"(
      lowerBound?: null,
      upperBound?: null
    ): NewLimiterParamsEventFilter;
    NewLimiterParams(
      lowerBound?: null,
      upperBound?: null
    ): NewLimiterParamsEventFilter;

    "Paused(address)"(account?: null): PausedEventFilter;
    Paused(account?: null): PausedEventFilter;

    "Unpaused(address)"(account?: null): UnpausedEventFilter;
    Unpaused(account?: null): UnpausedEventFilter;
  };

  estimateGas: {
    _acl(overrides?: CallOverrides): Promise<BigNumber>;

    asset0(overrides?: CallOverrides): Promise<BigNumber>;

    asset1(overrides?: CallOverrides): Promise<BigNumber>;

    asset2(overrides?: CallOverrides): Promise<BigNumber>;

    asset3(overrides?: CallOverrides): Promise<BigNumber>;

    asset4(overrides?: CallOverrides): Promise<BigNumber>;

    asset5(overrides?: CallOverrides): Promise<BigNumber>;

    asset6(overrides?: CallOverrides): Promise<BigNumber>;

    asset7(overrides?: CallOverrides): Promise<BigNumber>;

    balancerPool(overrides?: CallOverrides): Promise<BigNumber>;

    balancerVault(overrides?: CallOverrides): Promise<BigNumber>;

    controller(overrides?: CallOverrides): Promise<BigNumber>;

    decimals(overrides?: CallOverrides): Promise<BigNumber>;

    delta(overrides?: CallOverrides): Promise<BigNumber>;

    description(overrides?: CallOverrides): Promise<BigNumber>;

    externalController(overrides?: CallOverrides): Promise<BigNumber>;

    getInvariantOverSupply(overrides?: CallOverrides): Promise<BigNumber>;

    getRoundData(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    latestRoundData(overrides?: CallOverrides): Promise<BigNumber>;

    lowerBound(overrides?: CallOverrides): Promise<BigNumber>;

    normalizedWeight0(overrides?: CallOverrides): Promise<BigNumber>;

    normalizedWeight1(overrides?: CallOverrides): Promise<BigNumber>;

    normalizedWeight2(overrides?: CallOverrides): Promise<BigNumber>;

    normalizedWeight3(overrides?: CallOverrides): Promise<BigNumber>;

    normalizedWeight4(overrides?: CallOverrides): Promise<BigNumber>;

    normalizedWeight5(overrides?: CallOverrides): Promise<BigNumber>;

    normalizedWeight6(overrides?: CallOverrides): Promise<BigNumber>;

    normalizedWeight7(overrides?: CallOverrides): Promise<BigNumber>;

    numAssets(overrides?: CallOverrides): Promise<BigNumber>;

    pause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    paused(overrides?: CallOverrides): Promise<BigNumber>;

    poolId(overrides?: CallOverrides): Promise<BigNumber>;

    priceFeed0(overrides?: CallOverrides): Promise<BigNumber>;

    priceFeed1(overrides?: CallOverrides): Promise<BigNumber>;

    priceFeed2(overrides?: CallOverrides): Promise<BigNumber>;

    priceFeed3(overrides?: CallOverrides): Promise<BigNumber>;

    priceFeed4(overrides?: CallOverrides): Promise<BigNumber>;

    priceFeed5(overrides?: CallOverrides): Promise<BigNumber>;

    priceFeed6(overrides?: CallOverrides): Promise<BigNumber>;

    priceFeed7(overrides?: CallOverrides): Promise<BigNumber>;

    priceFeedType(overrides?: CallOverrides): Promise<BigNumber>;

    setController(
      newController: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setLimiter(
      _lowerBound: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    skipPriceCheck(overrides?: CallOverrides): Promise<BigNumber>;

    unpause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    upperBound(overrides?: CallOverrides): Promise<BigNumber>;

    version(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    _acl(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    asset0(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    asset1(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    asset2(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    asset3(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    asset4(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    asset5(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    asset6(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    asset7(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    balancerPool(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    balancerVault(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    controller(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    delta(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    description(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    externalController(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getInvariantOverSupply(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRoundData(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    latestRoundData(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lowerBound(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    normalizedWeight0(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    normalizedWeight1(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    normalizedWeight2(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    normalizedWeight3(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    normalizedWeight4(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    normalizedWeight5(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    normalizedWeight6(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    normalizedWeight7(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    numAssets(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    poolId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    priceFeed0(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    priceFeed1(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    priceFeed2(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    priceFeed3(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    priceFeed4(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    priceFeed5(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    priceFeed6(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    priceFeed7(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    priceFeedType(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setController(
      newController: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setLimiter(
      _lowerBound: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    skipPriceCheck(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    unpause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    upperBound(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    version(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
