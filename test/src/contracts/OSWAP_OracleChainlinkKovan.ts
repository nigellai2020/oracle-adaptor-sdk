import {Wallet, Contract, TransactionReceipt, Utils, BigNumber, Event} from "@ijstech/eth-wallet";
const Bin = require("../../bin/OSWAP_OracleChainlinkKovan.json");

export class OSWAP_OracleChainlinkKovan extends Contract{
    constructor(wallet: Wallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
    }
    deploy(params:{dai:string,usdc:string,usdt:string}): Promise<string>{
        return this._deploy(params.dai,params.usdc,params.usdt);
    }
    async WETH(): Promise<string>{
        let result = await this.methods('WETH');
        return result;
    }
    async _WETH(): Promise<string>{
        let result = await this.methods('_WETH');
        return result;
    }
    async chainlinkDeicmals(): Promise<BigNumber>{
        let result = await this.methods('chainlinkDeicmals');
        return new BigNumber(result);
    }
    async decimals(): Promise<BigNumber>{
        let result = await this.methods('decimals');
        return new BigNumber(result);
    }
    async getLatestPrice(params:{from:string,to:string,payload:string}): Promise<BigNumber>{
        let result = await this.methods('getLatestPrice',params.from,params.to,params.payload);
        return new BigNumber(result);
    }
    async getRatio(params:{from:string,to:string,param3:number|BigNumber,param4:number|BigNumber,param5:string}): Promise<{numerator:BigNumber,denominator:BigNumber}>{
        let result = await this.methods('getRatio',params.from,params.to,Utils.toString(params.param3),Utils.toString(params.param4),params.param5);
        return {
            numerator: new BigNumber(result.numerator),
            denominator: new BigNumber(result.denominator)
        };
    }
    async isSupported(params:{from:string,to:string}): Promise<boolean>{
        let result = await this.methods('isSupported',params.from,params.to);
        return result;
    }
    async priceFeedAddresses(param1:string): Promise<string>{
        let result = await this.methods('priceFeedAddresses',param1);
        return result;
    }
}