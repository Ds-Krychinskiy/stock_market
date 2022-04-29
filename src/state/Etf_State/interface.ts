export interface EtfHistoricalPriceProps {
  date: string;
  open: number;
  low: number;
  high: number;
  close: number;
  volume: number;
}

export interface EtfListProps {
  symbol: string;
  name: string;
  price: number;
  exchange: string;
  exchangeShortName: string;
  type: string;
}

export interface EtfSectorWeightingsProps {
  sector: string;
  weightPercentage: string;
}
