import { SummaryCard } from './SummaryCard'
import { SummaryContainer } from './styles'

import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { priceFormatter } from '../../utils/formatter'
import { useSummary } from '../../hooks/useSummary'

export function Summary() {
  const theme = useTheme()
  const summary = useSummary()

  return (
    <SummaryContainer>
      <SummaryCard
        value={priceFormatter.format(summary.income)}
        title="Entrada"
        icon={<ArrowCircleUp size={32} color={theme['green-300']} />}
      />

      <SummaryCard
        value={priceFormatter.format(summary.outcome)}
        title="Saídas"
        icon={<ArrowCircleDown size={32} color={theme['red-300']} />}
      />

      <SummaryCard
        value={priceFormatter.format(summary.total)}
        variant="green"
        title="Total"
        icon={<CurrencyDollar size={32} color={theme.white} />}
      />
    </SummaryContainer>
  )
}
