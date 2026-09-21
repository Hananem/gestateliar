import { createFileRoute } from '@tanstack/react-router'
import { ProductionReport } from '@/features/reports/production/components/ProductionReport'

function ProductionReportRoute() {
  return <ProductionReport />
}

export const Route = createFileRoute('/reports/production')({
  component: ProductionReportRoute,
})
