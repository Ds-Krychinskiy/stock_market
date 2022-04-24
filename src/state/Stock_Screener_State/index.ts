import { makeAutoObservable } from "mobx";
import { ScreenerСompaniesProps, OneCompanyProps } from "../../interface";
class StockScreenerState {
  companies: ScreenerСompaniesProps[] = [];
  oneCompany: OneCompanyProps[] = [];
  constructor() {
    makeAutoObservable(this);
  }

  getListOfCompanies = (state: ScreenerСompaniesProps[]) => {
    this.companies = [...this.companies, ...state];
  };
  getOneOfCompany = (state: OneCompanyProps[]) => {
    this.oneCompany = [...this.oneCompany, ...state];
  };
}

export default new StockScreenerState();
