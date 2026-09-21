import { createFileRoute } from '@tanstack/react-router'
import { PayrollReport } from '@/features/reports/payroll/components/PayrollReport'

function PaieReportPage() {
  return <PayrollReport />
}

export const Route = createFileRoute('/reports/paie')({
  component: PaieReportPage,
})
