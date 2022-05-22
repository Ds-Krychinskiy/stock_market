import { makeAutoObservable } from "mobx";
import _axios from "../../axios";
import {
  CompanyNewsProps,
  FinancialMultipliersProps,
  CompanyPriceProps,
  KeyExecutivesProps,
  SecFilingsProps,
  PriceAtTheMomentProps,
  CompanyPriceForMondthProps,
} from "./interface";

class StockState {
  valueInput: string = "";
  multipliers: FinancialMultipliersProps[] = [];
  news: CompanyNewsProps[] = [];
  executive: KeyExecutivesProps[] = [];
  filings: SecFilingsProps[] = [];
  price: CompanyPriceProps[] | CompanyPriceForMondthProps[] = [];
  price_at_the_moment: PriceAtTheMomentProps[] = [];
  constructor() {
    makeAutoObservable(this);
  }

  setValueInput = (value: string) => {
    this.valueInput = value;
  };

  getMultipliers = async () => {
    try {
      const state = await _axios.get(`ratios-ttm/${this.valueInput}?`);
      this.multipliers = [...state.data];
    } catch (error) {
      console.log(error);
    }
  };

  getCompanyNews = async () => {
    try {
      const state = await _axios.get(
        `stock_news?tickers=$${this.valueInput}&limit=50&`
      );
      this.news = [...state.data];
    } catch (error) {
      console.log(error);
    }
  };
  getSecFilings = async () => {
    try {
      const state = await _axios.get(
        `sec_filings/${this.valueInput}?limit=100`
      );
      this.filings = [...this.filings, ...state.data];
    } catch (error) {
      console.log(error);
    }
  };

  getPriceCompanyInRealTime = async () => {
    try {
      const state = await _axios.get(`quote-short/${this.valueInput}`);
      this.price_at_the_moment = [...state.data];
    } catch (error) {
      console.log(error);
    }
  };
  getPriceForChart = async (time: string, count: number) => {
    try {
      const state = await _axios.get(
        `historical-chart/${time}/${this.valueInput}`
      );
      this.price = [
        ...state.data
          .filter((el: CompanyPriceProps) => el.date && el.open && el.volume)
          .slice(0, count)
          .reverse(),
      ];
    } catch (error) {
      console.log(error);
    }
  };
  getPriceForChartForTheMonth = async (count: number) => {
    try {
      const state = await _axios.get(
        `historical-price-full/${this.valueInput}`
      );
      this.price = [...state.data.historical.slice(0, count).reverse()];
    } catch (error) {
      console.log(error);
    }
  };
  getKeyExecutives = async () => {
    try {
      const state = await _axios.get(`key-executives/${this.valueInput}?`);
      this.executive = [...this.executive, ...state.data];
    } catch (error) {
      console.log(error);
    }
  };
}

export default new StockState();
