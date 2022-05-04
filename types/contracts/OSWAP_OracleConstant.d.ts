import { IWallet, Contract, BigNumber } from "@ijstech/eth-wallet";
export declare class OSWAP_OracleConstant extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(params: {
        token0: string[];
        token1: string[];
        price0: (number | BigNumber)[];
        price1: (number | BigNumber)[];
    }): Promise<string>;
    decimals(): Promise<BigNumber>;
    getLatestPrice(params: {
        from: string;
        to: string;
        param3: string;
    }): Promise<BigNumber>;
    getRatio(params: {
        from: string;
        to: string;
        param3: number | BigNumber;
        param4: number | BigNumber;
        payload: string;
    }): Promise<{
        numerator: BigNumber;
        denominator: BigNumber;
    }>;
    isSupported(params: {
        param1: string;
        param2: string;
    }): Promise<boolean>;
    prices(params: {
        param1: string;
        param2: string;
    }): Promise<BigNumber>;
    private assign;
}
