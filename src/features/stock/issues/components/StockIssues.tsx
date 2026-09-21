import { ArrowUpFromLine } from 'lucide-react'
import { DataLayout } from '@/features/_shared/DataLayout'

const content = {
  title: 'Sorties vers production',
  subtitle:
    'Préparer et contrôler les matières affectées aux lots de production.',
  action: 'Enregistrer une sortie',
  columns: [
    'Lot de production',
    'Matière / rouleau',
    'Quantité',
    'Réceptionné par',
    'Statut',
  ],
  rows: [
    ['LOT-2026-0912', 'Jersey noir / RL-041', '46 m', 'Yacine B.', 'Validé'],
    [
      'LOT-2026-0911',
      'Fil polyester / -',
      '8 bobines',
      'Nadia K.',
      'En attente',
    ],
    [
      'LOT-2026-0909',
      'Popeline blanche / RL-039',
      '38 m',
      'Karim A.',
      'Validé',
    ],
  ],
}
const summary = [
  ['Sorties période', '42', 'Vers la production'],
  ['Quantité délivrée', '2 680 unités', 'Matières consommables'],
  ['Lots servis', '12', 'En production'],
  ['À confirmer', '3 sorties', 'Contrôle requis'],
] as [string, string, string][]

export function StockIssues() {
  return (
    <DataLayout
      content={content}
      summary={summary}
      icon={ArrowUpFromLine}
      actionIcon={ArrowUpFromLine}
    />
  )
}
