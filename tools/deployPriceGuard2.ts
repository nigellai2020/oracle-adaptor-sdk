
import {Utils, Wallet} from "@ijstech/eth-wallet";
import { OSWAP_OracleChainlinkPriceGuardFiatAvalancheTestnet } from '../test/src/contracts';
import { OSWAP_OracleChainlinkPriceGuardFiatAvalanche } from '../src/contracts';
import Web3 from 'web3';
import * as Config from '../data/config'

async function deployAvaxTestnet(wallet: Wallet) {
    const oracle = new OSWAP_OracleChainlinkPriceGuardFiatAvalancheTestnet(wallet);
    let address = await oracle.deploy({
        wavax: Config.deploymentConfig.weth,
        usdt: Config.deploymentConfig.usdt,
        factory: Config.deploymentConfig.factory,
        maxValue: Utils.toDecimals(Config.deploymentConfig.maxValue),
        deviation: Utils.toDecimals(Config.deploymentConfig.deviation),
        useAmmPrice: true
    })
    return address;
}

async function deployAvaxMainnet(wallet: Wallet) {
    const oracle = new OSWAP_OracleChainlinkPriceGuardFiatAvalanche(wallet);
    let address = await oracle.deploy({
        factory: Config.deploymentConfig.factory,
        maxValue: Utils.toDecimals(Config.deploymentConfig.maxValue),
        deviation: Utils.toDecimals(Config.deploymentConfig.deviation),
        returnAmmPrice: true
    })
    return address;
}

async function run() {
    const account = Config.deployer
    let rpcUrl = Config.rpcUrl;
    let provider = new Web3.providers.HttpProvider(rpcUrl);
    let wallet = new Wallet(provider, account);

    let address = await deployAvaxTestnet(wallet);
    //let address = await deployAvaxMainnet(wallet);
    console.log('address', address);
}

run();