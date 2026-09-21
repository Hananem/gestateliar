import { createFileRoute } from '@tanstack/react-router'
import { ProductionRejects } from '@/features/production/rejects/components/ProductionRejects'

function RejetsPage() {
  return <ProductionRejects />
}

export const Route = createFileRoute('/production/rejets')({
  component: RejetsPage,
})
