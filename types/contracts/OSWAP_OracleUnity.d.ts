import { IWallet, Contract, BigNumber } from "@ijstech/eth-wallet";
export interface IGetLatestPriceParams {
    param1: string;
    param2: string;
    param3: string;
}
export interface IGetRatioParams {
    param1: string;
    param2: string;
    param3: number | BigNumber;
    param4: number | BigNumber;
    param5: string;
}
export interface IIsSupportedParams {
    param1: string;
    param2: string;
}
export declare class OSWAP_OracleUnity extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(): Promise<string>;
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
    private assign;
}
