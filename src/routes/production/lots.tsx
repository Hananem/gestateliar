import { createFileRoute } from '@tanstack/react-router'
import { ProductionWorkspace } from '@/features/production/components/ProductionWorkspace'

function ProductionLotsPage() {
  return <ProductionWorkspace page="lots" />
}

export const Route = createFileRoute('/production/lots')({
  component: ProductionLotsPage,
})
