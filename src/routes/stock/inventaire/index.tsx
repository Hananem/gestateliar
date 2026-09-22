import { createFileRoute } from '@tanstack/react-router'
import { StockInventory } from '@/features/stock/inventory/components/StockInventory'

function InventairePage() {
  return <StockInventory />
}

export const Route = createFileRoute('/stock/inventaire/')({
  component: InventairePage,
})