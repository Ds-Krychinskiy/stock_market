import Stock_Market_State from "../../../state/Stock_Market_State";
import {
  CompanyFinancialRatiosProps,
  CompanyNewsProps,
  FinancialMultipliersProps,
  KeyExecutivesProps,
  SecFilingsProps,
} from "../../../state/Stock_Market_State/interface";
import Ref from "../../atoms/ref";
import Typography from "../../atoms/typograhy";
import Paragraph from "../../molecule/paragraph";
import AccordionOrganism from "../../organism/accordion/index";

const {
  multipliers,
  executive,
  filings,
  financial_rations,
  news,
  getMultipliers,
  getCompanyNews,
  getSecFilings,
  getKeyExecutives,
} = Stock_Market_State;

const MapAccordion = [
  {
    name: "Financial Rations",
    state: ()=>(
      <>
        {multipliers.map((e: FinancialMultipliersProps) => (
          <Paragraph key={e.GrossProfitMarginTTM}>
            <Typography variant={"h2"}>
              Отношение долгосрочной задолженности к капитализации:{" "}
              {e.longTermDebtToCapitalizationTTM}
            </Typography>
            <Typography variant={"h2"}>
              Коэффициент покрытия процентов: {e.interestCoverageTTM}
            </Typography>
            <Typography variant={"h2"}>
              Отношение денежного потока к долгу: {e.cashFlowToDebtRatioTTM}
            </Typography>
            <Typography variant={"h2"}>
              Мультипликатор собственного капитала:{" "}
              {e.companyEquityMultiplierTTM}
            </Typography>
            <Typography variant={"h2"}>
              Коэффициент оборачиваемости дебиторской задолжнности:{" "}
              {e.receivablesTurnoverTTM}
            </Typography>
            <Typography variant={"h2"}>
              Коэффициент оборачиваемости запасов: {e.inventoryTurnoverTTM}
            </Typography>
            <Typography variant={"h2"}>
              Оборот активов в ходе хозяйственной деятельности:{" "}
              {e.fixedAssetTurnoverTTM}
            </Typography>
            <Typography variant={"h2"}>
              Операционный денежный поток на акцию:{" "}
              {e.operatingCashFlowPerShareTTM}
            </Typography>
            <Typography variant={"h2"}>
              Свободный денежный поток на акцию: {e.freeCashFlowPerShareTTM}
            </Typography>
            <Typography variant={"h2"}>
              Денежный поток на акцию: {e.cashPerShareTTM}
            </Typography>
            <Typography variant={"h2"}>
              Операционный денежный поток / коэффициент продаж:{" "}
              {e.operatingCashFlowSalesRatioTTM}
            </Typography>
            <Typography variant={"h2"}>
              P/OCF: {e.freeCashFlowOperatingCashFlowRatioTTM}
            </Typography>
            <Typography variant={"h2"}>
              Отношение денежного потока к долгу: {e.cashFlowCoverageRatiosTTM}
            </Typography>
            <Typography variant={"h2"}>P/B: {e.priceBookValueRatioTTM}</Typography>
            <Typography variant={"h2"}>P/S: {e.priceToSalesRatioTTM}</Typography>
            <Typography variant={"h2"}>P/FCF: {e.priceToFreeCashFlowsRatioTTM}</Typography>
            <Typography variant={"h2"}>
              Дивидендная доходность: {e.dividendYieldTTM}
            </Typography>
            <Typography variant={"h2"}>
              Справедливая стоимость: {e.priceFairValueTTM}
            </Typography>
            <Typography variant={"h2"}>DPS: {e.dividendPerShareTTM}</Typography>
          </Paragraph>
        ))}
      </>
    ),
    onClick: () => getMultipliers(),
  },
  {
    name: "Financial Results",
    state: (
      <>
        {financial_rations.map((e: CompanyFinancialRatiosProps) => (
          <Paragraph>
            <Typography variant={"h2"}>Дата публикации отчёта: {e.date}</Typography>
            <Typography variant={"h2"}>Валюта отчётности: {e.reportedCurrency}</Typography>
            <Typography variant={"h2"}>Отчётный период: {e.period}</Typography>
            <Typography variant={"h2"}>Доход: {e.revenue}</Typography>
            <Typography variant={"h2"}>Валовой доход: {e.grossProfit}</Typography>
            <Typography variant={"h2"}>
              Коэффициент валовой прибыли: {e.grossProfitRatio}{" "}
            </Typography>
            <Typography variant={"h2"}>
              Расходы на исследование и разработки:
              {e.researchAndDevelopmentExpenses}
            </Typography>
            <Typography variant={"h2"}>
              Общие и административные расходы:{" "}
              {e.generalAndAdministrativeExpenses}
            </Typography>
            <Typography variant={"h2"}>
              Расходы на продажу: {e.sellingAndMarketingExpenses}
            </Typography>
            <Typography variant={"h2"}>Опарационные расходы: {e.operatingExpenses}</Typography>
            <Typography variant={"h2"}>
              износ и амортизация: {e.depreciationAndAmortization}
            </Typography>
            <Typography variant={"h2"}>Прочие расходы: {e.otherExpenses}</Typography>
            <Typography variant={"h2"}>Ebitda: {e.ebitda}</Typography>
            <Typography variant={"h2"}>Операционная прибыль: {e.operatingIncome}</Typography>
            <Typography variant={"h2"}>
              Операционная маржа: {e.operatingIncomeRatio}
            </Typography>
            <Typography variant={"h2"}>
              прочие доходы: {e.totalOtherIncomeExpensesNet}
            </Typography>
            <Typography variant={"h2"}>
              Доход до налогообложения: {e.incomeBeforeTax}
            </Typography>
            <Typography variant={"h2"}>
              Расходы по налогу на прибыль: {e.incomeTaxExpense}
            </Typography>
            <Typography variant={"h2"}>Чистая прибыль: {e.netIncome}</Typography>
            <Typography variant={"h2"}>
              Коэффициент чистой прибыли: {e.netIncomeRatio}
            </Typography>
            <Typography variant={"h2"}>Прибыль на акцию: {e.eps}</Typography>
            <Typography variant={"h2"}>
              Ссылка на отчёт:{" "}
              <Ref href={e.finalLink} target="blank">
                {e.finalLink}
              </Ref>
            </Typography>
          </Paragraph>
        ))}
      </>
    ),
    onClick: () => console.log("kek"),
  },
  {
    name: "Company News",
    state: (
      <>
        {news.map((e: CompanyNewsProps) => (
          <Paragraph>
            <Typography variant={"h2"}>Дата публикации: {e.publishedDate}</Typography>
            <Typography variant={"h2"}>{e.title}</Typography>
            <Typography variant={"h2"}>{e.text}</Typography>
            <Ref href={e.url} target="blank">{e.url}</Ref>
          </Paragraph>
        ))}
      </>
    ),
    onClick: () => getCompanyNews(),
  },
  {
    name: "Sec Filings",
    state: (
      <>
        {filings.map((e: SecFilingsProps) => (
          <Paragraph>
            <Typography variant={"h2"}>Дата публикации отчёта: {e.acceptedDate}</Typography>
            <Typography variant={"h2"}>Форма отчёта: {e.type}</Typography>
            <Typography variant={"h2"}>
              Ссылка на отчёт:
              <Ref href={e.finalLink} target="blank">
                {e.finalLink}
              </Ref>
            </Typography>
          </Paragraph>
        ))}
      </>
    ),
    onClick: () => getSecFilings(),
  },
  {
    name: "Key Executives",
    state: (
      <>
        {executive.map((e: KeyExecutivesProps) => (
          <Paragraph>
            <Typography variant={"h2"}>Должность: {e.title}</Typography>
            <Typography variant={"h2"}>Имя: {e.name}</Typography>
            <Typography variant={"h2"}>Пол: {e.gender}</Typography>
            <Typography variant={"h2"}>Год рождения: {e.yearBorn}</Typography>
            <Typography variant={"h2"}>Дата вступление в должность: {e.titleSince}</Typography>
          </Paragraph>
        ))}
      </>
    ),
    onClick: () => getKeyExecutives(),
  },
];

export const renderAccordion = () => (
  <>
    {MapAccordion.map((e) => (
      <AccordionOrganism
        key={e.name}
        name={e.name}
        state={e.state}
        onClick={e.onClick}
      />
    ))}
  </>
);
