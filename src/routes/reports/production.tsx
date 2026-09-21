import { createFileRoute } from '@tanstack/react-router'
import { ReportsWorkspace } from '@/features/reports/components/ReportsWorkspace'

function ProductionReportPage() {
  return <ReportsWorkspace page="production" />
}

export const Route = createFileRoute('/reports/production')({
  component: ProductionReportPage,
})
