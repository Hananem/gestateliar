import { createFileRoute } from '@tanstack/react-router'
import { ProductionWorkspace } from '@/features/production/components/ProductionWorkspace'

function ProductionIndexPage() {
  return <ProductionWorkspace page="overview" />
}

export const Route = createFileRoute('/production/')({
  component: ProductionIndexPage,
})
