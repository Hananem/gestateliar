import { createFileRoute } from '@tanstack/react-router'
import { ProductionProgress } from '@/features/production/progress/components/ProductionProgress'

function AvancementPage() {
  return <ProductionProgress />
}

export const Route = createFileRoute('/production/avancement/')({
  component: AvancementPage,
})
