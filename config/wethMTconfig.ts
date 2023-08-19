import { PoolV3CoreConfigurator } from "@gearbox-protocol/sdk-gov/lib/state/poolV3Core";
import { PoolV3DeployConfig } from "@gearbox-protocol/sdk-gov/lib/state/poolV3DeployConfig";

const POOL_DECIMALS = BigInt(1e18);
const POOL_DIVIDER = BigInt(1800);

export const config: PoolV3DeployConfig = {
  id: "mainnet-usdc-mt-v3",
  symbol: "dUSDCV3",
  name: "Diesel USDC V3 pool",
  network: "Mainnet",
  underlying: "USDC",
  accountAmount: BigInt(1_000_000) * POOL_DECIMALS,
  withdrawalFee: 0,
  expectedLiquidityLimit: BigInt(0),
  irm: {
    U1: 7000,
    U2: 9000,
    Rbase: 0,
    Rslope1: 100,
    Rslope2: 200,
    Rslope3: 10000,
    isBorrowingMoreU2Forbidden: true,
  },
  ratesAndLimits: {
    stETH: {
      minRate: 0,
      maxRate: 200,
      quotaIncreaseFee: 0,
      limit: BigInt(30e6) * POOL_DECIMALS / POOL_DIVIDER, 
    }, 
    USDC: {
      minRate: 0,
      maxRate: 3000,
      quotaIncreaseFee: 0,
      limit: BigInt(30e6) * POOL_DECIMALS / POOL_DIVIDER, 
    }, 
  },
  creditManagers: [
    {
      degenNft: false,
      expirationDate: undefined,
      minDebt: BigInt(1e4) * POOL_DECIMALS / POOL_DIVIDER,
      maxDebt: BigInt(1e6) * POOL_DECIMALS / POOL_DIVIDER,
      poolLimit: BigInt(0),
      collateralTokens: [
        {
          token: "WBTC",
          lt: 8700,
        },
        {
          token: "USDC",
          lt: 8700,
        },
      ],
      adapters: ["UNISWAP_V3_ROUTER"],
    },
  ],
  supportsQuotas: false,
};

const poolCfg = PoolV3CoreConfigurator.new(config);
console.error(poolCfg.toString());

console.log(poolCfg.deployConfig());