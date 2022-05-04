import { IWallet, Contract, BigNumber } from "@ijstech/eth-wallet";
export declare class OSWAP_OracleChainlinkGeneric extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(params: {
        weth: string;
        tokens: string[];
        pricefeeds: string[];
    }): Promise<string>;
    WETH(): Promise<string>;
    chainlinkDeicmals(): Promise<BigNumber>;
    decimals(): Promise<BigNumber>;
    getLatestPrice(params: {
        from: string;
        to: string;
        payload: string;
    }): Promise<BigNumber>;
    getRatio(params: {
        from: string;
        to: string;
        param3: number | BigNumber;
        param4: number | BigNumber;
        param5: string;
    }): Promise<{
        numerator: BigNumber;
        denominator: BigNumber;
    }>;
    isSupported(params: {
        from: string;
        to: string;
    }): Promise<boolean>;
    priceFeedAddresses(param1: string): Promise<string>;
    private assign;
}
