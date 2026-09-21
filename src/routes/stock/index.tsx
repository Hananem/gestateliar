import { createFileRoute } from '@tanstack/react-router'
import { StockOverview } from '@/features/stock/overview/components/StockOverview'

function StockIndexPage() {
  return <StockOverview />
}

export const Route = createFileRoute('/stock/')({ component: StockIndexPage })
