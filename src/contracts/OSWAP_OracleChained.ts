import {Wallet, Contract, TransactionReceipt, Utils, BigNumber, Event} from "@ijstech/eth-wallet";
const Bin = require("../../bin/contracts/OSWAP_OracleChained.json");

export class OSWAP_OracleChained extends Contract{
    constructor(wallet: Wallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
    }
    deploy(params:{from:string[],to:string[],count:(number|BigNumber)[],paths:string[],oracles:string[]}): Promise<string>{
        return this._deploy(params.from,params.to,Utils.toString(params.count),params.paths,params.oracles);
    }
    async decimals(): Promise<BigNumber>{
        let result = await this.methods('decimals');
        return new BigNumber(result);
    }
    async getLatestPrice(params:{from:string,to:string,payload:string}): Promise<BigNumber>{
        let result = await this.methods('getLatestPrice',params.from,params.to,params.payload);
        return new BigNumber(result);
    }
    async getRatio(params:{from:string,to:string,param3:number|BigNumber,param4:number|BigNumber,payload:string}): Promise<{numerator:BigNumber,denominator:BigNumber}>{
        let result = await this.methods('getRatio',params.from,params.to,Utils.toString(params.param3),Utils.toString(params.param4),params.payload);
        return {
            numerator: new BigNumber(result.numerator),
            denominator: new BigNumber(result.denominator)
        };
    }
    async isSupported(params:{from:string,to:string}): Promise<boolean>{
        let result = await this.methods('isSupported',params.from,params.to);
        return result;
    }
    async oraclesStore(params:{param1:string,param2:string,param3:number|BigNumber}): Promise<string>{
        let result = await this.methods('oraclesStore',params.param1,params.param2,Utils.toString(params.param3));
        return result;
    }
    async pathsStore(params:{param1:string,param2:string,param3:number|BigNumber}): Promise<string>{
        let result = await this.methods('pathsStore',params.param1,params.param2,Utils.toString(params.param3));
        return result;
    }
    async priceFeedAddresses(param1:string): Promise<string>{
        let result = await this.methods('priceFeedAddresses',param1);
        return result;
    }
}