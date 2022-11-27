import { ReactNode } from "react";
import { SummaryCardContainer, SummaryCardHeader } from "./styles";

interface SumaryCardProps {
  variant?: "green";
  title: string;
  icon: ReactNode;
}

export function SummaryCard({ title, icon, variant }: SumaryCardProps) {
  return (
    <SummaryCardContainer variant={variant}>
      <SummaryCardHeader>
        <span>{title}</span>
        {icon}
      </SummaryCardHeader>
      <strong>R$ 17.400,00</strong>
    </SummaryCardContainer>
  );
}
