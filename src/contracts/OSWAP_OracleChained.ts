import {IWallet, Contract, Transaction, TransactionReceipt, Utils, BigNumber, Event} from "@ijstech/eth-wallet";
import Bin from "./OSWAP_OracleChained.json";

export class OSWAP_OracleChained extends Contract{
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(params:{from:string[],to:string[],count:(number|BigNumber)[],paths:string[],oracles:string[]}): Promise<string>{
        return this.__deploy([params.from,params.to,Utils.toString(params.count),params.paths,params.oracles]);
    }
    async decimals(): Promise<BigNumber>{
        let result = await this.call('decimals');
        return new BigNumber(result);
    }
    async getLatestPrice(params:{from:string,to:string,payload:string}): Promise<BigNumber>{
        let result = await this.call('getLatestPrice',[params.from,params.to,Utils.stringToBytes(params.payload)]);
        return new BigNumber(result);
    }
    async getRatio(params:{from:string,to:string,param3:number|BigNumber,param4:number|BigNumber,payload:string}): Promise<{numerator:BigNumber,denominator:BigNumber}>{
        let result = await this.call('getRatio',[params.from,params.to,Utils.toString(params.param3),Utils.toString(params.param4),Utils.stringToBytes(params.payload)]);
        return {
            numerator: new BigNumber(result.numerator),
            denominator: new BigNumber(result.denominator)
        };
    }
    async isSupported(params:{from:string,to:string}): Promise<boolean>{
        let result = await this.call('isSupported',[params.from,params.to]);
        return result;
    }
    async oraclesStore(params:{param1:string,param2:string,param3:number|BigNumber}): Promise<string>{
        let result = await this.call('oraclesStore',[params.param1,params.param2,Utils.toString(params.param3)]);
        return result;
    }
    async pathsStore(params:{param1:string,param2:string,param3:number|BigNumber}): Promise<string>{
        let result = await this.call('pathsStore',[params.param1,params.param2,Utils.toString(params.param3)]);
        return result;
    }
    async priceFeedAddresses(param1:string): Promise<string>{
        let result = await this.call('priceFeedAddresses',[param1]);
        return result;
    }
    private assign(){
    }
}