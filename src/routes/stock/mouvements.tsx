import { createFileRoute } from '@tanstack/react-router'
import { StockMovements } from '@/features/stock/movements/components/StockMovements'

function MouvementsPage() {
  return <StockMovements />
}

export const Route = createFileRoute('/stock/mouvements')({
  component: MouvementsPage,
})
