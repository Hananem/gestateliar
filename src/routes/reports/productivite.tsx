import { createFileRoute } from '@tanstack/react-router'
import { ReportsWorkspace } from '@/features/reports/components/ReportsWorkspace'

function ProductiviteReportPage() {
  return <ReportsWorkspace page="productivity" />
}

export const Route = createFileRoute('/reports/productivite')({
  component: ProductiviteReportPage,
})
