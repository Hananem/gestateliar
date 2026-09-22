import { DataLayout } from '@/features/_shared/DataLayout'
import { receiptsColumns, type Receipt } from './receipts-columns'

const receipts: Receipt[] = [
  {
    id: 1,
    reference: 'REC-260920-018',
    supplier: 'Tissus El Djazair',
    material: 'Jersey coton noir',
    quantity: '240 m',
    date: '20 sept. 2026',
  },
  {
    id: 2,
    reference: 'REC-260919-017',
    supplier: 'Filature de Tlemcen',
    material: 'Fil polyester 120',
    quantity: '40 bobines',
    date: '19 sept. 2026',
  },
  {
    id: 3,
    reference: 'REC-260918-016',
    supplier: 'Accessoires El Bahja',
    material: 'Bouton nacré 12 mm',
    quantity: '1 200 pièces',
    date: '18 sept. 2026',
  },
]

export function ReceiptsTable() {
  const columns = receiptsColumns()

  return (
    <DataLayout
      columns={columns}
      data={receipts}
      minWidth="min-w-[680px]"
    />
  )
}