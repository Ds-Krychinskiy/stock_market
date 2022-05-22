import Stock_Market_State from "../../../state/Stock_Market_State";
import {
  CompanyNewsProps,
  FinancialMultipliersProps,
  KeyExecutivesProps,
  SecFilingsProps,
} from "../../../state/Stock_Market_State/interface";
import Ref from "../../atoms/ref";
import { Typography } from "../../atoms/typograhy";
import Paragraph from "../../molecule/paragraph";
import React from "react";
const { multipliers, executive, filings, news } = Stock_Market_State;

export const MapAccordion = [
  {
    id: 1,
    state: () => (
      <>
        <Typography size={"1.2em"}>Financial Rations</Typography>
        {multipliers.map((e: FinancialMultipliersProps) => (
          <React.Fragment key={e.GrossProfitMarginTTM}>
            <Typography size={"1.2em"}>
              Отношение долгосрочной задолженности к капитализации:{" "}
              {e.longTermDebtToCapitalizationTTM}
            </Typography>
            <Typography size={"1.2em"}>
              Коэффициент покрытия процентов: {e.interestCoverageTTM}
            </Typography>
            <Typography size={"1.2em"}>
              Отношение денежного потока к долгу: {e.cashFlowToDebtRatioTTM}
            </Typography>
            <Typography size={"1.2em"}>
              Мультипликатор собственного капитала:{" "}
              {e.companyEquityMultiplierTTM}
            </Typography>
            <Typography size={"1.2em"}>
              Коэффициент оборачиваемости дебиторской задолжнности:{" "}
              {e.receivablesTurnoverTTM}
            </Typography>
            <Typography size={"1.2em"}>
              Коэффициент оборачиваемости запасов: {e.inventoryTurnoverTTM}
            </Typography>
            <Typography size={"1.2em"}>
              Оборот активов в ходе хозяйственной деятельности:{" "}
              {e.fixedAssetTurnoverTTM}
            </Typography>
            <Typography size={"1.2em"}>
              Операционный денежный поток на акцию:{" "}
              {e.operatingCashFlowPerShareTTM}
            </Typography>
            <Typography size={"1.2em"}>
              Свободный денежный поток на акцию: {e.freeCashFlowPerShareTTM}
            </Typography>
            <Typography size={"1.2em"}>
              Денежный поток на акцию: {e.cashPerShareTTM}
            </Typography>
            <Typography size={"1.2em"}>
              Операционный денежный поток / коэффициент продаж:{" "}
              {e.operatingCashFlowSalesRatioTTM}
            </Typography>
            <Typography size={"1.2em"}>
              P/OCF: {e.freeCashFlowOperatingCashFlowRatioTTM}
            </Typography>
            <Typography size={"1.2em"}>
              Отношение денежного потока к долгу: {e.cashFlowCoverageRatiosTTM}
            </Typography>
            <Typography size={"1.2em"}>
              P/B: {e.priceBookValueRatioTTM}
            </Typography>
            <Typography size={"1.2em"}>
              P/S: {e.priceToSalesRatioTTM}
            </Typography>
            <Typography size={"1.2em"}>
              P/FCF: {e.priceToFreeCashFlowsRatioTTM}
            </Typography>
            <Typography size={"1.2em"}>
              Дивидендная доходность: {e.dividendYieldTTM}
            </Typography>
            <Typography size={"1.2em"}>
              Справедливая стоимость: {e.priceFairValueTTM}
            </Typography>
            <Typography size={"1.2em"}>DPS: {e.dividendPerShareTTM}</Typography>
          </React.Fragment>
        ))}
      </>
    ),
  },
  {
    id: 2,
    state: () => (
      <>
        <Typography size={"1.2em"}>Company News</Typography>
        {console.log("rerender")}
        {news.map((e: CompanyNewsProps) => (
          <React.Fragment key={e.symbol}>
            <Typography size={"1.2em"}>
              Дата публикации: {e.publishedDate}
            </Typography>
            <Typography size={"1.2em"}>{e.title}</Typography>
            <Typography size={"1.2em"}>{e.text}</Typography>
            <Ref href={e.url} target="blank">
              {e.url}
            </Ref>
          </React.Fragment>
        ))}
      </>
    ),
  },
  {
    id: 3,
    state: () => (
      <>
        <Typography size={"1.2em"}>Sec Filings</Typography>
        {filings.map((e: SecFilingsProps) => (
          <React.Fragment key={e.symbol}>
            <Typography size={"1.2em"}>
              Дата публикации отчёта: {e.acceptedDate}
            </Typography>
            <Typography size={"1.2em"}>Форма отчёта: {e.type}</Typography>
            <Typography size={"1.2em"}>
              Ссылка на отчёт:
              <Ref href={e.finalLink} target="blank">
                {e.finalLink}
              </Ref>
            </Typography>
          </React.Fragment>
        ))}
      </>
    ),
  },
  {
    id: 4,
    state: () => (
      <>
        <Typography size={"1.2em"}>Key Executives</Typography>
        {executive.map((e: KeyExecutivesProps) => (
          <React.Fragment key={e.name}>
            <Typography size={"1.2em"}>Должность: {e.title}</Typography>
            <Typography size={"1.2em"}>Имя: {e.name}</Typography>
            <Typography size={"1.2em"}>Пол: {e.gender}</Typography>
            <Typography size={"1.2em"}>Год рождения: {e.yearBorn}</Typography>
            <Typography size={"1.2em"}>
              Дата вступление в должность: {e.titleSince}
            </Typography>
          </React.Fragment>
        ))}
      </>
    ),
  },
];

export const renderAccordion = () => {
  return (
    <>
      {MapAccordion.map((e) => (
        <Paragraph key={e.id} state={() => e.state()} />
      ))}
    </>
  );
};
