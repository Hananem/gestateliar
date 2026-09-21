import { createFileRoute } from '@tanstack/react-router'
import { ExpensesReport } from '@/features/reports/expenses/components/ExpensesReport'

function DepensesReportPage() {
  return <ExpensesReport />
}

export const Route = createFileRoute('/reports/depenses')({
  component: DepensesReportPage,
})
