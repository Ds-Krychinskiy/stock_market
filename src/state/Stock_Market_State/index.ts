import axios from "axios";
import { makeAutoObservable } from "mobx";
import { StockMultipliersProps } from "../../interface";

class StockState {
  multipliers: StockMultipliersProps[] = [];
  constructor() {
    makeAutoObservable(this);
  }
  getMultipliers() {
    axios
      .get(
        "https://financialmodelingprep.com/api/v3/ratios-ttm/MSFT?apikey=e2dc68a4357331f2d4385f9312fbbade"
      )
      .then(
        (response) =>
          (this.multipliers = [...this.multipliers, ...response.data])
      )
      .catch((error) => console.log(error));
  }
}

export default new StockState();
