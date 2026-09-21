import { createFileRoute } from '@tanstack/react-router'
import { StockReceipts } from '@/features/stock/receipts/components/StockReceipts'

function ReceptionsPage() {
  return <StockReceipts />
}

export const Route = createFileRoute('/stock/receptions')({
  component: ReceptionsPage,
})
