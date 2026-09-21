import { createFileRoute } from '@tanstack/react-router'
import { PayrollWorkspace } from '@/features/payroll/components/PayrollWorkspace'

function PayrollIndexPage() {
  return <PayrollWorkspace page="overview" />
}

export const Route = createFileRoute('/payroll/')({
  component: PayrollIndexPage,
})
