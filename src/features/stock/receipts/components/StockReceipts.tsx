import { ArrowDownToLine } from 'lucide-react'
import { Header } from '@/features/_shared/Header'
import { Cards } from '@/features/_shared/Cards'
import { DataLayout } from '@/features/_shared/DataLayout'

const content = {
  title: 'Réceptions',
  columns: ['Référence', 'Fournisseur', 'Matière', 'Quantité', 'Date'],
  rows: [
    [
      'REC-260920-018',
      'Tissus El Djazair',
      'Jersey coton noir',
      '240 m',
      '20 sept. 2026',
    ],
    [
      'REC-260919-017',
      'Filature de Tlemcen',
      'Fil polyester 120',
      '40 bobines',
      '19 sept. 2026',
    ],
    [
      'REC-260918-016',
      'Accessoires El Bahja',
      'Bouton nacré 12 mm',
      '1 200 pièces',
      '18 sept. 2026',
    ],
  ],
}

const summary = [
  ['Réceptions période', '18', 'Depuis le 1er sept.'],
  ['Quantité reçue', '3 840 unités', 'Toutes matières'],
  ['Fournisseurs', '12', 'Actifs sur la période'],
  ['Dernière réception', '08:01', '20 sept. 2026'],
] as [string, string, string][]

export function StockReceipts() {
  return (
    <div className="mx-auto max-w-[1100px] px-5 py-7 sm:px-8">
      <Header
        title="Réceptions"
        subtitle="Enregistrer les entrées, leurs documents justificatifs et la mise à jour du stock."
        action="Nouvelle réception"
        icon={ArrowDownToLine}
        actionIcon={ArrowDownToLine}
      />

      <Cards summary={summary} />

      <DataLayout content={content} minWidth="min-w-[680px]" />
    </div>
  )
}
