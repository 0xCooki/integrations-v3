// SPDX-License-Identifier: GPL-2.0-or-later
// Gearbox Protocol. Generalized leverage for DeFi protocols
// (c) Gearbox Foundation, 2023.
pragma solidity ^0.8.17;

import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";

import {AbstractAdapter} from "../AbstractAdapter.sol";
import {AdapterType} from "@gearbox-protocol/sdk-gov/contracts/AdapterType.sol";
import {PhantomTokenType} from "@gearbox-protocol/sdk-gov/contracts/Tokens.sol";
import {ZircuitPhantomToken} from "../../helpers/zircuit/ZircuitPhantomToken.sol";

import {ICreditManagerV3} from "@gearbox-protocol/core-v3/contracts/interfaces/ICreditManagerV3.sol";
import {IZircuitPoolAdapter} from "../../interfaces/zircuit/IZircuitPoolAdapter.sol";
import {IPhantomToken} from "@gearbox-protocol/core-v3/contracts/interfaces/base/IPhantomToken.sol";
import {IZircuitPool} from "../../integrations/zircuit/IZircuitPool.sol";

contract ZircuitPoolAdapter is AbstractAdapter, IZircuitPoolAdapter {
    AdapterType public constant override _gearboxAdapterType = AdapterType.ZIRCUIT_POOL;
    uint16 public constant override _gearboxAdapterVersion = 3_1;

    mapping(address => address) public tokenToPhantomToken;

    /// @notice Constructor
    /// @param _creditManager Credit manager address
    /// @param _pool Zircuit pool address
    constructor(address _creditManager, address _pool) AbstractAdapter(_creditManager, _pool) {}

    // -------- //
    // DEPOSITS //
    // -------- //

    /// @notice Deposit a specified amount of a token into the Zircuit vault
    /// @dev `_for` parameter is ignored, because the receiver is always the credit account
    function depositFor(address _token, address, uint256 _amount)
        external
        creditFacadeOnly
        returns (uint256 tokensToEnable, uint256 tokensToDisable)
    {
        address creditAccount = _creditAccount();
        (tokensToEnable, tokensToDisable) = _deposit(creditAccount, _token, _amount, false);
    }

    /// @notice Deposit the entire balance of a token into the Zircuit vault, except the specified amount
    function depositDiff(address _token, uint256 _leftoverAmount)
        external
        creditFacadeOnly
        returns (uint256 tokensToEnable, uint256 tokensToDisable)
    {
        address creditAccount = _creditAccount();
        uint256 balance = IERC20(_token).balanceOf(creditAccount);

        if (balance > _leftoverAmount) {
            unchecked {
                (tokensToEnable, tokensToDisable) =
                    _deposit(creditAccount, _token, balance - _leftoverAmount, _leftoverAmount <= 1);
            }
        }
    }

    /// @dev Internal implementation for "depositFor" and "depositDiff"
    function _deposit(address creditAccount, address token, uint256 amount, bool disableToken)
        internal
        returns (uint256 tokensToEnable, uint256 tokensToDisable)
    {
        address phantomToken = tokenToPhantomToken[token];

        (tokensToEnable, tokensToDisable,) = _executeSwapSafeApprove(
            token, phantomToken, abi.encodeCall(IZircuitPool.depositFor, (token, creditAccount, amount)), disableToken
        );
    }

    // ----------- //
    // WITHDRAWALS //
    // ----------- //

    /// @notice Withdraw a specified amount of token from the Zircuit vault
    function withdraw(address _token, uint256 _amount)
        external
        creditFacadeOnly
        returns (uint256 tokensToEnable, uint256 tokensToDisable)
    {
        address creditAccount = _creditAccount();
        address phantomToken = tokenToPhantomToken[_token];
        (tokensToEnable, tokensToDisable) = _withdraw(_token, phantomToken, _amount, false);
    }

    /// @notice Withdraw the entire balance of a token from the Zircuit vault, except the specified amount
    function withdrawDiff(address _token, uint256 _leftoverAmount)
        external
        creditFacadeOnly
        returns (uint256 tokensToEnable, uint256 tokensToDisable)
    {
        address creditAccount = _creditAccount();
        address phantomToken = tokenToPhantomToken[_token];

        uint256 balance = IERC20(phantomToken).balanceOf(creditAccount);

        if (balance > _leftoverAmount) {
            unchecked {
                (tokensToEnable, tokensToDisable) =
                    _withdraw(_token, phantomToken, balance - _leftoverAmount, _leftoverAmount <= 1);
            }
        }
    }

    /// @dev Internal implementation for "withdraw" and "withdrawDiff"
    function _withdraw(address token, address phantomToken, uint256 amount, bool disableToken)
        internal
        returns (uint256 tokensToEnable, uint256 tokensToDisable)
    {
        (tokensToEnable, tokensToDisable,) = _executeSwapSafeApprove(
            phantomToken, token, abi.encodeCall(IZircuitPool.withdraw, (token, amount)), disableToken
        );
    }

    function updatePhantomTokensMap() external configuratorOnly {
        ICreditManagerV3 cm = ICreditManagerV3(creditManager);

        uint256 len = cm.collateralTokensCount();

        unchecked {
            for (uint256 i = 0; i < len; ++i) {
                address token = cm.getTokenByMask(1 << i);
                PhantomTokenType ptType = IPhantomToken(token)._gearboxPhantomTokenType();

                if (ptType == PhantomTokenType.ZIRCUIT_PHANTOM_TOKEN) {
                    address depositedToken = ZircuitPhantomToken(token).underlying();
                    tokenToPhantomToken[depositedToken] = token;
                    emit SetTokenToPhantomToken(depositedToken, token);
                }
            }
        }
    }
}
