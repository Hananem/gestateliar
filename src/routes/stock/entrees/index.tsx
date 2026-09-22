import { createFileRoute } from '@tanstack/react-router'
import { StockReceipts } from '@/features/stock/receipts/components/StockReceipts'

function EntreesPage() {
  return <StockReceipts />
}

export const Route = createFileRoute('/stock/entrees/')({
  component: EntreesPage,
})