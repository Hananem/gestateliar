import { createFileRoute } from '@tanstack/react-router'
import { PayrollClosures } from '@/features/payroll/closures/components/PayrollClosures'

function CloturesPage() {
  return <PayrollClosures />
}

export const Route = createFileRoute('/payroll/clotures/clotures')({
  component: CloturesPage,
})
