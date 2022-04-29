import {
  CompanyFinancialRatiosProps,
  CompanyNewsProps,
  CompanyPriceProps,
  FinancialRationsProps,
  KeyExecutivesProps,
  PriceAtTheMomentProps,
  SecFilingsProps,
} from "../../../state/Stock_Market_State/interface";
import { HeaderWrapper } from "./style";

export const renderMultipliers = (multipliers: FinancialRationsProps[]) => (
  <>
    {multipliers.map((e: FinancialRationsProps) => (
      <div key={e.GrossProfitMarginTTM}>
        <p>
          Отношение долгосрочной задолженности к капитализации:{" "}
          {e.longTermDebtToCapitalizationTTM}
        </p>
        <p>Коэффициент покрытия процентов: {e.interestCoverageTTM}</p>
        <p>Отношение денежного потока к долгу: {e.cashFlowToDebtRatioTTM}</p>
        <p>
          Мультипликатор собственного капитала: {e.companyEquityMultiplierTTM}
        </p>
        <p>
          Коэффициент оборачиваемости дебиторской задолжнности:{" "}
          {e.receivablesTurnoverTTM}
        </p>
        <p>Коэффициент оборачиваемости запасов: {e.inventoryTurnoverTTM}</p>
        <p>
          Оборот активов в ходе хозяйственной деятельности:{" "}
          {e.fixedAssetTurnoverTTM}
        </p>
        <p>
          Операционный денежный поток на акцию: {e.operatingCashFlowPerShareTTM}
        </p>
        <p>Свободный денежный поток на акцию: {e.freeCashFlowPerShareTTM}</p>
        <p>Денежный поток на акцию: {e.cashPerShareTTM}</p>
        <p>
          Операционный денежный поток / коэффициент продаж:{" "}
          {e.operatingCashFlowSalesRatioTTM}
        </p>
        <p>P/OCF: {e.freeCashFlowOperatingCashFlowRatioTTM}</p>
        <p>Отношение денежного потока к долгу: {e.cashFlowCoverageRatiosTTM}</p>
        <p>P/B: {e.priceBookValueRatioTTM}</p>
        <p>P/S: {e.priceToSalesRatioTTM}</p>
        <p>P/FCF: {e.priceToFreeCashFlowsRatioTTM}</p>
        <p>Дивидендная доходность: {e.dividendYieldTTM}</p>
        <p>Справедливая стоимость: {e.priceFairValueTTM}</p>
        <p>DPS: {e.dividendPerShareTTM}</p>
      </div>
    ))}
  </>
);

export const renderCompanyPrice = (state: CompanyPriceProps[]) => (
  <>
    {state.map((e: CompanyPriceProps) => (
      <>
        <p>Цена одной акции: {e.price}</p>
        <p>Сектор работы компании: {e.sector}</p>
        <p>Штат: {e.state}</p>
        <p>Город: {e.city}</p>
        <p>CEO: {e.ceo}</p>
        <p>Описание: {e.description}</p>
        <p>
          Cайт:
          <a href={e.website}>{e.website}</a>
        </p>
        <p>
          Биржа, на которой торгуются ценные бумаги компании:
          {e.exchange}
        </p>
        <p>Дата публичного размещения компании: {e.ipoDate}</p>
      </>
    ))}
  </>
);

export const renderFinancialResults = (
  state: CompanyFinancialRatiosProps[]
) => (
  <div>
    {state.map((e: CompanyFinancialRatiosProps) => (
      <>
        <p>Дата публикации отчёта: {e.date}</p>
        <p>Валюта отчётности: {e.reportedCurrency}</p>
        <p>Отчётный период: {e.period}</p>
        <p>Доход: {e.revenue}</p>
        <p>Валовой доход: {e.grossProfit}</p>
        <p>Коэффициент валовой прибыли: {e.grossProfitRatio} </p>
        <p>
          Расходы на исследование и разработки:
          {e.researchAndDevelopmentExpenses}
        </p>
        <p>
          Общие и административные расходы: {e.generalAndAdministrativeExpenses}
        </p>
        <p>Расходы на продажу: {e.sellingAndMarketingExpenses}</p>
        <p>Опарационные расходы: {e.operatingExpenses}</p>
        <p>износ и амортизация: {e.depreciationAndAmortization}</p>
        <p>Прочие расходы: {e.otherExpenses}</p>
        <p>Ebitda: {e.ebitda}</p>
        <p>Операционная прибыль: {e.operatingIncome}</p>
        <p>Операционная маржа: {e.operatingIncomeRatio}</p>
        <p>прочие доходы: {e.totalOtherIncomeExpensesNet}</p>
        <p>Доход до налогообложения: {e.incomeBeforeTax}</p>
        <p>Расходы по налогу на прибыль: {e.incomeTaxExpense}</p>
        <p>Чистая прибыль: {e.netIncome}</p>
        <p>Коэффициент чистой прибыли: {e.netIncomeRatio}</p>
        <p>Прибыль на акцию: {e.eps}</p>
        <p>
          Ссылка на отчёт:{" "}
          <a href={e.finalLink} target="blank">
            {e.finalLink}
          </a>
        </p>
      </>
    ))}
  </div>
);

export const renderCompanyNews = (state: CompanyNewsProps[]) => (
  <>
    {state.map((e: CompanyNewsProps) => (
      <>
        <p>Дата публикации: {e.publishedDate}</p>
        <p>{e.title}</p>
        <p>{e.text}</p>
        <a href={e.url}>{e.url}</a>
      </>
    ))}
  </>
);

export const renderKeyExecutives = (state: KeyExecutivesProps[]) => (
  <>
    {state.map((e: KeyExecutivesProps) => (
      <>
        <p>Должность: {e.title}</p>
        <p>Имя: {e.name}</p>
        <p>Пол: {e.gender}</p>
        <p>Год рождения: {e.yearBorn}</p>
        <p>Дата вступление в должность: {e.titleSince}</p>
      </>
    ))}
  </>
);

export const renderSecFilings = (state: SecFilingsProps[]) => (
  <>
    {state.map((e) => (
      <div>
        <p>Дата публикации отчёта: {e.acceptedDate}</p>
        <p>Форма отчёта: {e.type}</p>
        <p>
          Ссылка на отчёт:
          <a href={e.finalLink} target="blank">
            {e.finalLink}
          </a>
        </p>
      </div>
    ))}
  </>
);

export const renderPriceAtTheMoment = (state: PriceAtTheMomentProps[]) => (
  <>
    {state.map((e: PriceAtTheMomentProps) => (
      <HeaderWrapper key={e.symbol}>
        <p>{e.symbol}</p>
        <p>{e.price}</p>
      </HeaderWrapper>
    ))}
  </>
);
