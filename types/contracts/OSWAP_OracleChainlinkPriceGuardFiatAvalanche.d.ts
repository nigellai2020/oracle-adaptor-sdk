import { IWallet, Contract, BigNumber } from "@ijstech/eth-wallet";
export interface IDeployParams {
    factory: string;
    maxValue: number | BigNumber;
    deviation: number | BigNumber;
    returnAmmPrice: boolean;
}
export interface IGetLatestPriceParams {
    from: string;
    to: string;
    payload: string;
}
export interface IGetPriceInfoParams {
    from: string;
    to: string;
    fromAmount: number | BigNumber;
    toAmount: number | BigNumber;
}
export interface IGetRatioParams {
    from: string;
    to: string;
    fromAmount: number | BigNumber;
    toAmount: number | BigNumber;
    payload: string;
}
export interface IIsSupportedParams {
    from: string;
    to: string;
}
export declare class OSWAP_OracleChainlinkPriceGuardFiatAvalanche extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(params: IDeployParams): Promise<string>;
    WETH: {
        (): Promise<string>;
    };
    chainlinkDeicmals: {
        (): Promise<BigNumber>;
    };
    decimals: {
        (): Promise<BigNumber>;
    };
    decimals_1: {
        (param1: string): Promise<BigNumber>;
    };
    factory: {
        (): Promise<string>;
    };
    getLatestPrice: {
        (params: IGetLatestPriceParams): Promise<BigNumber>;
    };
    getPriceInfo: {
        (params: IGetPriceInfoParams): Promise<{
            chainlinkPrice: BigNumber;
            ammPrice: BigNumber;
            usdAmount: BigNumber;
        }>;
    };
    getRatio: {
        (params: IGetRatioParams): Promise<{
            numerator: BigNumber;
            denominator: BigNumber;
        }>;
    };
    high: {
        (): Promise<BigNumber>;
    };
    isSupported: {
        (params: IIsSupportedParams): Promise<boolean>;
    };
    low: {
        (): Promise<BigNumber>;
    };
    maxValue: {
        (): Promise<BigNumber>;
    };
    priceFeedAddresses: {
        (param1: string): Promise<string>;
    };
    returnAmmPrice: {
        (): Promise<boolean>;
    };
    wethDecimals: {
        (): Promise<BigNumber>;
    };
    wethPriceFeed: {
        (): Promise<string>;
    };
    private assign;
}
