import { IWallet, Contract, BigNumber } from "@ijstech/eth-wallet";
export interface IDeployParams {
    factory: string;
    weth: string;
    token: string[];
    pricefeeds: string[];
}
export interface IGetLatestPriceParams {
    from: string;
    to: string;
    payload: string;
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
export declare class OSWAP_OracleChainlinkLimitedGeneric extends Contract {
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
    factory: {
        (): Promise<string>;
    };
    getLatestPrice: {
        (params: IGetLatestPriceParams): Promise<BigNumber>;
    };
    getRatio: {
        (params: IGetRatioParams): Promise<{
            numerator: BigNumber;
            denominator: BigNumber;
        }>;
    };
    isSupported: {
        (params: IIsSupportedParams): Promise<boolean>;
    };
    priceFeedAddresses: {
        (param1: string): Promise<string>;
    };
    private assign;
}
