import { useState } from 'react'

import { DataLayout } from '@/features/_shared/DataLayout'
import { DeleteModal } from '@/features/_shared/DeleteModal'
import {
  lotsColumns,
  type ProductionLot,
} from './lots-columns'

const lots: ProductionLot[] = [
  {
    id: 1,
    number: 'LOT-001',
    article: 'Chemise Classic',
    plannedQuantity: 500,
    startDate: '01/10/2026',
    targetDate: '15/10/2026',
    responsible: 'Ahmed Benali',
    status: 'En cours',
    progress: 68,
  },
  {
    id: 2,
    number: 'LOT-002',
    article: 'Pantalon Basic',
    plannedQuantity: 300,
    startDate: '05/10/2026',
    targetDate: '20/10/2026',
    responsible: 'Karim Haddad',
    status: 'Planifié',
    progress: 0,
  },
  {
    id: 3,
    number: 'LOT-003',
    article: 'Veste Work',
    plannedQuantity: 200,
    startDate: '10/09/2026',
    targetDate: '25/09/2026',
    responsible: 'Ahmed Benali',
    status: 'Terminé',
    progress: 100,
  },
]

export function LotsTable() {
  const [deleteTarget, setDeleteTarget] =
    useState<ProductionLot | null>(null)

  const handleViewLot = (_lot: ProductionLot) => {
    // ouvrir le détail du lot
  }

  const handleEditLot = (_lot: ProductionLot) => {
    // ouvrir la modification
  }

  const handleDeleteLot = (lot: ProductionLot) => {
    setDeleteTarget(lot)
  }

  const confirmDeleteLot = () => {
    if (!deleteTarget) return

    console.log('Suppression de', deleteTarget)
    setDeleteTarget(null)
  }

  const columns = lotsColumns({
    onView: handleViewLot,
    onEdit: handleEditLot,
    onDelete: handleDeleteLot,
  })

  return (
    <div className="mt-4.5">
      <DataLayout
        columns={columns}
        data={lots}
        minWidth="min-w-[1100px]"
      />

      <DeleteModal
        open={!!deleteTarget}
        onOpenChange={(v) => !v && setDeleteTarget(null)}
        itemName={deleteTarget?.number}
        onConfirm={confirmDeleteLot}
      />
    </div>
  )
}