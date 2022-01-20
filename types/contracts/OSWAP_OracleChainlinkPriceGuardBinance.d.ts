import { Wallet, Contract, BigNumber } from "@ijstech/eth-wallet";
export declare class OSWAP_OracleChainlinkPriceGuardBinance extends Contract {
    constructor(wallet: Wallet, address?: string);
    deploy(params: {
        factory: string;
        maxValue: number | BigNumber;
        deviation: number | BigNumber;
        useAmmPrice: boolean;
    }): Promise<string>;
    WETH(): Promise<string>;
    _WBNB(): Promise<string>;
    chainlinkDeicmals(): Promise<BigNumber>;
    decimals(): Promise<BigNumber>;
    decimals_1(param1: string): Promise<BigNumber>;
    factory(): Promise<string>;
    getLatestPrice(params: {
        from: string;
        to: string;
        payload: string;
    }): Promise<BigNumber>;
    getPriceInfo(params: {
        from: string;
        to: string;
        fromAmount: number | BigNumber;
        toAmount: number | BigNumber;
    }): Promise<{
        chainlinkPrice: BigNumber;
        ammPrice: BigNumber;
        usdAmount: BigNumber;
    }>;
    getRatio(params: {
        from: string;
        to: string;
        fromAmount: number | BigNumber;
        toAmount: number | BigNumber;
        payload: string;
    }): Promise<{
        numerator: BigNumber;
        denominator: BigNumber;
    }>;
    high(): Promise<BigNumber>;
    isSupported(params: {
        from: string;
        to: string;
    }): Promise<boolean>;
    low(): Promise<BigNumber>;
    maxValue(): Promise<BigNumber>;
    priceFeedAddresses(param1: string): Promise<string>;
    useAmmPrice(): Promise<boolean>;
    wethDecimals(): Promise<BigNumber>;
    wethPriceFeed(): Promise<string>;
}
