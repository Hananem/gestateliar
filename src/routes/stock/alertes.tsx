import { createFileRoute } from '@tanstack/react-router'
import { StockWorkspace } from '@/features/stock/components/StockWorkspace'

function AlertesPage() {
  return <StockWorkspace page="alerts" />
}

export const Route = createFileRoute('/stock/alertes')({
  component: AlertesPage,
})
