import { ReactNode } from "react";
import { SummaryCardContainer, SummaryCardHeader } from "./styles";

interface SumaryCardProps {
  variant?: "green";
  title: string;
  value: number;
  icon: ReactNode;
}

export function SummaryCard({ title, icon, variant, value }: SumaryCardProps) {
  return (
    <SummaryCardContainer variant={variant}>
      <SummaryCardHeader>
        <span>{title}</span>
        {icon}
      </SummaryCardHeader>
      <strong>{value}</strong>
    </SummaryCardContainer>
  );
}
