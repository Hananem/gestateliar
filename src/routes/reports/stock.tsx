import { createFileRoute } from '@tanstack/react-router'
import { StockReport } from '@/features/reports/stock/components/StockReport'

function StockReportRoute() {
  return <StockReport />
}

export const Route = createFileRoute('/reports/stock')({
  component: StockReportRoute,
})
