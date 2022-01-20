import {Wallet, Contract, TransactionReceipt, Utils, BigNumber} from "@ijstech/eth-wallet";
const Bin = require("../../bin/contracts/OSWAP_OracleUnity.json");

export class OSWAP_OracleUnity extends Contract{
    constructor(wallet: Wallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
    }
    deploy(): Promise<string>{
        return this._deploy();
    }
    async decimals(): Promise<BigNumber>{
        let result = await this.methods('decimals');
        return new BigNumber(result);
    }
    async getLatestPrice(params:{param1:string,param2:string,param3:string}): Promise<BigNumber>{
        let result = await this.methods('getLatestPrice',params.param1,params.param2,params.param3);
        return new BigNumber(result);
    }
    async getRatio(params:{param1:string,param2:string,param3:number|BigNumber,param4:number|BigNumber,param5:string}): Promise<{numerator:BigNumber,denominator:BigNumber}>{
        let result = await this.methods('getRatio',params.param1,params.param2,Utils.toString(params.param3),Utils.toString(params.param4),params.param5);
        return {
            numerator: new BigNumber(result.numerator),
            denominator: new BigNumber(result.denominator)
        };
    }
    async isSupported(params:{param1:string,param2:string}): Promise<boolean>{
        let result = await this.methods('isSupported',params.param1,params.param2);
        return result;
    }
}