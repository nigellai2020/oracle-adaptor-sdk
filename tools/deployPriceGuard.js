const ethers = require("ethers");
const fs = require('fs');

const ByteCodes = JSON.parse(fs.readFileSync("./build/bytecodes.json"));
const Abis = JSON.parse(fs.readFileSync("./build/abis.json"));

const privateKey = "";
const rpcUrl = "https://data-seed-prebsc-2-s2.binance.org:8545";
// const rpcUrl = "https://bsc-dataseed.binance.org/";

const factory = "0xbE5c105Ee06f6e7A2C30988ED22480c4710cbBD6";
const maxValue = ethers.utils.parseEther("10000");
const deviation = ethers.utils.parseEther("0.01");

// testnet
const wbnb = "0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd";
const busd = "0xDe9334C157968320f26e449331D6544b89bbD00F";
const usdt = "0x29386B60e0A9A1a30e1488ADA47256577ca2C385";

const provider = new ethers.providers.JsonRpcProvider(rpcUrl);
let signer = new ethers.Wallet(privateKey, provider);

async function deploy(contractName, args) {
    let interface = Abis[contractName];
    let bytecode = ByteCodes[contractName];
    let factory = new ethers.ContractFactory(interface , bytecode, signer);

    let contract = await factory.deploy.apply(factory, args);
    // contract.address
    let receipt = await contract.deployTransaction.wait();
    let address = receipt.contractAddress;
    // let address = (await contract.deployed()).address
    return address;
}

async function run() {
    // ====================================================================================================
    // private testnet

    // let wbnb = await deploy("WETH9");
    // let busd = await deploy("MockERC20", ["BUSD", "BUSD", "1000000000000000000000000000000000000", "0", 18]);
    // let usdt = await deploy("MockERC20", ["USDT", "USDT", "1000000000000000000000000000000000000", "0", 18]);

    // Mock Chainlink
    // constructor(uint256 _decimals, string memory _description, uint256 _version)
    // let wbnbOracle = await deploy("MockV3Aggregator", ["BNB/USD", "8", ethers.utils.parseUnits("374.87918563", 8)]);
    // let busdOracle = await deploy("MockV3Aggregator", ["BUSD/USD", "8", ethers.utils.parseUnits("1", 8)]);
    // let usdtOracle = await deploy("MockV3Aggregator", ["USDT/USD", "8", ethers.utils.parseUnits("1", 8)]);
    // console.log(wbnbOracle, busdOracle, usdtOracle);

    // let wbnbOracle = "0xCDA509E1464a78ef4FAA1026b38d711f64b81A8A";
    // let busdOracle = "0x49da9F81e5c51EEfB0CD39a11f135fF7De0C5446";
    // let usdtOracle = "0xf1BCFa79030C62f013c5E1476194D6213683f3cB";

    // constructor(address[] memory _tokens, address[] memory _pricefeeds, address _factory, uint256 _maxValue, uint256 _deviation) 
    // let oracle = await deploy("OSWAP_OracleChainlinkPriceGuardFiatTestnet", [[wbnb, busd, usdt], [wbnbOracle, busdOracle, usdtOracle], factory, maxValue, deviation, true]);


    // ====================================================================================================
    // binance testnet
    // constructor(address wbnb, address busd, address usdt, uint256 _maxValue, address _factory, uint256 _deviation) 
    // let oracle = await deploy("OSWAP_OracleChainlinkPriceGuardFiatBinanceTestnet", [wbnb, busd, usdt, factory, maxValue, deviation, true]);


    // ====================================================================================================
    // binance mainnet
    // constructor(address _factory, uint256 _maxValue, uint256 _deviation)
    // let oracle = await deploy("OSWAP_OracleChainlinkPriceGuardFiatBinance", [factory, maxValue, deviation, true]);


    console.log(oracle);
}

run();
