import { createFileRoute } from '@tanstack/react-router'
import { StockWorkspace } from '@/features/stock/components/StockWorkspace'

function ValorisationPage() {
  return <StockWorkspace page="valuation" />
}

export const Route = createFileRoute('/stock/valorisation')({
  component: ValorisationPage,
})
