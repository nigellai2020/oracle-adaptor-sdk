import { IWallet, Contract, BigNumber } from "@ijstech/eth-wallet";
export interface IDeployParams {
    weth: string;
    tokens: string[];
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
    param3: number | BigNumber;
    param4: number | BigNumber;
    payload: string;
}
export interface IIsSupportedParams {
    from: string;
    to: string;
}
export declare class OSWAP_OracleChainlinkV1Generic extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(params: IDeployParams): Promise<string>;
    decimals: {
        (): Promise<BigNumber>;
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
