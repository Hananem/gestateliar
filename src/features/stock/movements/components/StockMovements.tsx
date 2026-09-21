import { Download, History } from 'lucide-react'
import { DataLayout } from '@/features/_shared/DataLayout'

const content = {
  title: 'Historique des mouvements',
  subtitle: 'Rechercher les entrées, sorties, retours, pertes et ajustements.',
  action: "Exporter l'historique",
  columns: ['Date', 'Type', 'Matière', 'Quantité', 'Utilisateur'],
  rows: [
    ['20 sept. · 08:01', 'Sortie', 'Jersey coton noir', '-46 m', 'Fatima M.'],
    [
      '20 sept. · 07:42',
      'Réception',
      'Jersey coton noir',
      '+240 m',
      'Nadia K.',
    ],
    [
      '19 sept. · 16:18',
      'Retour',
      'Fil polyester 120',
      '+2 bobines',
      'Yacine B.',
    ],
  ],
}
const summary = [
  ['Mouvements période', '384', 'Entrées et sorties'],
  ['Entrées', '142', 'Réceptions et retours'],
  ['Sorties', '226', 'Vers la production'],
  ['Ajustements', '16', 'Inventaires et pertes'],
] as [string, string, string][]

export function StockMovements() {
  return (
    <DataLayout
      content={content}
      summary={summary}
      icon={History}
      actionIcon={Download}
    />
  )
}
