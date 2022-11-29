import { SummaryCard } from "./SummaryCard";
import { SummaryContainer } from "./styles";

import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from "phosphor-react";
import { useTheme } from "styled-components";
import { useTransactions } from "../../hooks/useTransactions";

export function Summary() {
  const theme = useTheme();
  const { transactions } = useTransactions();

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "income") {
        acc.income += transaction.price;
        acc.total += transaction.price;
      } else {
        acc.outcome += transaction.price;
        acc.total -= transaction.price;
      }

      return acc;
    },
    {
      income: 0,
      outcome: 0,
      total: 0,
    }
  );

  return (
    <SummaryContainer>
      <SummaryCard
        value={summary.income}
        title="Entrada"
        icon={<ArrowCircleUp size={32} color={theme["green-300"]} />}
      />

      <SummaryCard
        value={summary.outcome}
        title="Saídas"
        icon={<ArrowCircleDown size={32} color={theme["red-300"]} />}
      />

      <SummaryCard
        value={summary.total}
        variant="green"
        title="Total"
        icon={<CurrencyDollar size={32} color={theme["white"]} />}
      />
    </SummaryContainer>
  );
}
