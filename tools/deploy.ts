import fs from "fs";
import path from "path";
import Web3 from 'web3';

import {BigNumber, Utils, Wallet} from "@ijstech/eth-wallet";
import * as Oracle from "../src";

const networks = require("../data/networks.js");

// BNB/AVAX/ETH - USDT
const tokens = {
    binanceTestnet:["0xae13d989dac2f0debff460ac112a837c89baa7cd", "0x29386b60e0a9a1a30e1488ada47256577ca2c385"],
    avalancheTestnet:["0xd00ae08403B9bbb9124bB305C09058E32C39A48c", "0xb9c31ea1d475c25e58a1be1a46221db55e5a7c6e"],
    kovan:["0xd0A1E359811322d97991E03f863a0C30C2cF029C","0xdcdafd9461c2df544f6e2165481e8174e45febd8"]
}
const prices = {
    binanceTestnet: 1000,
    avalancheTestnet: 100,
    kovan: 10000
}
async function deploy(network){
    let rpc = networks[network].rpc;
    let accounts = {
        "address": "",
        "privateKey": ""
    };
    let provider = new Web3.providers.HttpProvider(rpc);
    let wallet = new Wallet(provider, accounts);

    let oracle = new Oracle.Contracts.OSWAP_OracleConstant(wallet);
    let address = await oracle.deploy( {
        token0: [tokens[network][0]],
        token1: [tokens[network][1]],
        price0: [new BigNumber(prices[network]).shiftedBy(18)],
        price1: [(new BigNumber(1).shiftedBy(36).idiv(new BigNumber(prices[network]).shiftedBy(18)))]
    });
    console.log(address);
}
async function main(){
    await deploy("binanceTestnet");
    await deploy("avalancheTestnet");
    await deploy("kovan");
}
main();