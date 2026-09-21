import { createFileRoute } from '@tanstack/react-router'
import { ProductionWorkspace } from '@/features/production/components/ProductionWorkspace'

function OperationsPage() {
  return <ProductionWorkspace page="operations" />
}

export const Route = createFileRoute('/production/operations')({
  component: OperationsPage,
})
