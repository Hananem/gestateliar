import { createFileRoute } from '@tanstack/react-router'
import { ProductionOperations } from '@/features/production/operations/components/ProductionOperations'

function OperationsPage() {
  return <ProductionOperations />
}

export const Route = createFileRoute('/production/operations')({
  component: OperationsPage,
})
