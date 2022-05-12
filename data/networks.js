module.exports = 
 {
    "mainnet": {
        "networkId": 1,
        "rpc": `https://mainnet.infura.io/v3/${process.env.INFURA_ID}`,
        "weth9Token": "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
        "blockGasLimit": 12000000,
        "wrappedUtilityToken": "WETH9",
        "blockTime":20
    },
    "ropsten": {
        "networkId": 3,
        "rpc": `https://ropsten.infura.io/v3/${process.env.INFURA_ID}`,
        "weth9Token": "0xc778417E063141139Fce010982780140Aa0cD5Ab",
        "blockGasLimit": 8000000,
        "wrappedUtilityToken": "WETH9",
        "blockTime":10
    },
    "rinkeby": {
        "networkId": 4,
        "rpc": `https://rinkeby.infura.io/v3/${process.env.INFURA_ID}`,
        "weth9Token": "0xc778417E063141139Fce010982780140Aa0cD5Ab",
        "blockGasLimit": 10000000,
        "wrappedUtilityToken": "WETH9",
        "blockTime":20
    },
    "kovan": {
        "networkId": 42,
        "rpc": `https://kovan.infura.io/v3/${process.env.INFURA_ID}`,
        "weth9Token": "0xd0A1E359811322d97991E03f863a0C30C2cF029C",
        "blockGasLimit": 12000000,
        "wrappedUtilityToken": "WETH9",
        "blockTime":10
    },
    "ganache": {
        "networkId": 1337,
        "rpc": "http://127.0.0.1:7545",
        "rpcOptions": {keepAlive:false/*,timeout: 30000*/},
        "blockGasLimit": 6000000,
        "wrappedUtilityToken": "WETH9",
        "blockTime":1
    },
    "ganache2": {
        "networkId": 1338,
        "rpc": "http://127.0.0.1:7555",
        "rpcOptions": {keepAlive:false/*,timeout: 30000*/},
        "blockGasLimit": 6000000,
        "wrappedUtilityToken": "WETH9",
        "blockTime":1
    },
    "hostGanache": {
        "networkId": 1337,
        "rpc": "http://host.docker.internal:7545",
        "rpcOptions": {keepAlive:false/*,timeout: 30000*/},
        "blockGasLimit": 6000000,
        "wrappedUtilityToken": "WETH9",
        "blockTime":3
    },
    "localGanache": {
        "networkId": 1337,
        "blockGasLimit": 6000000,
        "wrappedUtilityToken": "WETH9",
        "blockTime":1
    },
    "localGanache2": {
        "networkId": 1338,
        "blockGasLimit": 6000000,
        "wrappedUtilityToken": "WETH9",
        "blockTime":1
    },
    "hardhat": {
        "networkId": 31337,
        "rpc": "http://127.0.0.1:8545",
        "rpcOptions": {keepAlive:false/*,timeout: 30000*/},
        "blockGasLimit": 30000000,
        "wrappedUtilityToken": "WETH9",
        "blockTime":0
    },
    "hardhat2": {
        "networkId": 31338,
        "rpc": "http://127.0.0.1:8555",
        "rpcOptions": {keepAlive:false/*,timeout: 30000*/},
        "blockGasLimit": 30000000,
        "wrappedUtilityToken": "WETH9",
        "blockTime":0
    },
    "hostHardhat": {
        "networkId": 31337,
        "rpc": "http://host.docker.internal:8545",
        "rpcOptions": {keepAlive:false/*,timeout: 30000*/},
        "blockGasLimit": 30000000,
        "wrappedUtilityToken": "WETH9",
        "blockTime":2
    },
    "binanceMainnet": {
        "networkId": 56,
        "rpc": "https://bsc-dataseed.binance.org/",
        "blockGasLimit": 30000000,
        "weth9Token": "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
        "wrappedUtilityToken": "WBNB",
        "blockTime":10
    },
    "binanceTestnet": {
        "networkId": 97,
        "rpc": "https://data-seed-prebsc-1-s1.binance.org:8545/",
        "blockGasLimit": 30000000,
        "forceGasPrice": "20000000000",
        "weth9Token_PancakeSwap": "0xae13d989dac2f0debff460ac112a837c89baa7cd",
        "weth9Token_BakerySwap": "0x094616f0bdfb0b526bd735bf66eca0ad254ca81f",
        "weth9Token_BurgerSwap": "0x2f8b72301c05c444585d24B93e1e06bE9D0c35b2",
        "weth9Token": "0xae13d989dac2f0debff460ac112a837c89baa7cd",
        "wrappedUtilityToken": "WBNB",
        "blockTime":10
    },
    "binance": {
        "networkId": 56,
        "rpc": "https://bsc-dataseed.binance.org/",
        "blockGasLimit": 30000000,
        "weth9Token": "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
        "wrappedUtilityToken": "WBNB",
        "blockTime":10
    },
    "avalancheTestnet": {
        "networkId": 43113,
        "rpc": "https://api.avax-test.network/ext/bc/C/rpc",
        "blockGasLimit": 30000000,
        "weth9Token": "0xd00ae08403B9bbb9124bB305C09058E32C39A48c",
        "blockTime":10
    },    
    "aminoTestnet": {
        "networkId": 31337,
        "rpc": "https://leucine0.node.alphacarbon.network",
        "blockGasLimit": 15000000,
        "weth9Token": "0xBB04C4927A05Cf7d3e329E6333658D48A9313356",
        "wrappedUtilityToken": "ACT",
        "blockTime":30
    }
}

