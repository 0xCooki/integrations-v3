// SPDX-License-Identifier: UNLICENSED
// Gearbox. Generalized leverage protocol that allows to take leverage and then use it across other DeFi protocols and platforms in a composable way.
// (c) Gearbox Foundation, 2023.
pragma solidity ^0.8.17;

import {Tokens} from "@gearbox-protocol/sdk-gov/contracts/Tokens.sol";
import {Contracts} from "@gearbox-protocol/sdk-gov/contracts/SupportedContracts.sol";
import {
    LinearIRMV3DeployParams,
    PoolV3DeployParams,
    CreditManagerV3DeployParams,
    GaugeRate,
    PoolQuotaLimit,
    CollateralToken,
    IPoolV3DeployConfig,
    CollateralTokenHuman
} from "@gearbox-protocol/core-v3/contracts/test/interfaces/ICreditConfig.sol";

contract CONFIG_MAINNET_USDC_MT_V3 is IPoolV3DeployConfig {
    string public constant id = "mainnet-usdc-mt-v3";
    uint256 public constant chainId = 1;
    Tokens public constant underlying = Tokens.USDC;
    bool public constant supportsQuotas = true;
    uint256 public constant getAccountAmount = 1_000_000_000_000;

    // POOL

    string public constant symbol = "dUSDCV3";
    string public constant name = "Diesel USDC V3 pool";

    PoolV3DeployParams _poolParams = PoolV3DeployParams({withdrawalFee: 0, expectedLiquidityLimit: 0});

    LinearIRMV3DeployParams _irm = LinearIRMV3DeployParams({
        U_1: 70_00,
        U_2: 90_00,
        R_base: 0,
        R_slope1: 1_50,
        R_slope2: 4_00,
        R_slope3: 100_00,
        _isBorrowingMoreU2Forbidden: true
    });

    GaugeRate[] _gaugeRates;
    PoolQuotaLimit[] _quotaLimits;

    CreditManagerV3DeployParams[] _creditManagers;

    constructor() {
        _gaugeRates.push(GaugeRate({token: Tokens.MKR, minRate: 1, maxRate: 30_00}));
        _gaugeRates.push(GaugeRate({token: Tokens.UNI, minRate: 1, maxRate: 30_00}));
        _gaugeRates.push(GaugeRate({token: Tokens.LINK, minRate: 1, maxRate: 30_00}));
        _gaugeRates.push(GaugeRate({token: Tokens.LDO, minRate: 1, maxRate: 30_00}));
        _gaugeRates.push(GaugeRate({token: Tokens.RPL, minRate: 0, maxRate: 30_00}));
        _gaugeRates.push(GaugeRate({token: Tokens.CRV, minRate: 0, maxRate: 30_00}));
        _gaugeRates.push(GaugeRate({token: Tokens.APE, minRate: 1, maxRate: 30_00}));
        _gaugeRates.push(GaugeRate({token: Tokens.CVX, minRate: 1, maxRate: 30_00}));
        _gaugeRates.push(GaugeRate({token: Tokens.FXS, minRate: 1, maxRate: 30_00}));
        _quotaLimits.push(PoolQuotaLimit({token: Tokens.MKR, quotaIncreaseFee: 0, limit: 1_000_000_000_000}));
        _quotaLimits.push(PoolQuotaLimit({token: Tokens.UNI, quotaIncreaseFee: 0, limit: 1_000_000_000_000}));
        _quotaLimits.push(PoolQuotaLimit({token: Tokens.LINK, quotaIncreaseFee: 0, limit: 1_000_000_000_000}));
        _quotaLimits.push(PoolQuotaLimit({token: Tokens.LDO, quotaIncreaseFee: 0, limit: 500_000_000_000}));
        _quotaLimits.push(PoolQuotaLimit({token: Tokens.RPL, quotaIncreaseFee: 0, limit: 300_000_000_000}));
        _quotaLimits.push(PoolQuotaLimit({token: Tokens.CRV, quotaIncreaseFee: 0, limit: 250_000_000_000}));
        _quotaLimits.push(PoolQuotaLimit({token: Tokens.APE, quotaIncreaseFee: 0, limit: 300_000_000_000}));
        _quotaLimits.push(PoolQuotaLimit({token: Tokens.CVX, quotaIncreaseFee: 0, limit: 300_000_000_000}));
        _quotaLimits.push(PoolQuotaLimit({token: Tokens.FXS, quotaIncreaseFee: 0, limit: 300_000_000_000}));

        /// CREDIT_MANAGER_0
        CreditManagerV3DeployParams storage cp = _creditManagers.push();

        cp.minDebt = 10_000_000_000;
        cp.maxDebt = 1_000_000_000_000;
        cp.whitelisted = false;
        cp.expirable = false;
        cp.skipInit = false;
        cp.poolLimit = 0;

        CollateralTokenHuman[] storage cts = cp.collateralTokens;
        cts.push(CollateralTokenHuman({token: Tokens.WETH, lt: 87_00}));

        cts.push(CollateralTokenHuman({token: Tokens.WBTC, lt: 87_00}));

        cts.push(CollateralTokenHuman({token: Tokens.MKR, lt: 85_00}));

        cts.push(CollateralTokenHuman({token: Tokens.UNI, lt: 85_00}));

        cts.push(CollateralTokenHuman({token: Tokens.LINK, lt: 85_00}));

        cts.push(CollateralTokenHuman({token: Tokens.LDO, lt: 85_00}));

        cts.push(CollateralTokenHuman({token: Tokens.RPL, lt: 85_00}));

        cts.push(CollateralTokenHuman({token: Tokens.CRV, lt: 85_00}));

        cts.push(CollateralTokenHuman({token: Tokens.APE, lt: 85_00}));

        cts.push(CollateralTokenHuman({token: Tokens.CVX, lt: 85_00}));

        cts.push(CollateralTokenHuman({token: Tokens.FXS, lt: 85_00}));
        Contracts[] storage cs = cp.contracts;
        cs.push(Contracts.UNISWAP_V3_ROUTER);
    }

    // GETTERS

    function poolParams() external view override returns (PoolV3DeployParams memory) {
        return _poolParams;
    }

    function irm() external view override returns (LinearIRMV3DeployParams memory) {
        return _irm;
    }

    function gaugeRates() external view override returns (GaugeRate[] memory) {
        return _gaugeRates;
    }

    function quotaLimits() external view override returns (PoolQuotaLimit[] memory) {
        return _quotaLimits;
    }

    function creditManagers() external view override returns (CreditManagerV3DeployParams[] memory) {
        return _creditManagers;
    }
}
