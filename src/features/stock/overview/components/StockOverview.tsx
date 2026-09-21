import { PackageCheck } from 'lucide-react'
import { DataLayout } from '@/features/_shared/DataLayout'

const content = {
  title: "Vue d'ensemble",
  subtitle:
    'Suivi des quantités disponibles, des alertes et des mouvements récents.',
  action: 'Nouvelle réception',
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
    <DataLayout
      content={content}
      summary={summary}
      icon={PackageCheck}
      actionIcon={PackageCheck}
    />
  )
}
