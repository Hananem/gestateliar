import { createFileRoute } from '@tanstack/react-router'
import { StockValuation } from '@/features/stock/valuation/components/StockValuation'

function ValorisationPage() {
  return <StockValuation />
}

export const Route = createFileRoute('/stock/valorisation')({
  component: ValorisationPage,
})
