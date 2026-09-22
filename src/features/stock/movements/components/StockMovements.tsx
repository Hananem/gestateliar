import { Download, History } from 'lucide-react'
import { Header } from '@/features/_shared/Header'
import { Cards } from '@/features/_shared/Cards'
import { MovementsTable } from '@/features/stock/movements/components/MovementsTable'

const summary = [
  ['Mouvements période', '384', 'Entrées et sorties'],
  ['Entrées', '142', 'Réceptions et retours'],
  ['Sorties', '226', 'Vers la production'],
  ['Ajustements', '16', 'Inventaires et pertes'],
] as [string, string, string][]

export function StockMovements() {
  return (
    <div className="mx-auto max-w-[1100px] px-5 py-7 sm:px-8">
      <Header
        title="Historique des mouvements"
        subtitle="Rechercher les entrées, sorties, retours, pertes et ajustements."
        action="Exporter l'historique"
        icon={History}
        actionIcon={Download}
      />

      <Cards summary={summary} />

      <MovementsTable />
    </div>
  )
}