import { createFileRoute } from '@tanstack/react-router'
import { StockWorkspace } from '@/features/stock/components/StockWorkspace'

function SortiesPage() {
  return <StockWorkspace page="issues" />
}

export const Route = createFileRoute('/stock/sorties')({
  component: SortiesPage,
})
