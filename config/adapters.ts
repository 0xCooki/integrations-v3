import { SupportedContract } from "@gearbox-protocol/sdk";

export const adapters: Array<SupportedContract> = [
  /// SWAPPERS
  "UNISWAP_V3_ROUTER",
  "UNISWAP_V2_ROUTER",
  "SUSHISWAP_ROUTER",
  "LIDO_STETH_GATEWAY",

  // CURVE
  "CURVE_3CRV_POOL",
  "CURVE_FRAX_USDC_POOL",
  "CURVE_STETH_GATEWAY",
  "CURVE_FRAX_POOL",
  "CURVE_SUSD_POOL",
  "CURVE_LUSD_POOL",
  "CURVE_GUSD_POOL",
  "CURVE_SUSD_DEPOSIT",

  // YEARN
  "YEARN_DAI_VAULT",
  "YEARN_USDC_VAULT",
  "YEARN_WETH_VAULT",
  "YEARN_WBTC_VAULT",
  "YEARN_CURVE_FRAX_VAULT",
  "YEARN_CURVE_STETH_VAULT",

  // CONVEX
  "CONVEX_FRAX3CRV_POOL",
  "CONVEX_LUSD3CRV_POOL",
  "CONVEX_GUSD_POOL",
  "CONVEX_SUSD_POOL",
  "CONVEX_3CRV_POOL",
  "CONVEX_FRAX_USDC_POOL",
  "CONVEX_STECRV_POOL",
  "CONVEX_BOOSTER",

  // BALANCER
  "BALANCER_VAULT",
];
