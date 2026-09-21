import { createFileRoute } from '@tanstack/react-router'
import { PayrollWorkspace } from '@/features/payroll/components/PayrollWorkspace'

function CloturesPage() {
  return <PayrollWorkspace page="closures" />
}

export const Route = createFileRoute('/payroll/clotures')({
  component: CloturesPage,
})
