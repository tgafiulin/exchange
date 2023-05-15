import { CurrencyType } from "../types/types";
import { API_KEY } from "./constants/constants";

export const getMinAmounts = async (currFirst: CurrencyType, currSecond: CurrencyType) => {
    const data = await (
        await fetch(
        `https://api.changenow.io/v1/min-amount/${currFirst.ticker}_${currSecond.ticker}?api_key=${API_KEY}`
        )
    ).json();

    return data;
};

export const getExchangeAmount = async (amountFirst: string, currFirst: CurrencyType, currSecond: CurrencyType) => {
    const data = await (
      await fetch(
        `https://api.changenow.io/v1/exchange-amount/${amountFirst}/${currFirst.ticker}_${currSecond.ticker}?api_key=${API_KEY}`
      )
    ).json();

    return data;
}

export const getCurrencies = async () => {
  const data = await (
    await fetch('https://api.changenow.io/v1/currencies?active=true&fixedRate=true')
  ).json();

return data;
};