import { createFileRoute } from '@tanstack/react-router'
import { StockIssues } from '@/features/stock/issues/components/StockIssues'

function SortiesPage() {
  return <StockIssues />
}

export const Route = createFileRoute('/stock/sorties')({
  component: SortiesPage,
})
