import { makeAutoObservable } from "mobx";

class CryptocurrencyState {
  cryptocurrency = [];
  constructor() {
    makeAutoObservable(this);
  }
}

export default new CryptocurrencyState();
