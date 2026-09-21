import { createFileRoute } from '@tanstack/react-router'
import { ReportsWorkspace } from '@/features/reports/components/ReportsWorkspace'

function PaieReportPage() {
  return <ReportsWorkspace page="payroll" />
}

export const Route = createFileRoute('/reports/paie')({
  component: PaieReportPage,
})
