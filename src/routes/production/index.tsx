import { createFileRoute } from '@tanstack/react-router'
import { ProductionOverview } from '@/features/production/overview/components/ProductionOverview'

function ProductionIndexPage() {
  return <ProductionOverview />
}

export const Route = createFileRoute('/production/')({
  component: ProductionIndexPage,
})
