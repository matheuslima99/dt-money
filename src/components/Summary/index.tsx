import { SummaryCard } from "./components/SummaryCard";
import { SummaryContainer } from "./styles";

import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from "phosphor-react";
import { useTheme } from "styled-components";

export function Summary() {
  const theme = useTheme();

  return (
    <SummaryContainer>
      <SummaryCard
        title="Entrada"
        icon={<ArrowCircleUp size={32} color={theme["green-300"]} />}
      />

      <SummaryCard
        title="Saídas"
        icon={<ArrowCircleDown size={32} color={theme["red-300"]} />}
      />

      <SummaryCard
        variant="green"
        title="Total"
        icon={<CurrencyDollar size={32} color={theme["white"]} />}
      />
    </SummaryContainer>
  );
}
