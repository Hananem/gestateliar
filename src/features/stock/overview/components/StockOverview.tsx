import { PackageCheck } from 'lucide-react'
import { Header } from '@/features/_shared/Header'
import { Cards } from '@/features/_shared/Cards'
import { DataLayout } from '@/features/_shared/DataLayout'

const content = {
  title: "Vue d'ensemble",
  columns: ['Indicateur', 'Valeur', 'Évolution'],
  rows: [
    ['Matières disponibles', '248 références', '+12 ce mois'],
    ['Rouleaux actifs', '86 rouleaux', '14 proches du seuil'],
    ['Lots de production', '12 en cours', 'Dernier mouvement il y a 18 min'],
  ],
}

const summary = [
  ['Stock total', '58 420 unités', 'Toutes les références'],
  ['Valeur estimée', '12,4 M DA', '+4,8 % ce mois'],
  ['Sous le seuil', '7 matières', '2 urgentes'],
  ["Mouvements aujourd'hui", '18', 'Dernier à 08:01'],
] as [string, string, string][]

export function StockOverview() {
  return (
    <div className="mx-auto max-w-[1100px] px-5 py-7 sm:px-8">
      <Header
        title="Vue d'ensemble"
        subtitle="Suivi des quantités disponibles, des alertes et des mouvements récents."
        action="Nouvelle réception"
        icon={PackageCheck}
        actionIcon={PackageCheck}
      />

      <Cards summary={summary} />

      <DataLayout content={content} minWidth="min-w-[680px]" />
    </div>
  )
}
