// Sources flattened with hardhat v2.6.4 https://hardhat.org

// File contracts/interfaces/AggregatorV3Interface.sol

// SPDX-License-Identifier: GPL-3.0-only
pragma solidity =0.6.11;

interface AggregatorV3Interface {

  function decimals() external view returns (uint8);
  function description() external view returns (string memory);
  function version() external view returns (uint256);

  // getRoundData and latestRoundData should both raise "No data present"
  // if they do not have data to report, instead of returning unset values
  // which could be misinterpreted as actual reported values.
  function getRoundData(uint80 _roundId)
    external
    view
    returns (
      uint80 roundId,
      int256 answer,
      uint256 startedAt,
      uint256 updatedAt,
      uint80 answeredInRound
    );
  function latestRoundData()
    external
    view
    returns (
      uint80 roundId,
      int256 answer,
      uint256 startedAt,
      uint256 updatedAt,
      uint80 answeredInRound
    );

}


// File contracts/interfaces/IOSWAP_OracleAdaptor.sol


pragma solidity =0.6.11;

interface IOSWAP_OracleAdaptor {
    function isSupported(address from, address to) external view returns (bool supported);
    function getRatio(address from, address to, uint256 fromAmount, uint256 toAmount, bytes calldata payload) external view returns (uint256 numerator, uint256 denominator);
    function getLatestPrice(address from, address to, bytes calldata payload) external view returns (uint256 price);
    function decimals() external view returns (uint8);
}


// File contracts/libraries/SafeMath.sol



pragma solidity >=0.6.0 <0.8.0;

/**
 * @dev Wrappers over Solidity's arithmetic operations with added overflow
 * checks.
 *
 * Arithmetic operations in Solidity wrap on overflow. This can easily result
 * in bugs, because programmers usually assume that an overflow raises an
 * error, which is the standard behavior in high level programming languages.
 * `SafeMath` restores this intuition by reverting the transaction when an
 * operation overflows.
 *
 * Using this library instead of the unchecked operations eliminates an entire
 * class of bugs, so it's recommended to use it always.
 */
library SafeMath {
    /**
     * @dev Returns the addition of two unsigned integers, reverting on
     * overflow.
     *
     * Counterpart to Solidity's `+` operator.
     *
     * Requirements:
     *
     * - Addition cannot overflow.
     */
    function add(uint256 a, uint256 b) internal pure returns (uint256) {
        uint256 c = a + b;
        require(c >= a, "SafeMath: addition overflow");

        return c;
    }

    /**
     * @dev Returns the subtraction of two unsigned integers, reverting on
     * overflow (when the result is negative).
     *
     * Counterpart to Solidity's `-` operator.
     *
     * Requirements:
     *
     * - Subtraction cannot overflow.
     */
    function sub(uint256 a, uint256 b) internal pure returns (uint256) {
        return sub(a, b, "SafeMath: subtraction overflow");
    }

    /**
     * @dev Returns the subtraction of two unsigned integers, reverting with custom message on
     * overflow (when the result is negative).
     *
     * Counterpart to Solidity's `-` operator.
     *
     * Requirements:
     *
     * - Subtraction cannot overflow.
     */
    function sub(uint256 a, uint256 b, string memory errorMessage) internal pure returns (uint256) {
        require(b <= a, errorMessage);
        uint256 c = a - b;

        return c;
    }

    /**
     * @dev Returns the multiplication of two unsigned integers, reverting on
     * overflow.
     *
     * Counterpart to Solidity's `*` operator.
     *
     * Requirements:
     *
     * - Multiplication cannot overflow.
     */
    function mul(uint256 a, uint256 b) internal pure returns (uint256) {
        // Gas optimization: this is cheaper than requiring 'a' not being zero, but the
        // benefit is lost if 'b' is also tested.
        // See: https://github.com/OpenZeppelin/openzeppelin-contracts/pull/522
        if (a == 0) {
            return 0;
        }

        uint256 c = a * b;
        require(c / a == b, "SafeMath: multiplication overflow");

        return c;
    }

    /**
     * @dev Returns the integer division of two unsigned integers. Reverts on
     * division by zero. The result is rounded towards zero.
     *
     * Counterpart to Solidity's `/` operator. Note: this function uses a
     * `revert` opcode (which leaves remaining gas untouched) while Solidity
     * uses an invalid opcode to revert (consuming all remaining gas).
     *
     * Requirements:
     *
     * - The divisor cannot be zero.
     */
    function div(uint256 a, uint256 b) internal pure returns (uint256) {
        return div(a, b, "SafeMath: division by zero");
    }

    /**
     * @dev Returns the integer division of two unsigned integers. Reverts with custom message on
     * division by zero. The result is rounded towards zero.
     *
     * Counterpart to Solidity's `/` operator. Note: this function uses a
     * `revert` opcode (which leaves remaining gas untouched) while Solidity
     * uses an invalid opcode to revert (consuming all remaining gas).
     *
     * Requirements:
     *
     * - The divisor cannot be zero.
     */
    function div(uint256 a, uint256 b, string memory errorMessage) internal pure returns (uint256) {
        require(b > 0, errorMessage);
        uint256 c = a / b;
        // assert(a == b * c + a % b); // There is no case in which this doesn't hold

        return c;
    }

    /**
     * @dev Returns the remainder of dividing two unsigned integers. (unsigned integer modulo),
     * Reverts when dividing by zero.
     *
     * Counterpart to Solidity's `%` operator. This function uses a `revert`
     * opcode (which leaves remaining gas untouched) while Solidity uses an
     * invalid opcode to revert (consuming all remaining gas).
     *
     * Requirements:
     *
     * - The divisor cannot be zero.
     */
    function mod(uint256 a, uint256 b) internal pure returns (uint256) {
        return mod(a, b, "SafeMath: modulo by zero");
    }

    /**
     * @dev Returns the remainder of dividing two unsigned integers. (unsigned integer modulo),
     * Reverts with custom message when dividing by zero.
     *
     * Counterpart to Solidity's `%` operator. This function uses a `revert`
     * opcode (which leaves remaining gas untouched) while Solidity uses an
     * invalid opcode to revert (consuming all remaining gas).
     *
     * Requirements:
     *
     * - The divisor cannot be zero.
     */
    function mod(uint256 a, uint256 b, string memory errorMessage) internal pure returns (uint256) {
        require(b != 0, errorMessage);
        return a % b;
    }
}


// File contracts/OSWAP_OracleChainlinkBase.sol


pragma solidity =0.6.11;
abstract contract OSWAP_OracleChainlinkBase is IOSWAP_OracleAdaptor {
	using SafeMath for uint256;

    uint8 constant _DECIMALS = 18;
    uint256 constant DECIMALS = uint256(_DECIMALS);
    uint256 constant WEI = 10**DECIMALS;
    uint256 constant WEI_SQ = 10**(DECIMALS*2);

    address WETH;

    mapping (address => address) public priceFeedAddresses;

    uint8 public chainlinkDeicmals = 18;

    function _getLatestPrice(address priceFeedAddress) internal view returns (uint256 price, uint8 decimals) {
        require(priceFeedAddress != address(0), "OSWAP: price feed not found");
        (,int256 price1,,,) = AggregatorV3Interface(priceFeedAddress).latestRoundData();
        decimals = chainlinkDeicmals;
        require(price1 > 0, "OSWAP_OracleChainlink: Negative or zero price");
        price = uint256(price1);
    }
    function getRatio(address from, address to, uint256 /*fromAmount*/, uint256 /*toAmount*/, bytes calldata /*payload*/) public view override virtual returns (uint256 numerator, uint256 denominator) {
        require(from != to, "OSWAP: from and to addresses are the same");
        if (from == WETH) {
            uint8 decimals;
            address fromEth = priceFeedAddresses[to];
            (denominator, decimals) = _getLatestPrice(fromEth);
            numerator = 10**uint256(decimals);
        } else if (to == WETH) {
            uint8 decimals;
            address toEth = priceFeedAddresses[from];
            (numerator, decimals) = _getLatestPrice(toEth);
            denominator = 10**uint256(decimals);
        } else {
            address toEth = priceFeedAddresses[from];
            uint8 decimals1;
            (numerator, decimals1) = _getLatestPrice(toEth);

            address fromEth = priceFeedAddresses[to];
            uint8 decimals2;
            (denominator, decimals2) = _getLatestPrice(fromEth);

            if (decimals2 > decimals1){
                numerator = uint256(numerator).mul(10**(uint256(decimals2).sub(decimals1)));
            } else {
                denominator = uint256(denominator).mul(10**(uint256(decimals1).sub(decimals2)));
            }
        }
    }
    function isSupported(address from, address to) public view override virtual returns (bool supported) {
        if (from == WETH) {
            address fromEth = priceFeedAddresses[to];
            supported = (fromEth != address(0));
        } else if (to == WETH) {
            address toEth = priceFeedAddresses[from];
            supported = (toEth != address(0));
        } else {
            address toEth = priceFeedAddresses[from];
            address fromEth = priceFeedAddresses[to];
            supported = (toEth != address(0) && fromEth != address(0));
        }
    }
    function getLatestPrice(address from, address to, bytes calldata payload) external view override returns (uint256 price) {
        (uint256 numerator, uint256 denominator) = getRatio(from, to, 0, 0, payload);
        price = numerator.mul(WEI).div(denominator);
    }
    function decimals() external view override returns (uint8) {
        return _DECIMALS;
    }
}


// File contracts/OSWAP_OracleChainlinkFiatBase.sol


pragma solidity =0.6.11;
abstract contract OSWAP_OracleChainlinkFiatBase is OSWAP_OracleChainlinkBase {
    constructor() public {
        WETH = address(0);
        chainlinkDeicmals = 8;
    }
    function getRatio(address from, address to, uint256 fromAmount, uint256 toAmount, bytes calldata payload) public view override virtual returns (uint256 numerator, uint256 denominator) {
        require(from != address(0) && to != address(0), "OSWAP: Oracle: Invalid address");
        return super.getRatio(from, to, fromAmount, toAmount, payload);
    }
    function isSupported(address from, address to) public view override virtual returns (bool supported) {
        if (from == address(0) || to == address(0)) {
            return false;
        }
        return super.isSupported(from, to);
    }
}


// File contracts/OSWAP_OracleChainlinkFiatBinance.sol


pragma solidity =0.6.11;
contract OSWAP_OracleChainlinkFiatBinance is OSWAP_OracleChainlinkFiatBase {
    constructor() public {
        WETH = 0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c;
        // Using the list of Chainlink symbol to address from 
        // https://docs.chain.link/docs/binance-smart-chain-addresses
        // and token list from 
        // https://github.com/pancakeswap/pancake-swap-interface/blob/master/src/constants/token/pancakeswap.json

        priceFeedAddresses[0x3EE2200Efb3400fAbB9AacF31297cBdD1d435D47] = 0xa767f745331D267c7751297D982b050c93985627; // ADA
        priceFeedAddresses[0x0Eb3a705fc54725037CC9e008bDede697f62F335] = 0xb056B7C804297279A9a673289264c17E6Dc6055d; // ATOM
        priceFeedAddresses[0xa184088a740c695E156F91f5cC086a06bb78b827] = 0x88E71E6520E5aC75f5338F5F0c9DeD9d4f692cDA; // AUTO
        priceFeedAddresses[0x8fF795a6F4D97E7887C79beA79aba5cc76444aDf] = 0x43d80f616DAf0b0B42a928EeD32147dC59027D41; // BCH
        priceFeedAddresses[0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c] = 0x264990fbd0A4796A3E3d8E37C4d5F87a3aCa5Ebf; // BTC
        priceFeedAddresses[0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56] = 0xcBb98864Ef56E9042e7d2efef76141f15731B82f; // BUSD
        priceFeedAddresses[0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82] = 0xB6064eD41d4f67e353768aA239cA86f4F73665a1; // CAKE
        priceFeedAddresses[0x52CE071Bd9b1C4B00A0b92D298c512478CaD67e8] = 0x0Db8945f9aEf5651fa5bd52314C5aAe78DfDe540; // COMP
        priceFeedAddresses[0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3] = 0x132d3C0B1D2cEa0BC552588063bdBb210FDeecfA; // DAI
        priceFeedAddresses[0x7083609fCE4d1d8Dc0C979AAb8c869Ea2C873402] = 0xC333eb0086309a16aa7c8308DfD32c8BBA0a2592; // DOT
        priceFeedAddresses[0x56b6fB708fC5732DEC1Afc8D8556423A2EDcCbD6] = 0xd5508c8Ffdb8F15cE336e629fD4ca9AdB48f50F0; // EOS
        priceFeedAddresses[0x2170Ed0880ac9A755fd29B2688956BD959F933F8] = 0x9ef1B8c0E4F7dc8bF5719Ea496883DC6401d5b2e; // ETH
        priceFeedAddresses[0x0D8Ce2A99Bb6e3B7Db580eD848240e4a0F9aE153] = 0xE5dbFD9003bFf9dF5feB2f4F445Ca00fb121fb83; // FIL
        priceFeedAddresses[0x762539b45A1dCcE3D36d080F74d1AED37844b878] = 0x38393201952f2764E04B290af9df427217D56B41; // LINA
        priceFeedAddresses[0xF8A0BF9cF54Bb92F17374d9e9A321E6a111a51bD] = 0xca236E327F629f9Fc2c30A4E95775EbF0B89fac8; // LINK
        priceFeedAddresses[0x4338665CBB7B2485A8855A139b75D5e34AB0DB94] = 0x74E72F37A8c415c8f1a98Ed42E78Ff997435791D; // LTC
        priceFeedAddresses[0xFd7B3A77848f1C2D67E05E54d78d174a0C850335] = 0x887f177CBED2cf555a64e7bF125E1825EB69dB82; // ONT
        priceFeedAddresses[0x8519EA49c997f50cefFa444d240fB655e89248Aa] = 0xD1225da5FC21d17CaE526ee4b6464787c6A71b4C; // RAMP
        priceFeedAddresses[0x47BEAd2563dCBf3bF2c9407fEa4dC236fAbA485A] = 0xE188A9875af525d25334d75F3327863B2b8cd0F1; // SXP
        priceFeedAddresses[0xBf5140A22578168FD562DCcF235E5D43A02ce9B1] = 0xb57f259E7C24e56a1dA00F66b55A5640d9f9E7e4; // UNI
        priceFeedAddresses[0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d] = 0x51597f405303C4377E36123cBc172b13269EA163; // USDC
        priceFeedAddresses[0x55d398326f99059fF775485246999027B3197955] = 0xB97Ad0E74fa7d920791E90258A6E2085088b4320; // USDT
        priceFeedAddresses[0x4BD17003473389A42DAF6a0a729f6Fdb328BbBd7] = 0x058316f8Bb13aCD442ee7A216C7b60CFB4Ea1B53; // VAI
        priceFeedAddresses[0x1D2F0da169ceB9fC7B3144628dB156f3F6c60dBE] = 0x93A67D414896A280bF8FFB3b389fE3686E014fda; // XRP
        priceFeedAddresses[0x16939ef78684453bfDFb47825F8a5F714f12623a] = 0x9A18137ADCF7b05f033ad26968Ed5a9cf0Bf8E6b; // XTZ
        priceFeedAddresses[0xcF6BB5389c92Bdda8a3747Ddb454cB7a64626C63] = 0xBF63F430A79D4036A5900C19818aFf1fa710f206; // XVS
        priceFeedAddresses[0x88f1A5ae2A3BF98AEAF342D26B30a79438c9142e] = 0xD7eAa5Bf3013A96e3d515c055Dbd98DbdC8c620D; // YFI
        priceFeedAddresses[0x7F70642d88cf1C4a3a7abb072B53B929b653edA5] = 0xC94580FAaF145B2FD0ab5215031833c98D3B77E4; // YFII
   }
}


// File contracts/interfaces/IFactory.sol


pragma solidity =0.6.11;

interface IFactory {

    function minLotSize(address token) external view returns (uint256);
    function getPair(address tokenA, address tokenB) external view returns (address pair);

}


// File contracts/interfaces/IPair.sol


pragma solidity =0.6.11;

interface IPair {
    function getReserves() external view returns (uint112 reserve0, uint112 reserve1, uint32 blockTimestampLast);
}


// File contracts/interfaces/IOSWAP_OracleAdaptorPriceGuard.sol


pragma solidity =0.6.11;
interface IOSWAP_OracleAdaptorPriceGuard is IOSWAP_OracleAdaptor {
    function getPriceInfo(address from, address to, uint256 fromAmount, uint256 toAmount) external view returns (uint256 chainlinkPrice, uint256 ammPrice, uint256 usdAmount);
}


// File contracts/OSWAP_OracleChainlinkPriceGuardBase.sol


pragma solidity =0.6.11;
abstract contract OSWAP_OracleChainlinkPriceGuardBase is OSWAP_OracleChainlinkBase, IOSWAP_OracleAdaptorPriceGuard {
	using SafeMath for uint256;

    address public immutable wethPriceFeed;
    uint8 public wethDecimals = 8;

    address public immutable factory;
    uint256 public immutable maxValue;
    uint256 public immutable low;
    uint256 public immutable high;
    bool public immutable useAmmPrice;

    mapping (address => uint8) public decimals;

    
    constructor(address _wethPriceFeed, address _factory, uint256 _maxValue, uint256 _deviation, bool _useAmmPrice) public {
        require(_deviation <= WEI, "Invalid price range");
        wethPriceFeed = _wethPriceFeed;
        factory = _factory;
        maxValue = _maxValue;
        low = WEI.sub(_deviation);
        high = WEI.add(_deviation);
        useAmmPrice = _useAmmPrice;
    }

    function convertEthDecimals(uint256 amount, address token) internal view returns (uint256) {
        uint256 decimals2 = decimals[token];
        require(decimals2 > 0, "OracleAdaptor: token not supported");
        if (decimals2 > 18) {
            amount = amount.mul(10 ** uint256(decimals2-18));
        } else if (decimals2 < 18) {
            amount = amount.div(10 ** uint256(18-decimals2));
        }
        return amount;
    }

    function _getRatio(address from, address to, uint256 fromAmount, uint256 toAmount) internal view virtual returns (uint256 usdAmount, uint256 numerator, uint256 denominator, uint112 reserve0, uint112 reserve1) {
        require(from != to, "OSWAP: from and to addresses are the same");

        uint256 ethAmount;

        if (from == WETH) {
            // eth -> token
            ethAmount = fromAmount;
            uint8 _decimals;
            address fromEth = priceFeedAddresses[to];
            (denominator, _decimals) = _getLatestPrice(fromEth);
            numerator = 10**uint256(_decimals);

            if (ethAmount == 0) {
                // exact token out
                ethAmount = toAmount.mul(denominator).div(numerator);
                ethAmount = convertEthDecimals(ethAmount, to);
            }
        } else if (to == WETH) {
            // token -> eth
            ethAmount = toAmount;
            uint8 _decimals;
            address toEth = priceFeedAddresses[from];
            (numerator, _decimals) = _getLatestPrice(toEth);
            denominator = 10**uint256(_decimals);

            if (ethAmount == 0) {
                // exact token in
                ethAmount = fromAmount.mul(numerator).div(denominator);
                ethAmount = convertEthDecimals(ethAmount, from);
            }
        } else {
            address toEth = priceFeedAddresses[from];
            uint8 decimals1;
            (numerator, decimals1) = _getLatestPrice(toEth);

            address fromEth = priceFeedAddresses[to];
            uint8 decimals2;
            (denominator, decimals2) = _getLatestPrice(fromEth);

            if (fromAmount == 0) {
                // exact out: find equivalent ETH amount
                ethAmount = toAmount.mul(denominator).div(10**uint256(decimals2));
                ethAmount = convertEthDecimals(ethAmount, to);
            } else if (toAmount == 0) {
                // exact in: find equivalent ETH amount
                ethAmount = fromAmount.mul(numerator).div(10**uint256(decimals1));
                ethAmount = convertEthDecimals(ethAmount, from);
            } else {
                revert("OracleAdaptor: Invalid amount");
            }
        }

        (,int256 ethPrice,,,) =  AggregatorV3Interface(wethPriceFeed).latestRoundData();
        usdAmount = uint256(ethPrice).mul(ethAmount).div(10**uint256(wethDecimals));

        address pair = IFactory(factory).getPair(from, to);
        require(address(pair) != address(0), "pair not exists");

        // from < to: amountout = amountin * reserve1 / reserve0
        // to < from: amountout = amountin * reserve0 / reserve1
        (reserve0, reserve1, ) = IPair(pair).getReserves();
        if (to < from)
            (reserve0, reserve1) = (reserve1, reserve0);
    }
    function getPriceInfo(address from, address to, uint256 fromAmount, uint256 toAmount) public view override virtual returns (uint256 chainlinkPrice, uint256 ammPrice, uint256 usdAmount) {
        uint256 numerator;
        uint256 denominator;
        uint112 reserve0;
        uint112 reserve1;
        (usdAmount, numerator, denominator, reserve0, reserve1) = _getRatio(from, to, fromAmount, toAmount);

        chainlinkPrice = numerator.mul(WEI).div(denominator);

        if (reserve0 != 0) {
            uint8 decimals0 = decimals[from];
            uint8 decimals1 = decimals[to];

            ammPrice = uint256(reserve1).mul(WEI);
            if (decimals1 < decimals0) {
                ammPrice = ammPrice.mul(10**(uint256(decimals0-decimals1)));
            }
            ammPrice = ammPrice.div(reserve0);
            if (decimals0 < decimals1) {
                ammPrice = ammPrice.div(10**(uint256(decimals1-decimals0)));
            }
        }
    }
    function getRatio(address from, address to, uint256 fromAmount, uint256 toAmount, bytes calldata /*payload*/) public view override(IOSWAP_OracleAdaptor,OSWAP_OracleChainlinkBase) virtual returns (uint256 numerator, uint256 denominator) {
        uint256 usdAmount;
        uint112 reserve0;
        uint112 reserve1;
        (usdAmount, numerator, denominator, reserve0, reserve1) = _getRatio(from, to, fromAmount, toAmount);

        require(usdAmount <= maxValue, "OracleAdaptor: Exceessive amount");

        uint256 n1 = denominator.mul(reserve1);
        uint256 n2 = numerator.mul(reserve0);

        uint8 decimals0 = decimals[from];
        uint8 decimals1 = decimals[to];
        uint256 ratio;
        if (decimals1 < decimals0) {
            ratio = 10**(uint256(decimals0-decimals1));
            n1 = n1.mul(ratio);
        } else if (decimals0 < decimals1) {
            ratio = 10**(uint256(decimals1-decimals0));
            n2 = n2.mul(ratio);
        }

        if (useAmmPrice) {
            // low < (reserve1 / reserve0) / (numerator / denominator) < high
            // low < (reserve1*denominator) / (reserve0*numerator) < high
            // low < n1 / n2 < high
            require(n1.mul(low) <= n2.mul(WEI) && n2.mul(WEI) <= n1.mul(high), "OracleAdaptor: Price outside allowed range");
            numerator = reserve1;
            denominator = reserve0;
            if (decimals1 < decimals0) {
                numerator = numerator.mul(ratio);
            } else if (decimals0 < decimals1) {
                denominator = denominator.mul(ratio);
            }
        } else {
            // low < (numerator / denominator) / (reserve1 / reserve0) < high
            // low < (reserve0*numerator) / (denominator*reserve1) < high
            // low < n2 / n1 < high
            require(n2.mul(low) <= n1.mul(WEI) && n1.mul(WEI) <= n2.mul(high), "OracleAdaptor: Price outside allowed range");
        }
    }
}


// File contracts/OSWAP_OracleChainlinkPriceGuardFiatBase.sol


pragma solidity =0.6.11;
abstract contract OSWAP_OracleChainlinkPriceGuardFiatBase is OSWAP_OracleChainlinkPriceGuardBase, OSWAP_OracleChainlinkFiatBase {
	using SafeMath for uint256;

    constructor(address _factory, uint256 _maxValue, uint256 _deviation, bool _useAmmPrice) 
        public 
        OSWAP_OracleChainlinkPriceGuardBase(address(0), _factory, _maxValue, _deviation, _useAmmPrice)
        // OSWAP_OracleChainlinkFiatBase() // prevent "Base constructor arguments given twice."
    {
    }

    function _getRatio(address from, address to, uint256 fromAmount, uint256 toAmount) internal override view returns (uint256 usdAmount, uint256 numerator, uint256 denominator, uint112 reserve0, uint112 reserve1) {
        require(from != to, "OSWAP: from and to addresses are the same");
        require(from != address(0) && to != address(0), "OSWAP: Oracle: Invalid address");

        address toUsd = priceFeedAddresses[from];
        (numerator, ) = _getLatestPrice(toUsd);

        address fromUsd = priceFeedAddresses[to];
        (denominator, ) = _getLatestPrice(fromUsd);

        if (fromAmount == 0) {
            usdAmount = toAmount.mul(denominator).div(10**uint256(chainlinkDeicmals));
            usdAmount = convertEthDecimals(usdAmount, to);
        } else if (toAmount == 0) {
            usdAmount = fromAmount.mul(numerator).div(10**uint256(chainlinkDeicmals));
            usdAmount = convertEthDecimals(usdAmount, from);
        } else {
            revert("OracleAdaptor: Invalid amount");
        }

        address pair = IFactory(factory).getPair(from, to);
        require(address(pair) != address(0), "pair not exists");

        // from < to: amountout = amountin * reserve1 / reserve0
        // to < from: amountout = amountin * reserve0 / reserve1
        (reserve0, reserve1, ) = IPair(pair).getReserves();
        if (to < from)
            (reserve0, reserve1) = (reserve1, reserve0);
    }
    function getRatio(address from, address to, uint256 fromAmount, uint256 toAmount, bytes calldata payload) public view override(OSWAP_OracleChainlinkPriceGuardBase, OSWAP_OracleChainlinkFiatBase) virtual returns (uint256 numerator, uint256 denominator) {
        return OSWAP_OracleChainlinkPriceGuardBase.getRatio(from, to, fromAmount, toAmount, payload);
    }
    function isSupported(address from, address to) public view override(OSWAP_OracleChainlinkBase, OSWAP_OracleChainlinkFiatBase) virtual returns (bool supported) {
        return OSWAP_OracleChainlinkFiatBase.isSupported(from, to);
    }
}


// File contracts/OSWAP_OracleChainlinkPriceGuardFiatBinance.sol


pragma solidity =0.6.11;
contract OSWAP_OracleChainlinkPriceGuardFiatBinance is OSWAP_OracleChainlinkFiatBinance, OSWAP_OracleChainlinkPriceGuardFiatBase {
    constructor(address _factory, uint256 _maxValue, uint256 _deviation, bool _returnAmmPrice)
        public 
        OSWAP_OracleChainlinkFiatBinance()
        OSWAP_OracleChainlinkPriceGuardFiatBase(_factory, _maxValue, _deviation, _returnAmmPrice)
    {
        decimals[0x3EE2200Efb3400fAbB9AacF31297cBdD1d435D47] = 18; // ADA
        decimals[0x0Eb3a705fc54725037CC9e008bDede697f62F335] = 18; // ATOM
        decimals[0xa184088a740c695E156F91f5cC086a06bb78b827] = 18; // AUTO
        decimals[0x8fF795a6F4D97E7887C79beA79aba5cc76444aDf] = 18; // BCH
        decimals[0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c] = 18; // BTC
        decimals[0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56] = 18; // BUSD
        decimals[0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82] = 18; // CAKE
        decimals[0x52CE071Bd9b1C4B00A0b92D298c512478CaD67e8] = 18; // COMP
        decimals[0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3] = 18; // DAI
        decimals[0x7083609fCE4d1d8Dc0C979AAb8c869Ea2C873402] = 18; // DOT
        decimals[0x56b6fB708fC5732DEC1Afc8D8556423A2EDcCbD6] = 18; // EOS
        decimals[0x2170Ed0880ac9A755fd29B2688956BD959F933F8] = 18; // ETH
        decimals[0x0D8Ce2A99Bb6e3B7Db580eD848240e4a0F9aE153] = 18; // FIL
        decimals[0x762539b45A1dCcE3D36d080F74d1AED37844b878] = 18; // LINA
        decimals[0xF8A0BF9cF54Bb92F17374d9e9A321E6a111a51bD] = 18; // LINK
        decimals[0x4338665CBB7B2485A8855A139b75D5e34AB0DB94] = 18; // LTC
        decimals[0xFd7B3A77848f1C2D67E05E54d78d174a0C850335] = 18; // ONT
        decimals[0x8519EA49c997f50cefFa444d240fB655e89248Aa] = 18; // RAMP
        decimals[0x47BEAd2563dCBf3bF2c9407fEa4dC236fAbA485A] = 18; // SXP
        decimals[0xBf5140A22578168FD562DCcF235E5D43A02ce9B1] = 18; // UNI
        decimals[0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d] = 18; // USDC
        decimals[0x55d398326f99059fF775485246999027B3197955] = 18; // USDT
        decimals[0x4BD17003473389A42DAF6a0a729f6Fdb328BbBd7] = 18; // VAI
        decimals[0x1D2F0da169ceB9fC7B3144628dB156f3F6c60dBE] = 18; // XRP
        decimals[0x16939ef78684453bfDFb47825F8a5F714f12623a] = 18; // XTZ
        decimals[0xcF6BB5389c92Bdda8a3747Ddb454cB7a64626C63] = 18; // XVS
        decimals[0x88f1A5ae2A3BF98AEAF342D26B30a79438c9142e] = 18; // YFI
        decimals[0x7F70642d88cf1C4a3a7abb072B53B929b653edA5] = 18; // YFII
    }
    function getRatio(address from, address to, uint256 fromAmount, uint256 toAmount, bytes calldata payload) public view override (OSWAP_OracleChainlinkFiatBase, OSWAP_OracleChainlinkPriceGuardFiatBase) returns (uint256 numerator, uint256 denominator) {
        return OSWAP_OracleChainlinkPriceGuardFiatBase.getRatio(from, to, fromAmount, toAmount, payload);
    }
    function isSupported(address from, address to) public view override (OSWAP_OracleChainlinkFiatBase, OSWAP_OracleChainlinkPriceGuardFiatBase) returns (bool supported) {
        return OSWAP_OracleChainlinkPriceGuardFiatBase.isSupported(from, to);
    }
}
