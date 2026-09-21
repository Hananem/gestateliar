import { createFileRoute } from '@tanstack/react-router'
import { StockReturns } from '@/features/stock/returns/components/StockReturns'

function RetoursPage() {
  return <StockReturns />
}

export const Route = createFileRoute('/stock/retours')({
  component: RetoursPage,
})
