import {IWallet, Contract, Transaction, TransactionReceipt, Utils, BigNumber, Event} from "@ijstech/eth-wallet";
import Bin from "./OSWAP_OracleUnity.json";

export class OSWAP_OracleUnity extends Contract{
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(): Promise<string>{
        return this.__deploy();
    }
    async decimals(): Promise<BigNumber>{
        let result = await this.call('decimals');
        return new BigNumber(result);
    }
    async getLatestPrice(params:{param1:string,param2:string,param3:string}): Promise<BigNumber>{
        let result = await this.call('getLatestPrice',[params.param1,params.param2,Utils.stringToBytes(params.param3)]);
        return new BigNumber(result);
    }
    async getRatio(params:{param1:string,param2:string,param3:number|BigNumber,param4:number|BigNumber,param5:string}): Promise<{numerator:BigNumber,denominator:BigNumber}>{
        let result = await this.call('getRatio',[params.param1,params.param2,Utils.toString(params.param3),Utils.toString(params.param4),Utils.stringToBytes(params.param5)]);
        return {
            numerator: new BigNumber(result.numerator),
            denominator: new BigNumber(result.denominator)
        };
    }
    async isSupported(params:{param1:string,param2:string}): Promise<boolean>{
        let result = await this.call('isSupported',[params.param1,params.param2]);
        return result;
    }
    private assign(){
    }
}