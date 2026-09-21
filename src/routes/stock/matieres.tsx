import { createFileRoute } from '@tanstack/react-router'
import { StockMaterials } from '@/features/stock/materials/components/StockMaterials'

function MatieresPage() {
  return <StockMaterials />
}

export const Route = createFileRoute('/stock/matieres')({
  component: MatieresPage,
})
