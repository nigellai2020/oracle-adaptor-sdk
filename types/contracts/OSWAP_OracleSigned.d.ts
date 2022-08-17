import { IWallet, Contract, TransactionReceipt, BigNumber } from "@ijstech/eth-wallet";
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
    param1: string;
    param2: string;
}
export interface IUpdateSequenceNumberParams {
    from: string;
    to: string;
    payload: string;
}
export declare class OSWAP_OracleSigned extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(signer: string): Promise<string>;
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
    sequenceNumber: {
        (): Promise<BigNumber>;
    };
    signer: {
        (): Promise<string>;
    };
    updateSequenceNumber: {
        (params: IUpdateSequenceNumberParams): Promise<TransactionReceipt>;
        call: (params: IUpdateSequenceNumberParams) => Promise<void>;
    };
    private assign;
}
