import { makeAutoObservable } from "mobx";
import _axios from "../../axios";
import { OneCompanyProps, ScreenerСompaniesProps } from "./interface";

class StockScreenerState {
  companies: ScreenerСompaniesProps[] = [];
  oneCompany: OneCompanyProps[] = [];
  constructor() {
    makeAutoObservable(this);
  }

  getOneCompany = async (value: string) => {
    try {
      const state = await _axios.get(
        `https://financialmodelingprep.com/api/v3/search?query=${value}&apikey=e2dc68a4357331f2d4385f9312fbbade`
      );
      this.oneCompany = [...state.data];
    } catch (error) {
      console.log(error);
    }
  };
  getListCompany = async () => {
    try {
      const state = await _axios.get(
        "https://financialmodelingprep.com/api/v3/stock-screener?marketCapMoreThan=1000000000&betaMoreThan=1&volumeMoreThan=10000&sector=Technology&exchange=NASDAQ&dividendMoreThan=0&limit=100&apikey=e2dc68a4357331f2d4385f9312fbbade"
      );
      this.companies = [...this.companies, ...state.data];
    } catch (error) {
      console.log(error);
    }
  };
}

export default new StockScreenerState();
