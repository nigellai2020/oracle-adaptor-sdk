import {Wallet, Contract, TransactionReceipt, Utils, BigNumber} from "@ijstech/eth-wallet";
const Bin = require("../../bin/contracts/OSWAP_OracleConstant.json");

export class OSWAP_OracleConstant extends Contract{
    constructor(wallet: Wallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
    }
    deploy(params:{token0:string[],token1:string[],price0:number[]|BigNumber[],price1:number[]|BigNumber[]}): Promise<string>{
        return this._deploy(params.token0,params.token1,Utils.toString(params.price0),Utils.toString(params.price1));
    }
    async decimals(): Promise<BigNumber>{
        let result = await this.methods('decimals');
        return new BigNumber(result);
    }
    async getLatestPrice(params:{from:string,to:string,param3:string}): Promise<BigNumber>{
        let result = await this.methods('getLatestPrice',params.from,params.to,params.param3);
        return new BigNumber(result);
    }
    async getRatio(params:{from:string,to:string,param3:number|BigNumber,param4:number|BigNumber,payload:string}): Promise<{numerator:BigNumber,denominator:BigNumber}>{
        let result = await this.methods('getRatio',params.from,params.to,Utils.toString(params.param3),Utils.toString(params.param4),params.payload);
        return {
            numerator: new BigNumber(result.numerator),
            denominator: new BigNumber(result.denominator)
        };
    }
    async isSupported(params:{param1:string,param2:string}): Promise<boolean>{
        let result = await this.methods('isSupported',params.param1,params.param2);
        return result;
    }
    async prices(params:{param1:string,param2:string}): Promise<BigNumber>{
        let result = await this.methods('prices',params.param1,params.param2);
        return new BigNumber(result);
    }
}