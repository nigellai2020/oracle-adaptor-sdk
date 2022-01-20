import {Wallet, Contract, TransactionReceipt, Utils, BigNumber} from "@ijstech/eth-wallet";
const Bin = require("../../bin/contracts/OSWAP_OracleConstantLimited.json");

export class OSWAP_OracleConstantLimited extends Contract{
    constructor(wallet: Wallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
    }
    deploy(params:{token0:string[],token1:string[],price0:number[]|BigNumber[],price1:number[]|BigNumber[],limit0:number[]|BigNumber[],limit1:number[]|BigNumber[]}): Promise<string>{
        return this._deploy(params.token0,params.token1,Utils.toString(params.price0),Utils.toString(params.price1),Utils.toString(params.limit0),Utils.toString(params.limit1));
    }
    async decimals(): Promise<BigNumber>{
        let result = await this.methods('decimals');
        return new BigNumber(result);
    }
    async getLatestPrice(params:{from:string,to:string,param3:string}): Promise<BigNumber>{
        let result = await this.methods('getLatestPrice',params.from,params.to,params.param3);
        return new BigNumber(result);
    }
    async getRatio(params:{from:string,to:string,fromAmount:number|BigNumber,toAmount:number|BigNumber,payload:string}): Promise<{numerator:BigNumber,denominator:BigNumber}>{
        let result = await this.methods('getRatio',params.from,params.to,Utils.toString(params.fromAmount),Utils.toString(params.toAmount),params.payload);
        return {
            numerator: new BigNumber(result.numerator),
            denominator: new BigNumber(result.denominator)
        };
    }
    async isSupported(params:{param1:string,param2:string}): Promise<boolean>{
        let result = await this.methods('isSupported',params.param1,params.param2);
        return result;
    }
    async limits(params:{param1:string,param2:string,param3:boolean}): Promise<BigNumber>{
        let result = await this.methods('limits',params.param1,params.param2,params.param3);
        return new BigNumber(result);
    }
    async prices(params:{param1:string,param2:string}): Promise<BigNumber>{
        let result = await this.methods('prices',params.param1,params.param2);
        return new BigNumber(result);
    }
}