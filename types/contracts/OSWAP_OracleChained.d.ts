import { IWallet, Contract, BigNumber } from "@ijstech/eth-wallet";
export interface IDeployParams {
    from: string[];
    to: string[];
    count: (number | BigNumber)[];
    paths: string[];
    oracles: string[];
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
export interface IOraclesStoreParams {
    param1: string;
    param2: string;
    param3: number | BigNumber;
}
export interface IPathsStoreParams {
    param1: string;
    param2: string;
    param3: number | BigNumber;
}
export declare class OSWAP_OracleChained extends Contract {
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
    oraclesStore: {
        (params: IOraclesStoreParams): Promise<string>;
    };
    pathsStore: {
        (params: IPathsStoreParams): Promise<string>;
    };
    priceFeedAddresses: {
        (param1: string): Promise<string>;
    };
    private assign;
}
