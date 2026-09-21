import { createFileRoute } from '@tanstack/react-router'
import { StockWorkspace } from '@/features/stock/components/StockWorkspace'

function MatieresPage() {
  return <StockWorkspace page="materials" />
}

export const Route = createFileRoute('/stock/matieres')({
  component: MatieresPage,
})
