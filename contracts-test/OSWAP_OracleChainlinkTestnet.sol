// SPDX-License-Identifier: GPL-3.0-only
pragma solidity =0.6.11;

import "../contracts/OSWAP_OracleChainlinkV1Base.sol";
import "../contracts/OSWAP_OracleChainlinkBase.sol";
import "../contracts/OSWAP_OracleChainlinkFiatBase.sol";

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

