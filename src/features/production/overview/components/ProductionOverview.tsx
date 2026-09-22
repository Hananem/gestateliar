import { Factory } from 'lucide-react'

import { Header } from '@/features/_shared/Header'
import { Cards } from '@/features/_shared/Cards'
import { ProductionOverviewTable } from '@/features/production/overview/components/ProductionOverviewTable'

const summary = [
  ['Lots en production', '7', 'Production active'],
  ['Lots planifiés', '5', 'À venir'],
  ['Lots terminés', '6', 'Ce mois'],
  ['Taux d’avancement', '68 %', 'Progression globale'],
] as [string, string, string][]

export function ProductionOverview() {
  return (
    <div className="mx-auto max-w-[1100px] px-5 py-7 sm:px-8">
      <Header
        title="Production"
        subtitle="Vue d'ensemble de la production, des lots et de leur avancement."
        icon={Factory}
      />

      <Cards summary={summary} />

      <ProductionOverviewTable />
    </div>
  )
}