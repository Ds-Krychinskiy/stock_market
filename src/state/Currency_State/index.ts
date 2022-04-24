import { makeAutoObservable } from "mobx";

class CurrencyState {
  currency = [];
  constructor() {
    makeAutoObservable(this);
  }
}

export default new CurrencyState();
