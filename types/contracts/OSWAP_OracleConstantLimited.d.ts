import { IWallet, Contract, BigNumber } from "@ijstech/eth-wallet";
export interface IDeployParams {
    token0: string[];
    token1: string[];
    price0: (number | BigNumber)[];
    price1: (number | BigNumber)[];
    limit0: (number | BigNumber)[];
    limit1: (number | BigNumber)[];
}
export interface IGetLatestPriceParams {
    from: string;
    to: string;
    param3: string;
}
export interface IGetRatioParams {
    from: string;
    to: string;
    fromAmount: number | BigNumber;
    toAmount: number | BigNumber;
    payload: string;
}
export interface IIsSupportedParams {
    param1: string;
    param2: string;
}
export interface ILimitsParams {
    param1: string;
    param2: string;
    param3: boolean;
}
export interface IPricesParams {
    param1: string;
    param2: string;
}
export declare class OSWAP_OracleConstantLimited extends Contract {
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
    limits: {
        (params: ILimitsParams): Promise<BigNumber>;
    };
    prices: {
        (params: IPricesParams): Promise<BigNumber>;
    };
    private assign;
}
