export interface ScreenerСompaniesProps {
  symbol: string;
  companyName: string;
  marketCap: number;
  sector: string;
  industry: string;
  beta: number;
  price: number;
  lastAnnualDividend: number;
  volume: number;
  exchange: string;
  exchangeShortName: string;
  country: string;
  isEtf: false;
  isActivelyTrading: true;
}

export interface OneCompanyProps {
  symbol: string;
  name: string;
  currency: string;
  stockExchange: string;
  exchangeShortName: string;
}

export interface StockMultipliersProps {
  peRatioTTM: number;
  pegRatioTTM: number;
  payoutRatioTTM: number;
  currentRatioTTM: number;
  operatingCycleTTM: number;
  GrossProfitMarginTTM: number;
  OperatingProfitMarginTTM: number;
  pretaxProfitMarginTTM: number;
  netProfitMarginTTM: number;
  returnOnAssetsTTM: number;
  returnOnEquityTTM: number;
  returnOnCapitalEmployedTTM: number;
  dividendYielTTM: number;
  cashRatioTTM: number;
  daysOfSalesOutstandingTTM: number;
  daysOfPayablesOutstandingTTM: number;
  cashConversionCycleTTM: number;
  grossProfitMarginTTM: number;
  operatingProfitMarginTTM: number;
  effectiveTaxRateTTM: number;
  netIncomePerEBTTTM: number;
  ebtPerEbitTTM: number;
  debtRatioTTM: number;
  longTermDebtToCapitalizationTTM: number;
  totalDebtToCapitalizationTTM: number;
  interestCoverageTTM: number;
  cashFlowToDebtRatioTTM: number;
  companyEquityMultiplierTTM: number;
  receivablesTurnoverTTM: number;
  inventoryTurnoverTTM: number;
  fixedAssetTurnoverTTM: number;
  assetTurnoverTTM: number;
  operatingCashFlowPerShareTTM: number;
  freeCashFlowPerShareTTM: number;
  cashPerShareTTM: number;
  operatingCashFlowSalesRatioTTM: number;
  freeCashFlowOperatingCashFlowRatioTTM: number;
  cashFlowCoverageRatiosTTM: number;
  priceBookValueRatioTTM: number;
  priceToSalesRatioTTM: number;
  priceToFreeCashFlowsRatioTTM: number;
  dividendYieldTTM: number;
  enterpriseValueMultipleTTM: number;
  priceFairValueTTM: number;
  dividendPerShareTTM: number;
}

export interface StockFinancialRatiosProps {
  date: string;
  symbol: string;
  reportedCurrency: string;
  acceptedDate: string;
  period: string;
  revenue: number;
  costOfRevenue: number;
  grossProfit: number;
  grossProfitRatio: number;
  researchAndDevelopmentExpenses: number;
  generalAndAdministrativeExpenses: number;
  sellingAndMarketingExpenses: number;
  sellingGeneralAndAdministrativeExpenses: number;
  otherExpenses: number;
  operatingExpenses: number;
  costAndExpenses: number;
  interestExpense: number;
  depreciationAndAmortization: number;
  ebitda: number;
  ebitdaratio: number;
  operatingIncome: number;
  operatingIncomeRatio: number;
  totalOtherIncomeExpensesNet: number;
  incomeBeforeTax: number;
  incomeBeforeTaxRatio: number;
  incomeTaxExpense: number;
  netIncome: number;
  netIncomeRatio: number;
  eps: number;
  finalLink: string;
}

export interface StockProps {
  symbol: string;
  name: string;
  price: number;
  changesPercentage: number;
  change: number;
  dayLow: number;
  dayHigh: number;
  yearHigh: number;
  yearLow: number;
  marketCap: number;
  priceAvg50: number;
  priceAvg200: number;
  volume: number;
  avgVolume: number;
  exchange: string;
  open: number;
  previousClose: number;
  eps: number;
  pe: number;
  earningsAnnouncement: string;
  sharesOutstanding: number;
  timestamp: number;
}

export interface StockKeyExecutivesProps {
  symbol: string;
  yearBorn: number;
  pay: number;
  currencyPay: string;
  name: string;
  title: string;
  gender: string;
  titleSince?: string;
}

export interface StockSecFilingsProps {
  symbol: string;
  acceptedDate: string;
  type: string;
  finalLink: string;
}

export interface StockCompanyPriceProps {
  symbol: string;
  companyName: string;
  price: number;
  sector: string;
  state: string;
  city: string;
  ceo: string;
  description: string;
  website: string;
  exchange: string;
  ipoDate: string;
}

export interface StockNewsProps {
  symbol: string;
  publishedDate: string;
  title: string;
  text: string;
  url: string;
}

export interface CryptocurrencyProps {
  date: string;
  open: number;
  low: number;
  high: number;
  close: number;
  volume: number;
}

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
