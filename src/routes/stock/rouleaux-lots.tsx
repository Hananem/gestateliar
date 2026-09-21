import { createFileRoute } from '@tanstack/react-router'
import { StockRolls } from '@/features/stock/rolls/components/StockRolls'

function RouleauxLotsPage() {
  return <StockRolls />
}

export const Route = createFileRoute('/stock/rouleaux-lots')({
  component: RouleauxLotsPage,
})
