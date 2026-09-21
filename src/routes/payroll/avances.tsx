import { createFileRoute } from '@tanstack/react-router'
import { PayrollWorkspace } from '@/features/payroll/components/PayrollWorkspace'

function AvancesPage() {
  return <PayrollWorkspace page="advances" />
}

export const Route = createFileRoute('/payroll/avances')({
  component: AvancesPage,
})
