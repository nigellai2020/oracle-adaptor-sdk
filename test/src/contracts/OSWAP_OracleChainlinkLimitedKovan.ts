import {Wallet, Contract, TransactionReceipt, Utils, BigNumber} from "@ijstech/eth-wallet";
const Bin = require("../../bin/OSWAP_OracleChainlinkLimitedKovan.json");

export class OSWAP_OracleChainlinkLimitedKovan extends Contract{
    constructor(wallet: Wallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
    }
    deploy(params:{factory:string,dai:string,usdc:string,usdt:string}): Promise<string>{
        return this._deploy(params.factory,params.dai,params.usdc,params.usdt);
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
    async factory(): Promise<string>{
        let result = await this.methods('factory');
        return result;
    }
    async getLatestPrice(params:{from:string,to:string,payload:string}): Promise<BigNumber>{
        let result = await this.methods('getLatestPrice',params.from,params.to,params.payload);
        return new BigNumber(result);
    }
    async getRatio(params:{from:string,to:string,fromAmount:number|BigNumber,toAmount:number|BigNumber,payload:string}): Promise<{numerator:BigNumber,denominator:BigNumber}>{
        let result = await this.methods('getRatio',params.from,params.to,Utils.toString(params.fromAmount),Utils.toString(params.toAmount),params.payload);
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