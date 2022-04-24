import { makeAutoObservable } from "mobx";

class EtfState {
  etf = [];
  constructor() {
    makeAutoObservable(this);
  }
}

export default new EtfState();
