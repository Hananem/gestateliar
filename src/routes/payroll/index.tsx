import { createFileRoute } from '@tanstack/react-router'
import { PayrollOverview } from '@/features/payroll/overview/components/PayrollOverview'

function PayrollIndexPage() {
  return <PayrollOverview />
}

export const Route = createFileRoute('/payroll/')({
  component: PayrollIndexPage,
})
