import { IWallet, Contract, BigNumber } from "@ijstech/eth-wallet";
export interface IDeployParams {
    token0: string[];
    token1: string[];
    price0: (number | BigNumber)[];
    price1: (number | BigNumber)[];
}
export interface IGetLatestPriceParams {
    from: string;
    to: string;
    param3: string;
}
export interface IGetRatioParams {
    from: string;
    to: string;
    param3: number | BigNumber;
    param4: number | BigNumber;
    payload: string;
}
export interface IIsSupportedParams {
    param1: string;
    param2: string;
}
export interface IPricesParams {
    param1: string;
    param2: string;
}
export declare class OSWAP_OracleConstant extends Contract {
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
    prices: {
        (params: IPricesParams): Promise<BigNumber>;
    };
    private assign;
}
