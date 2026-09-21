import { Plus, WalletCards } from 'lucide-react'
import { DataLayout } from '@/features/_shared/DataLayout'

const content = {
  title: 'Dépenses',
  subtitle:
    "Enregistrer les dépenses de l'atelier et les affecter à un lot de production.",
  action: 'Enregistrer une dépense',
  columns: [
    'Référence',
    'Date',
    'Libellé',
    'Catégorie',
    'Montant',
    'Lot de production',
    'Statut',
  ],
  rows: [
    [
      'DEP-2026-0918',
      '20 sept. 2026',
      'Électricité atelier',
      'Charges',
      '86 400 DA',
      'Non affectée',
      'Enregistrée',
    ],
    [
      'DEP-2026-0917',
      '19 sept. 2026',
      'Fournitures de coupe',
      'Fournitures',
      '24 800 DA',
      'LOT-2026-0912',
      'Affectée',
    ],
    [
      'DEP-2026-0916',
      '18 sept. 2026',
      'Transport matières',
      'Transport',
      '18 500 DA',
      'LOT-2026-0911',
      'Affectée',
    ],
  ],
}

const summary = [
  ['Dépenses période', '890 000 DA', '34 dépenses'],
  ['Dépenses affectées', '612 400 DA', '19 lots'],
  ['Dépenses récurrentes', '221 500 DA', '3 actives'],
  ['À affecter', '86 400 DA', '1 dépense'],
] as [string, string, string][]

export function Expenses() {
  return (
    <DataLayout
      content={content}
      summary={summary}
      icon={WalletCards}
      actionIcon={Plus}
    />
  )
}
