import { createFileRoute } from '@tanstack/react-router'
import { StockWorkspace } from '@/features/stock/components/StockWorkspace'

function ReceptionsPage() {
  return <StockWorkspace page="receipts" />
}

export const Route = createFileRoute('/stock/receptions')({
  component: ReceptionsPage,
})
