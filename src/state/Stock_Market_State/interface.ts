export interface FinancialMultipliersProps {
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

export interface KeyExecutivesProps {
  symbol: string;
  yearBorn: number;
  pay: number;
  currencyPay: string;
  name: string;
  title: string;
  gender: string;
  titleSince?: string;
}

export interface SecFilingsProps {
  symbol: string;
  acceptedDate: string;
  type: string;
  finalLink: string;
}

export interface CompanyPriceProps {
  date: string;
  open: number;
  low: number;
  high: number;
  close: number;
  volume: number;
}

export interface CompanyPriceForMondthProps {
  date: string;
  open: number;
  high: number;
  low: number;
  close: number;
  adjClose: number;
  volume: number;
  unadjustedVolume: number;
  change: number;
  changePercent: number;
  vwap: number;
  label: string;
  changeOverTime: number;
}

export interface CompanyNewsProps {
  symbol: string;
  publishedDate: string;
  title: string;
  text: string;
  url: string;
}

export interface PriceAtTheMomentProps {
  symbol: string;
  price: number;
  volume: number;
}

export interface PriceProps {
  date: string;
  open: number;
}
