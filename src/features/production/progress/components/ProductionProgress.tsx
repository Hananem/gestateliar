import { ChartNoAxesCombined } from 'lucide-react'

import { Header } from '@/features/_shared/Header'
import { Cards } from '@/features/_shared/Cards'
import { ProgressTable } from '@/features/production/progress/components/ProgressTable'

const summary = [
  ['Lots en production', '7', 'Production active'],
  ['Quantité cible', '3 200', 'Pièces planifiées'],
  ['Quantité produite', '2 180', 'Pièces produites'],
  ['Taux d’avancement', '68 %', 'Progression globale'],
] as [string, string, string][]

export function ProductionProgress() {
  return (
    <div className="mx-auto max-w-[1100px] px-5 py-7 sm:px-8">
      <Header
        title="Avancement de la production"
        subtitle="Suivi des quantités produites, acceptées, rejetées et restantes par lot."
        icon={ChartNoAxesCombined}
      />

      <Cards summary={summary} />

      <ProgressTable />
    </div>
  )
}