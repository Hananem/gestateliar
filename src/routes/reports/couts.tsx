import { createFileRoute } from '@tanstack/react-router'
import { CostsReport } from '@/features/reports/costs/components/CostsReport'

function CoutsReportPage() {
  return <CostsReport />
}

export const Route = createFileRoute('/reports/couts')({
  component: CoutsReportPage,
})
