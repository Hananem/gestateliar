import { createFileRoute } from '@tanstack/react-router'
import { ProductivityReport } from '@/features/reports/productivity/components/ProductivityReport'

function ProductiviteReportPage() {
  return <ProductivityReport />
}

export const Route = createFileRoute('/reports/productivite')({
  component: ProductiviteReportPage,
})
