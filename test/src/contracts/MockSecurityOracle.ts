import {Wallet, Contract, TransactionReceipt, Utils, BigNumber} from "@ijstech/eth-wallet";
const Bin = require("../../bin/MockSecurityOracle.json");

export class MockSecurityOracle extends Contract{
    constructor(wallet: Wallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
    }
    deploy(): Promise<string>{
        return this._deploy();
    }
    async getSecurityScore(oracle:string): Promise<BigNumber>{
        let result = await this.methods('getSecurityScore',oracle);
        return new BigNumber(result);
    }
    async oracleAddress(): Promise<string>{
        let result = await this.methods('oracleAddress');
        return result;
    }
    async setSecurityScore(params:{oracle:string,score:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.methods('setSecurityScore',params.oracle,Utils.toString(params.score));
        return result;
    }
}