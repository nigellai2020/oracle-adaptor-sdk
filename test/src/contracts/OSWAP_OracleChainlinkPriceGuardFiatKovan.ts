import {Wallet, Contract, TransactionReceipt, Utils, BigNumber, Event} from "@ijstech/eth-wallet";
const Bin = require("../../bin/OSWAP_OracleChainlinkPriceGuardFiatKovan.json");

export class OSWAP_OracleChainlinkPriceGuardFiatKovan extends Contract{
    constructor(wallet: Wallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
    }
    deploy(params:{eth:string,dai:string,usdc:string,usdt:string,factory:string,maxValue:number|BigNumber,deviation:number|BigNumber,returnAmmPrice:boolean}): Promise<string>{
        return this._deploy(params.eth,params.dai,params.usdc,params.usdt,params.factory,Utils.toString(params.maxValue),Utils.toString(params.deviation),params.returnAmmPrice);
    }
    async WETH(): Promise<string>{
        let result = await this.methods('WETH');
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
    async decimals_1(param1:string): Promise<BigNumber>{
        let result = await this.methods('decimals',param1);
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
    async getPriceInfo(params:{from:string,to:string,fromAmount:number|BigNumber,toAmount:number|BigNumber}): Promise<{chainlinkPrice:BigNumber,ammPrice:BigNumber,usdAmount:BigNumber}>{
        let result = await this.methods('getPriceInfo',params.from,params.to,Utils.toString(params.fromAmount),Utils.toString(params.toAmount));
        return {
            chainlinkPrice: new BigNumber(result.chainlinkPrice),
            ammPrice: new BigNumber(result.ammPrice),
            usdAmount: new BigNumber(result.usdAmount)
        };
    }
    async getRatio(params:{from:string,to:string,fromAmount:number|BigNumber,toAmount:number|BigNumber,payload:string}): Promise<{numerator:BigNumber,denominator:BigNumber}>{
        let result = await this.methods('getRatio',params.from,params.to,Utils.toString(params.fromAmount),Utils.toString(params.toAmount),params.payload);
        return {
            numerator: new BigNumber(result.numerator),
            denominator: new BigNumber(result.denominator)
        };
    }
    async high(): Promise<BigNumber>{
        let result = await this.methods('high');
        return new BigNumber(result);
    }
    async isSupported(params:{from:string,to:string}): Promise<boolean>{
        let result = await this.methods('isSupported',params.from,params.to);
        return result;
    }
    async low(): Promise<BigNumber>{
        let result = await this.methods('low');
        return new BigNumber(result);
    }
    async maxValue(): Promise<BigNumber>{
        let result = await this.methods('maxValue');
        return new BigNumber(result);
    }
    async priceFeedAddresses(param1:string): Promise<string>{
        let result = await this.methods('priceFeedAddresses',param1);
        return result;
    }
    async returnAmmPrice(): Promise<boolean>{
        let result = await this.methods('returnAmmPrice');
        return result;
    }
    async wethDecimals(): Promise<BigNumber>{
        let result = await this.methods('wethDecimals');
        return new BigNumber(result);
    }
    async wethPriceFeed(): Promise<string>{
        let result = await this.methods('wethPriceFeed');
        return result;
    }
}