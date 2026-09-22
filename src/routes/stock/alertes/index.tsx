import { createFileRoute } from '@tanstack/react-router'
import { StockAlerts } from '@/features/stock/alerts/components/StockAlerts'

function AlertesPage() {
  return <StockAlerts />
}

export const Route = createFileRoute('/stock/alertes/')({
  component: AlertesPage,
})