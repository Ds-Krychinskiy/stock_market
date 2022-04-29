import { makeAutoObservable } from "mobx";
import _axios from "../../axios";
import {
  CompanyNewsProps,
  FinancialRationsProps,
  CompanyFinancialRatiosProps,
  CompanyPriceProps,
  KeyExecutivesProps,
  SecFilingsProps,
  PriceAtTheMomentProps,
} from "./interface";

class StockState {
  multipliers: FinancialRationsProps[] = [];
  news: CompanyNewsProps[] = [];
  executive: KeyExecutivesProps[] = [];
  filings: SecFilingsProps[] = [];
  financial_rations: CompanyFinancialRatiosProps[] = [];
  price: CompanyPriceProps[] = [];
  price_at_the_moment: PriceAtTheMomentProps[] = [];
  constructor() {
    makeAutoObservable(this);
  }
  getMultipliers = async () => {
    try {
      const state = await _axios.get("ratios-ttm/MSFT?");
      this.multipliers = [...this.multipliers, ...state.data];
    } catch (error) {
      console.log(error);
    }
  };
  getPriceCompanyInRealTime = async () => {
    try {
      const state = await _axios.get("quote-short/AAPL?");
      this.price_at_the_moment = [...this.price_at_the_moment, ...state.data];
    } catch (error) {
      console.log(error);
    }
  };
  getCompanyNews = async () => {
    try{
      const state = await _axios.get("stock_news?tickers=$AAPL&limit=50&");
      this.news = [...this.news, ...state.data];
    }catch(error){
      console.log(error)
    }
  }
  getSecFilings = async () => {
    try{
      const state = await _axios.get("`sec_filings/AAPL?limit=100`");
      this.filings = [...this.filings, ...state.data];
    }catch(error){
      console.log(error)
    }
  }
}

export default new StockState();
