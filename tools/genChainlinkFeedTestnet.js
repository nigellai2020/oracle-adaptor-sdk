const fs = require('fs');

const chainId = 56;
const native =  "USD";

// https://docs.chain.link/docs/ethereum-addresses
// https://docs.chain.link/docs/binance-smart-chain-addresses
// let feeds = fs.readFileSync(process.argv[2], "utf8");
let feeds = `
ADA / USD	8	0x5e66a1775BbC249b5D51C13d29245522582E671C
BAKE / USD	8	0xbe75E0725922D78769e3abF0bcb560d1E2675d5d
BCH / USD	8	0x887f177CBED2cf555a64e7bF125E1825EB69dB82
BNB / USD	8	0x2514895c72f50D8bd4B4F9b1110F0D6bD2c97526
BTC / ETH	18	0x1a602D4928faF0A153A520f58B332f9CAFF320f7
BTC / USD	8	0x5741306c21795FdCBb9b265Ea0255F499DFe515C
BTC 1d IV	8	0x86Be1a485Cdce02157A525dFc1c09f355a167075
BUSD / ETH	18	0x5ea7D6A33D3655F661C298ac8086708148883c34
BUSD / USD	8	0x9331b55D9830EF609A2aBCfAc0FBCE050A52fdEa
CAKE / USD	8	0x81faeDDfeBc2F8Ac524327d70Cf913001732224C
CREAM / USD	8	0xB8eADfD8B78aDA4F85680eD96e0f50e1B5762b0a
DAI / BNB	18	0x0630521aC362bc7A19a4eE44b57cE72Ea34AD01c
DAI / USD	8	0xE4eE17114774713d2De0eC0f035d4F7665fc025D
DODO / USD	8	0x2939E0089e61C5c9493C2013139885444c73a398
DOGE / USD	8	0x963D5e7f285Cc84ed566C486c3c1bC911291be38
DOT / USD	8	0xEA8731FD0685DB8AeAde9EcAE90C4fdf1d8164ed
EQZ / USD	8	0x6C2441920404835155f33d88faf0545B895871b1
ETH / USD	8	0x143db3CEEfbdfe5631aDD3E50f7614B6ba708BA7
FIL / USD	8	0x17308A18d4a50377A4E1C37baaD424360025C74D
FRONT / USD	8	0x101E51C0Bc2D2213a9b0c991A991958aAd3fF96A
INJ / USD	8	0x58b299Fa027E1d9514dBbEeBA7944FD744553d61
LINK / BNB	8	0x351Ff08FF5077d6E8704A4763836Fe187f074380
LINK / USD	8	0x1B329402Cb1825C6F30A0d92aB9E2862BE47333f
LTC / USD	8	0x9Dcf949BCA2F4A8a62350E0065d18902eE87Dca3
MATIC / USD	8	0x957Eb0316f02ba4a9De3D308742eefd44a3c1719
REEF / USD	8	0x902fA2495a8c5E89F7496F91678b8CBb53226D06
SFP / USD	8	0x4b531A318B0e44B549F3b2f824721b3D0d51930A
SXP / USD	8	0x678AC35ACbcE272651874E782DB5343F9B8a7D66
TWT / USD	8	0x7671d7EDb66E4C10d5FFaA6a0d8842B5d880F0B3
USDC / USD	8	0x90c069C4538adAc136E051052E14c1cD799C41B7
USDT / USD	8	0xEca2605f0BCF2BA5966372C99837b1F182d3D620
VAI / USD	8	0xdb398f7B5927b92ec52C0Ae5D3090DB147eAedA5
XRP / USD	8	0x4046332373C24Aed1dC8bAd489A04E187833B28d
XVS / USD	8	0xCfA786C17d6739CBC702693F23cA4417B5945491
`;

// http://tokens.1inch.eth.link/
// https://github.com/pancakeswap/pancake-swap-interface/blob/master/src/constants/token/pancakeswap.json
// let tokenlist = fs.readFileSync(process.argv[3], "utf8");

feeds = feeds.trim().split('\n');
// tokenlist = JSON.parse(tokenlist);

console.log(feeds.length);
// console.log(tokenlist.tokens.length);
let a=0,b=0,c=0;
for (let i = 0 ; i < feeds.length ; i++) {
    let price = feeds[i].match(/([0-9a-zA-Z ]+)\s\/\s([0-9a-zA-Z]+)\s*([0-9]+)\s*(0x[0-9a-fA-F]{40})/);
    if (price && price[2] == native) {
        let token = price[1];
        let decimals = price[3];
        let feed = price[4];
        // let e = tokenlist.tokens.filter(e=>(e.chainId==chainId&&e.symbol.toLowerCase()==token.toLowerCase()));
        // if (e.length == 0) {
        //     console.log(`// ${token} not found`);
        //     a++;
        // } else if (e.length == 1) {
            // let address = e[0].address.toLowerCase().slice(2);
            // const addressHash = require('js-sha3').keccak256(address);
            // address = "0x" + address.split("").map((e,i)=>{return parseInt(addressHash[i], 16) > 7 ? e.toUpperCase() : e}).join('');
            // console.log(`priceFeedAddresses[${address}] = ${feed}; // ${e[0].symbol}`);
            // console.log(`priceFeedDecimals[${address}] = ${decimals};`);
            // console.log(`decimals[${address}] = ${e[0].decimals}; // ${e[0].symbol}`);
            console.log(`priceFeedAddresses[${token.toLowerCase()}] = ${feed}; // ${token}`);
            b++;
        // } else {
        //     console.log(token + " has more than one tokens ", e);
        //     c++;
        // }
    }
}
console.log(a,b,c)