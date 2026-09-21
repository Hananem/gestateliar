import { ArrowUpFromLine } from 'lucide-react'
import { Header } from '@/features/_shared/Header'
import { Cards } from '@/features/_shared/Cards'
import { DataLayout } from '@/features/_shared/DataLayout'

const content = {
  title: 'Sorties vers production',
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
    <div className="mx-auto max-w-[1100px] px-5 py-7 sm:px-8">
      <Header
        title="Sorties vers production"
        subtitle="Préparer et contrôler les matières affectées aux lots de production."
        action="Enregistrer une sortie"
        icon={ArrowUpFromLine}
        actionIcon={ArrowUpFromLine}
      />

      <Cards summary={summary} />

      <DataLayout content={content} />
    </div>
  )
}
