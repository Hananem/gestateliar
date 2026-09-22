import { DataLayout } from '@/features/_shared/DataLayout'
import { movementsColumns, type Movement } from './movements-columns'

const movements: Movement[] = [
  {
    id: 1,
    date: '20 sept. · 08:01',
    type: 'Sortie',
    material: 'Jersey coton noir',
    quantity: '-46 m',
    user: 'Fatima M.',
  },
  {
    id: 2,
    date: '20 sept. · 07:42',
    type: 'Réception',
    material: 'Jersey coton noir',
    quantity: '+240 m',
    user: 'Nadia K.',
  },
  {
    id: 3,
    date: '19 sept. · 16:18',
    type: 'Retour',
    material: 'Fil polyester 120',
    quantity: '+2 bobines',
    user: 'Yacine B.',
  },
]

export function MovementsTable() {
  const columns = movementsColumns()

  return (
    <DataLayout
      columns={columns}
      data={movements}
      minWidth="min-w-[680px]"
    />
  )
}