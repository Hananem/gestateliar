import { Settings2, TriangleAlert } from 'lucide-react'
import { Header } from '@/features/_shared/Header'
import { Cards } from '@/features/_shared/Cards'
import { AlertsTable } from '@/features/stock/alerts/components/AlertsTable'

const summary = [
  ['Alertes ouvertes', '7', '2 urgentes'],
  ['Matières épuisées', '2', 'Réapprovisionnement'],
  ['Sous le seuil', '5', 'À surveiller'],
  ['Rouleaux faibles', '14', 'Proches de la fin'],
] as [string, string, string][]

export function StockAlerts() {
  return (
    <div className="mx-auto max-w-[1100px] px-5 py-7 sm:px-8">
      <Header
        title="Alertes de stock"
        subtitle="Prioriser les matières sous le seuil, épuisées ou proches de la fin de rouleau."
        action="Configurer les seuils"
        icon={TriangleAlert}
        actionIcon={Settings2}
      />

      <Cards summary={summary} />

      <AlertsTable />
    </div>
  )
}