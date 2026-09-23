import { createFileRoute } from '@tanstack/react-router'
import { ProductionLots } from '@/features/production/lots/components/ProductionLots'

function ProductionLotsRoute() {
  return <ProductionLots />
}

export const Route = createFileRoute('/production/lots/')({
  component: ProductionLotsRoute,
})
