import { makeAutoObservable } from "mobx";
import _axios from "../../axios";
import { CurrencyProps } from "./interface";

class CurrencyState {
  currency: CurrencyProps[] = [];
  constructor() {
    makeAutoObservable(this);
  }
  getPriceCurrencyInOneMin = async (time: string, count: number) => {
    try {
      const state = await _axios.get(`historical-chart/${time}/EURUSD?`);
      this.currency = [
        ...state.data.filter(
          (el: CurrencyProps) => el.date && el.open && el.volume
        ),
      ]
        .reverse()
        .slice(0, count);
    } catch (error) {
      console.log(error);
    }
  };
}
export default new CurrencyState();
