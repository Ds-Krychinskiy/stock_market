export interface ISector {
  label: string;
  key: string;
}

export interface IListCountry {
  label: string;
  key: string;
}
export interface IMarketCap {
  label: number;
  key: number;
}

export const listSector: ISector[] = [
  {
    label: "Consumer Cyclical",
    key: "Consumer Cyclical",
  },
  {
    label: "Energy",
    key: "Energy",
  },
  {
    label: "Technology",
    key: "Technology",
  },
  {
    label: "Industrials",
    key: "Industrials",
  },
  {
    label: "Financial Services",
    key: "Financial Services",
  },
  {
    label: "Basic Materials",
    key: "Basic Materials",
  },
  {
    label: "Communication Services",
    key: "Communication Services",
  },
  {
    label: "Consumer Defensive",
    key: "Consumer Defensive",
  },
  {
    label: "Healthcare",
    key: "Healthcare",
  },
  {
    label: "Real Estate",
    key: "Real Estate",
  },
  {
    label: "Utilities",
    key: "Utilities",
  },
  {
    label: "Industrial Goods",
    key: "Industrial Goods",
  },
  {
    label: "Financial",
    key: "Financial",
  },
  {
    label: "Services",
    key: "Services",
  },
  {
    label: "Conglomerates",
    key: "conglomerates",
  },
];

export const listCountry: IListCountry[] = [
  {
    label: "United States",
    key: "US",
  },
  {
    label: "Canada",
    key: "CA",
  },
  {
    label: "Russian Federation",
    key: "RU",
  },
  {
    label: "India",
    key: "IN",
  },
  {
    label: "Kazakhstan",
    key: "KZ",
  },
  {
    label: "Bermuda",
    key: "BM",
  },
  {
    label: "France",
    key: "FR",
  },
  {
    label: "Israel",
    key: "IL",
  },
  {
    label: "Mexico",
    key: "MX",
  },
  {
    label: "China",
    key: "CN",
  },
  {
    label: "Ireland",
    key: "IE",
  },
  {
    label: "Hong Kong",
    key: "HK",
  },
  {
    label: "Australia",
    key: "AU",
  },
  {
    label: "Sweden",
    key: "SE",
  },
  {
    label: "United Kingdom",
    key: "GB",
  },
  {
    label: "Netherlands",
    key: "NL",
  },
  {
    label: "Singapore",
    key: "SG",
  },
  {
    label: "Malaysia",
    key: "MY",
  },
  {
    label: "Cayman Islands",
    key: "KY",
  },
  {
    label: "Thailand",
    key: "TH",
  },
  {
    label: "Germany",
    key: "DE",
  },
  {
    label: "Luxembourg",
    key: "LU",
  },
  {
    label: "Saudi Arabia",
    key: "SA",
  },
  {
    label: "Cyprus",
    key: "CY",
  },
  {
    label: "Belgium",
    key: "BE",
  },
  {
    label: "Brazil",
    key: "BR",
  },
  {
    label: "China",
    key: "CH",
  },
  {
    label: "Finland",
    key: "FI",
  },
  {
    label: "Guernsey",
    key: "GG",
  },
  {
    label: "Norway",
    key: "NO",
  },
  {
    label: "Japan",
    key: "JP",
  },
  {
    label: "Denmark",
    key: "DK",
  },
  {
    label: "Chile",
    key: "CL",
  },
  {
    label: "South Africa",
    key: "ZA",
  },
  {
    label: "Argentina",
    key: "AR",
  },
  {
    label: "New Zealand",
    key: "NZ",
  },
  {
    label: "Austria",
    key: "AT",
  },
  {
    label: "Turkey",
    key: "TR",
  },
  {
    label: "Greece",
    key: "GR",
  },
  {
    label: "Spain",
    key: "ES",
  },
  {
    label: "Jersey",
    key: "JE",
  },
  {
    label: "Colombia",
    key: "CO",
  },
  {
    label: "Italy",
    key: "IT",
  },
  {
    label: "Indonesia",
    key: "ID",
  },
  {
    label: "Taiwan, Province of China",
    key: "TW",
  },
  {
    label: "Monaco",
    key: "MC",
  },
  {
    label: "Gabon",
    key: "GA",
  },
];

export const listExchange: IListCountry[] = [
  {
    label: "New York Stock Exchange",
    key: "nyse",
  },
  {
    label: "NASDAQ OMX Group",
    key: "nasdaq",
  },
  {
    label: "American Express",
    key: "amex",
  },
  {
    label: "Euronext",
    key: "euronext",
  },
  {
    label: "Toronto Stock Exchange",
    key: " tsx",
  },
  {
    label: "Etf",
    key: " etf",
  },
  {
    label: "Mutual Fund",
    key: " mutual_fund",
  },
];

export const listIndustry: ISector[] = [
  {
    label: "Autos",
    key: "Autos",
  },
  {
    label: "Banks",
    key: "Banks",
  },
  {
    label: "Banks Diversified",
    key: "Banks Diversified",
  },
  {
    label: "Banks Regional ",
    key: "Banks Regional ",
  },
  {
    label: "Beverages Alcoholic",
    key: "Beverages Alcoholic",
  },
  {
    label: "Beverages Brewers",
    key: "Beverages Brewers",
  },
  {
    label: "Beverages Non-Alcoholic",
    key: "Beverages Non-Alcoholic",
  },
];

export const listMarketCap: IMarketCap[] = [
  {
    label: 1000000000000,
    key: 1000000000000,
  },
  {
    label: 500000000000,
    key: 500000000000,
  },
  {
    label: 250000000000,
    key: 250000000000,
  },
  {
    label: 100000000000,
    key: 100000000000,
  },
  {
    label: 50000000000,
    key: 50000000000,
  },
  {
    label: 25000000000,
    key: 25000000000,
  },
  {
    label: 10000000000,
    key: 10000000000,
  },
  {
    label: 1000000000,
    key: 1000000000,
  },
  {
    label: 500000000,
    key: 500000000,
  },
  {
    label: 250000000,
    key: 250000000,
  },
  {
    label: 100000000,
    key: 100000000,
  },
  {
    label: 75000000,
    key: 75000000,
  },
  {
    label: 50000000,
    key: 50000000,
  },
  {
    label: 25000000,
    key: 25000000,
  },
  {
    label: 1000000,
    key: 1000000,
  },
  {
    label: 750000,
    key: 750000,
  },
  {
    label: 500000,
    key: 500000,
  },
  {
    label: 250000,
    key: 250000,
  },
  {
    label: 100000,
    key: 100000,
  },
  {
    label: 75000,
    key: 75000,
  },
];

export const listDiv: IMarketCap[] = [
  {
    label: 0,
    key: 0,
  },
  {
    label: 1,
    key: 1,
  },
  {
    label: 2,
    key: 2,
  },
  {
    label: 3,
    key: 3,
  },
  {
    label: 4,
    key: 4,
  },
  {
    label: 5,
    key: 5,
  },
  {
    label: 6,
    key: 6,
  },
  {
    label: 7,
    key: 7,
  },
  {
    label: 8,
    key: 8,
  },
  {
    label: 9,
    key: 9,
  },
  {
    label: 10,
    key: 10,
  },
];
export const listTradingVolume = [
  {
    label: 10000,
    key: 10000,
  },
  {
    label: 100000,
    key: 100000,
  },
  {
    label: 1000000,
    key: 1000000,
  },
  {
    label: 5000000,
    key: 5000000,
  },
  {
    label: 10000000,
    key: 10000000,
  },
  {
    label: 25000000,
    key: 25000000,
  },
  {
    label: 50000000,
    key: 50000000,
  },
  {
    label: 75000000,
    key: 75000000,
  },
  {
    label: 100000000,
    key: 100000000,
  },
];
