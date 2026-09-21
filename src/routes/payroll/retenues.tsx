import { createFileRoute } from '@tanstack/react-router'
import { PayrollWorkspace } from '@/features/payroll/components/PayrollWorkspace'

function RetenuesPage() {
  return <PayrollWorkspace page="deductions" />
}

export const Route = createFileRoute('/payroll/retenues')({
  component: RetenuesPage,
})
