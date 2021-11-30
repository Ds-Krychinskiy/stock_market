export interface ISector {
  label: string;
  key: number;
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
    key: 1,
  },
  {
    label: "Energy",
    key: 2,
  },
  {
    label: "Technology",
    key: 3,
  },
  {
    label: "Industrials",
    key: 4,
  },
  {
    label: "Financial Services",
    key: 5,
  },
  {
    label: "Basic Materials",
    key: 6,
  },
  {
    label: "Communication Services",
    key: 7,
  },
  {
    label: "Consumer Defensive",
    key: 8,
  },
  {
    label: "Healthcare",
    key: 9,
  },
  {
    label: "Real Estate",
    key: 10,
  },
  {
    label: "Utilities",
    key: 11,
  },
  {
    label: "Industrial Goods",
    key: 12,
  },
  {
    label: "Financial",
    key: 13,
  },
  {
    label: "Services",
    key: 14,
  },
  {
    label: "Conglomerates",
    key: 15,
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
    key: 1,
  },
  {
    label: "Banks ",
    key: 2,
  },
  {
    label: "Banks Diversified",
    key: 3,
  },
  {
    label: "Banks Regional ",
    key: 4,
  },
  {
    label: "Beverages Alcoholic",
    key: 5,
  },
  {
    label: "Beverages Brewers",
    key: 6,
  },
  {
    label: "Beverages Non-Alcoholic",
    key: 7,
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
