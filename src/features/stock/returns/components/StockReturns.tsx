import { RotateCcw } from 'lucide-react'
import { DataLayout } from '@/features/_shared/DataLayout'

const content = {
  title: "Retours d'atelier",
  subtitle:
    "Réconcilier les matières retournées avec la sortie d'origine et leur état.",
  action: 'Enregistrer un retour',
  columns: ['Retour', "Sortie d'origine", 'Matière', 'Quantité', 'État'],
  rows: [
    [
      'RET-260920-004',
      'SOR-260919-031',
      'Jersey coton noir',
      '6,5 m',
      'Réutilisable',
    ],
    [
      'RET-260919-003',
      'SOR-260918-028',
      'Fil polyester 120',
      '2 bobines',
      'À contrôler',
    ],
    [
      'RET-260917-002',
      'SOR-260916-021',
      'Popeline blanche',
      '3 m',
      'Déclassée',
    ],
  ],
}
const summary = [
  ['Retours période', '16', 'Depuis le 1er sept.'],
  ['Quantité retournée', '184 unités', 'Toutes matières'],
  ['Réutilisables', '142', '77 % du retour'],
  ['À contrôler', '12', 'Décision requise'],
] as [string, string, string][]

export function StockReturns() {
  return (
    <DataLayout
      content={content}
      summary={summary}
      icon={RotateCcw}
      actionIcon={RotateCcw}
    />
  )
}
