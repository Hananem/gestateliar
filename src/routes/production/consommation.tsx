import { createFileRoute } from '@tanstack/react-router'
import { ProductionConsumption } from '@/features/production/consumption/components/ProductionConsumption'

function ConsommationPage() {
  return <ProductionConsumption />
}

export const Route = createFileRoute('/production/consommation')({
  component: ConsommationPage,
})
