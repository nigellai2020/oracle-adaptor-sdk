// Sources flattened with hardhat v2.6.4 https://hardhat.org

// File contracts/interfaces/IERC20.sol

// SPDX-License-Identifier: GPL-3.0-only
pragma solidity =0.6.11;

interface IERC20 {
    event Approval(address indexed owner, address indexed spender, uint value);
    event Transfer(address indexed from, address indexed to, uint value);

    function name() external view returns (string memory);
    function symbol() external view returns (string memory);
    function decimals() external view returns (uint8);
    function totalSupply() external view returns (uint);
    function balanceOf(address owner) external view returns (uint);
    function allowance(address owner, address spender) external view returns (uint);

    function approve(address spender, uint value) external returns (bool);
    function transfer(address to, uint value) external returns (bool);
    function transferFrom(address from, address to, uint value) external returns (bool);
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


// File contracts/interfaces/AggregatorV3Interface.sol


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


// File contracts/OSWAP_OracleChainlinkV1Base.sol


pragma solidity =0.6.11;
abstract contract OSWAP_OracleChainlinkV1Base is IOSWAP_OracleAdaptor {
	using SafeMath for uint256;

    uint8 constant _DECIMALS = 18;
    uint256 constant DECIMALS = uint256(_DECIMALS);
    uint256 constant WEI = 10**DECIMALS;
    uint256 constant WEI_SQ = 10**(DECIMALS*2);

    address WETH;

    mapping (address => address) public priceFeedAddresses;

    function _getLatestPrice(address priceFeedAddress, bytes calldata /*payload*/) internal view returns (uint256 price, uint8 decimals) {
        require(priceFeedAddress != address(0), "OSWAP: price feed not found");
        (,int256 price1,,,) = AggregatorV3Interface(priceFeedAddress).latestRoundData();
        decimals = AggregatorV3Interface(priceFeedAddress).decimals();
        require(price1 > 0, "OSWAP_OracleChainlink: Negative or zero price");
        price = uint256(price1);
    }
    function getRatio(address from, address to, uint256 /*fromAmount*/, uint256 /*toAmount*/, bytes calldata payload) public view override virtual returns (uint256 numerator, uint256 denominator) {
        require(from != to, "OSWAP: from and to addresses are the same");
        if (from == WETH) {
            uint8 decimals;
            address fromEth = priceFeedAddresses[to];
            (denominator, decimals) = _getLatestPrice(fromEth, payload);
            numerator = 10**uint256(decimals);
        } else if (to == WETH) {
            uint8 decimals;
            address toEth = priceFeedAddresses[from];
            (numerator, decimals) = _getLatestPrice(toEth, payload);
            denominator = 10**uint256(decimals);
        } else {
            address toEth = priceFeedAddresses[from];
            uint8 decimals1;
            (numerator, decimals1) = _getLatestPrice(toEth, payload);

            address fromEth = priceFeedAddresses[to];
            uint8 decimals2;
            (denominator, decimals2) = _getLatestPrice(fromEth,  payload);

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


// File contracts-test/OSWAP_OracleChainlinkTestnet.sol


pragma solidity =0.6.11;
contract OSWAP_OracleChainlinkV1Testnet is OSWAP_OracleChainlinkV1Base {
    constructor(address _weth, address[] memory _tokens, address[] memory pricefeed) public {
        WETH = _weth;
        require(_tokens.length == pricefeed.length, "Array length not match");
        uint256 length = _tokens.length;
        for (uint256 i = 0 ; i < length ; i++ ) {
            address token = _tokens[i];
            require(priceFeedAddresses[token] == address(0), "price feed already exists");
            priceFeedAddresses[token] = pricefeed[i];
        }
    }
}
contract OSWAP_OracleChainlinkTestnet is OSWAP_OracleChainlinkBase {
    constructor(address _weth, address[] memory _tokens, address[] memory pricefeed) public {
        WETH = _weth;
        require(_tokens.length == pricefeed.length, "Array length not match");
        uint256 length = _tokens.length;
        for (uint256 i = 0 ; i < length ; i++ ) {
            address token = _tokens[i];
            require(priceFeedAddresses[token] == address(0), "price feed already exists");
            priceFeedAddresses[token] = pricefeed[i];
        }
    }
}

contract OSWAP_OracleChainlinkFiatTestnet is OSWAP_OracleChainlinkFiatBase {
    constructor(address[] memory _tokens, address[] memory pricefeed) public 
        OSWAP_OracleChainlinkFiatBase()
    {
        require(_tokens.length == pricefeed.length, "Array length not match");
        uint256 length = _tokens.length;
        for (uint256 i = 0 ; i < length ; i++ ) {
            address token = _tokens[i];
            require(priceFeedAddresses[token] == address(0), "price feed already exists");
            priceFeedAddresses[token] = pricefeed[i];
        }
    }
}

contract OSWAP_OracleChainlinkKovan is OSWAP_OracleChainlinkBase {
    constructor(address dai, address usdc, address usdt) public {
        WETH = 0xd0A1E359811322d97991E03f863a0C30C2cF029C;

        priceFeedAddresses[dai] = 0x22B58f1EbEDfCA50feF632bD73368b2FdA96D541; // DAI
        priceFeedAddresses[usdc] = 0x64EaC61A2DFda2c3Fa04eED49AA33D021AeC8838; // USDC
        priceFeedAddresses[usdt] = 0x0bF499444525a23E7Bb61997539725cA2e928138; // USDT
    }
}

contract OSWAP_OracleChainlinkRinkeby is OSWAP_OracleChainlinkBase {
    constructor(address dai, address usdc) public {
        WETH = 0xc778417E063141139Fce010982780140Aa0cD5Ab;

        priceFeedAddresses[dai] = 0x74825DbC8BF76CC4e9494d0ecB210f676Efa001D; // DAI
        priceFeedAddresses[usdc] = 0xdCA36F27cbC4E38aE16C4E9f99D39b42337F6dcf; // USDC
    }
}

contract OSWAP_OracleChainlinkRopsten is OSWAP_OracleChainlinkBase {
    constructor(address dai, address usdc, address usdt) public {
        WETH = 0xc778417E063141139Fce010982780140Aa0cD5Ab;

        priceFeedAddresses[dai] = 0x24959556020AE5D39e5bAEC2bd6Bf12420C25aB5; // DAI
        priceFeedAddresses[usdc] = 0xB8784d2D77D3dbaa9cAC7d32D035A6d41e414e9c; // USDC
        priceFeedAddresses[usdt] = 0x14137fA0D2Cf232922840081166a6a05C957bA4c; // USDT
    }
}

contract OSWAP_OracleChainlinkBinanceTestnet is OSWAP_OracleChainlinkBase {
    constructor(address wbnb, address dai) public {
        // WBNB
        // pancakeswap: 0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd (wbnb)
        // burgerswap: 0x2f8b72301c05c444585d24B93e1e06bE9D0c35b2 (weth)
        WETH = wbnb;
        priceFeedAddresses[dai] = 0x0630521aC362bc7A19a4eE44b57cE72Ea34AD01c; // DAI
    }
}

contract OSWAP_OracleChainlinkFiatBinanceTestnet is OSWAP_OracleChainlinkFiatBase {
    constructor(address wbnb, address busd, address usdt) public OSWAP_OracleChainlinkFiatBase() {
        // Using the list of Chainlink symbol to address from 
        // https://docs.chain.link/docs/binance-smart-chain-addresses
        // and token list from 
        // https://github.com/pancakeswap/pancake-swap-interface/blob/master/src/constants/token/pancakeswap.json

        // USD based
        // priceFeedAddresses[ada] = 0x5e66a1775BbC249b5D51C13d29245522582E671C; // ADA
        // priceFeedAddresses[bake] = 0xbe75E0725922D78769e3abF0bcb560d1E2675d5d; // BAKE
        // priceFeedAddresses[bch] = 0x887f177CBED2cf555a64e7bF125E1825EB69dB82; // BCH
        priceFeedAddresses[wbnb] = 0x2514895c72f50D8bd4B4F9b1110F0D6bD2c97526; // BNB
        // priceFeedAddresses[btc] = 0x5741306c21795FdCBb9b265Ea0255F499DFe515C; // BTC
        priceFeedAddresses[busd] = 0x9331b55D9830EF609A2aBCfAc0FBCE050A52fdEa; // BUSD
        // priceFeedAddresses[cake] = 0x81faeDDfeBc2F8Ac524327d70Cf913001732224C; // CAKE
        // priceFeedAddresses[cream] = 0xB8eADfD8B78aDA4F85680eD96e0f50e1B5762b0a; // CREAM
        // priceFeedAddresses[dai] = 0xE4eE17114774713d2De0eC0f035d4F7665fc025D; // DAI
        // priceFeedAddresses[dodo] = 0x2939E0089e61C5c9493C2013139885444c73a398; // DODO
        // priceFeedAddresses[doge] = 0x963D5e7f285Cc84ed566C486c3c1bC911291be38; // DOGE
        // priceFeedAddresses[dot] = 0xEA8731FD0685DB8AeAde9EcAE90C4fdf1d8164ed; // DOT
        // priceFeedAddresses[eqz] = 0x6C2441920404835155f33d88faf0545B895871b1; // EQZ
        // priceFeedAddresses[eth] = 0x143db3CEEfbdfe5631aDD3E50f7614B6ba708BA7; // ETH
        // priceFeedAddresses[fil] = 0x17308A18d4a50377A4E1C37baaD424360025C74D; // FIL
        // priceFeedAddresses[front] = 0x101E51C0Bc2D2213a9b0c991A991958aAd3fF96A; // FRONT
        // priceFeedAddresses[inj] = 0x58b299Fa027E1d9514dBbEeBA7944FD744553d61; // INJ
        // priceFeedAddresses[link] = 0x1B329402Cb1825C6F30A0d92aB9E2862BE47333f; // LINK
        // priceFeedAddresses[ltc] = 0x9Dcf949BCA2F4A8a62350E0065d18902eE87Dca3; // LTC
        // priceFeedAddresses[matic] = 0x957Eb0316f02ba4a9De3D308742eefd44a3c1719; // MATIC
        // priceFeedAddresses[reef] = 0x902fA2495a8c5E89F7496F91678b8CBb53226D06; // REEF
        // priceFeedAddresses[sfp] = 0x4b531A318B0e44B549F3b2f824721b3D0d51930A; // SFP
        // priceFeedAddresses[sxp] = 0x678AC35ACbcE272651874E782DB5343F9B8a7D66; // SXP
        // priceFeedAddresses[twt] = 0x7671d7EDb66E4C10d5FFaA6a0d8842B5d880F0B3; // TWT
        // priceFeedAddresses[usdc] = 0x90c069C4538adAc136E051052E14c1cD799C41B7; // USDC
        priceFeedAddresses[usdt] = 0xEca2605f0BCF2BA5966372C99837b1F182d3D620; // USDT
        // priceFeedAddresses[vai] = 0xdb398f7B5927b92ec52C0Ae5D3090DB147eAedA5; // VAI
        // priceFeedAddresses[xrp] = 0x4046332373C24Aed1dC8bAd489A04E187833B28d; // XRP
        // priceFeedAddresses[xvs] = 0xCfA786C17d6739CBC702693F23cA4417B5945491; // XVS
    }
}


// File contracts-test/OSWAP_OracleChainlinkPriceGuardTestnet.sol


pragma solidity =0.6.11;
contract MockPriceGuardFactory is IFactory {
    mapping(address => mapping(address => address)) public override getPair;
    function set(address token0, address token1, address _pair) public {
        getPair[token0][token1] = _pair;
        getPair[token1][token0] = _pair;
    }
    function minLotSize(address /*token*/) external override view returns (uint256) {}
}

contract MockPriceGuardPair is IPair {
    address public immutable token0;
    address public immutable token1;
    uint112 public __reserve0;
    uint112 public __reserve1;
    constructor(address _token0, address _token1) public {
        require(_token0 != address(0) && _token0 < _token1);
        token0 = _token0;
        token1 = _token1;
    }
    function setReserves(uint112 _reserve0, uint112 _reserve1) public {
        __reserve0 = _reserve0;
        __reserve1 = _reserve1;
    }
    function getReserves() external override view returns (uint112 reserve0, uint112 reserve1, uint32 blockTimestampLast) {
        return (__reserve0, __reserve1, 0);
    }
}

contract OSWAP_OracleChainlinkPriceGuardTestnet is OSWAP_OracleChainlinkTestnet, OSWAP_OracleChainlinkPriceGuardBase {
    address constant bscWethPriceFeed = 0x2514895c72f50D8bd4B4F9b1110F0D6bD2c97526;
    constructor(address _weth, address wethPriceFeed, address[] memory _tokens, address[] memory _pricefeeds, address _factory, uint256 _maxValue, uint256 _deviation, bool _useAmmPrice) 
        public 
        OSWAP_OracleChainlinkTestnet(_weth, _tokens, _pricefeeds)
        OSWAP_OracleChainlinkPriceGuardBase(wethPriceFeed, _factory, _maxValue, _deviation, _useAmmPrice)
    {
        decimals[_weth] = IERC20(_weth).decimals();
        uint256 length = _tokens.length;
        for (uint256 i = 0 ; i < length ; i++) {
            address token = _tokens[i];
            decimals[token] = IERC20(token).decimals();
        }
    }
    function getRatio(address from, address to, uint256 fromAmount, uint256 toAmount, bytes calldata payload) public view override (OSWAP_OracleChainlinkBase, OSWAP_OracleChainlinkPriceGuardBase) returns (uint256 numerator, uint256 denominator) {
        return OSWAP_OracleChainlinkPriceGuardBase.getRatio(from, to, fromAmount, toAmount, payload);
    }
}

contract OSWAP_OracleChainlinkPriceGuardFiatTestnet is OSWAP_OracleChainlinkFiatTestnet, OSWAP_OracleChainlinkPriceGuardFiatBase {
    constructor(address[] memory _tokens, address[] memory _pricefeeds, address _factory, uint256 _maxValue, uint256 _deviation, bool _useAmmPrice) 
        public 
        OSWAP_OracleChainlinkFiatTestnet(_tokens, _pricefeeds)
        OSWAP_OracleChainlinkPriceGuardFiatBase(_factory, _maxValue, _deviation, _useAmmPrice)
    {
        uint256 length = _tokens.length;
        for (uint256 i = 0 ; i < length ; i++) {
            address token = _tokens[i];
            decimals[token] = IERC20(token).decimals();
        }
    }
    function getRatio(address from, address to, uint256 fromAmount, uint256 toAmount, bytes calldata payload) public view override (OSWAP_OracleChainlinkFiatBase, OSWAP_OracleChainlinkPriceGuardFiatBase) returns (uint256 numerator, uint256 denominator) {
        return OSWAP_OracleChainlinkPriceGuardFiatBase.getRatio(from, to, fromAmount, toAmount, payload);
    }
    function isSupported(address from, address to) public view override (OSWAP_OracleChainlinkFiatBase, OSWAP_OracleChainlinkPriceGuardFiatBase) returns (bool supported) {
        return OSWAP_OracleChainlinkFiatBase.isSupported(from, to);
    }
}

contract OSWAP_OracleChainlinkPriceGuardFiatBinanceTestnet is OSWAP_OracleChainlinkFiatBinanceTestnet, OSWAP_OracleChainlinkPriceGuardFiatBase {
    constructor(address wbnb, address busd, address usdt, address _factory, uint256 _maxValue, uint256 _deviation, bool _useAmmPrice) 
        public 
        OSWAP_OracleChainlinkFiatBinanceTestnet(wbnb, busd, usdt)
        OSWAP_OracleChainlinkPriceGuardFiatBase(_factory, _maxValue, _deviation, _useAmmPrice)
    {
        // Using the list of Chainlink symbol to address from 
        // https://docs.chain.link/docs/binance-smart-chain-addresses
        // and token list from 
        // https://github.com/pancakeswap/pancake-swap-interface/blob/master/src/constants/token/pancakeswap.json

        // USD based
        priceFeedAddresses[wbnb] = 0x2514895c72f50D8bd4B4F9b1110F0D6bD2c97526; // BNB
        priceFeedAddresses[busd] = 0x9331b55D9830EF609A2aBCfAc0FBCE050A52fdEa; // BUSD
        priceFeedAddresses[usdt] = 0xEca2605f0BCF2BA5966372C99837b1F182d3D620; // USDT
        decimals[wbnb] = 18;
        decimals[busd] = 18;
        decimals[usdt] = 6;

    }
    function getRatio(address from, address to, uint256 fromAmount, uint256 toAmount, bytes calldata payload) public view override (OSWAP_OracleChainlinkFiatBase, OSWAP_OracleChainlinkPriceGuardFiatBase) returns (uint256 numerator, uint256 denominator) {
        return OSWAP_OracleChainlinkPriceGuardFiatBase.getRatio(from, to, fromAmount, toAmount, payload);
    }
    function isSupported(address from, address to) public view override (OSWAP_OracleChainlinkFiatBase, OSWAP_OracleChainlinkPriceGuardFiatBase) returns (bool supported) {
        return OSWAP_OracleChainlinkPriceGuardFiatBase.isSupported(from, to);
    }
}
