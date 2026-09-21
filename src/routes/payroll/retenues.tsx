import { createFileRoute } from '@tanstack/react-router'
import { PayrollDeductions } from '@/features/payroll/deductions/components/PayrollDeductions'

function RetenuesPage() {
  return <PayrollDeductions />
}

export const Route = createFileRoute('/payroll/retenues')({
  component: RetenuesPage,
})
