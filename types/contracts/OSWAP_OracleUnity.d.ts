import { IWallet, Contract, BigNumber } from "@ijstech/eth-wallet";
export declare class OSWAP_OracleUnity extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(): Promise<string>;
    decimals(): Promise<BigNumber>;
    getLatestPrice(params: {
        param1: string;
        param2: string;
        param3: string;
    }): Promise<BigNumber>;
    getRatio(params: {
        param1: string;
        param2: string;
        param3: number | BigNumber;
        param4: number | BigNumber;
        param5: string;
    }): Promise<{
        numerator: BigNumber;
        denominator: BigNumber;
    }>;
    isSupported(params: {
        param1: string;
        param2: string;
    }): Promise<boolean>;
    private assign;
}
