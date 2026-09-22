import { useState } from 'react'

import { DataLayout } from '@/features/_shared/DataLayout'
import { DeleteModal } from '@/features/_shared/DeleteModal'
import {
  dailyWorkColumns,
  type DailyWork,
} from './daily-work-columns'

const dailyWork: DailyWork[] = [
  {
    id: 1,
    date: '22/09/2026',
    worker: 'Ahmed Benali',
    lot: 'LOT-001',
    article: 'Chemise classique',
    operation: 'Assemblage',
    declaredQuantity: 120,
    acceptedQuantity: 115,
    rejectedQuantity: 5,
    rate: '45 DA',
    status: 'Validé',
  },
  {
    id: 2,
    date: '22/09/2026',
    worker: 'Karim Haddad',
    lot: 'LOT-002',
    article: 'Pantalon',
    operation: 'Coupe',
    declaredQuantity: 80,
    acceptedQuantity: 80,
    rejectedQuantity: 0,
    rate: '1 800 DA',
    status: 'En attente',
  },
  {
    id: 3,
    date: '21/09/2026',
    worker: 'Nadia Mansouri',
    lot: 'LOT-001',
    article: 'Chemise classique',
    operation: 'Finition',
    declaredQuantity: 100,
    acceptedQuantity: 96,
    rejectedQuantity: 4,
    rate: '35 DA',
    status: 'Validé',
  },
]

export function DailyWorkTable() {
  const [deleteTarget, setDeleteTarget] = useState<DailyWork | null>(null)

  const handleViewWork = (_work: DailyWork) => {}
  const handleEditWork = (_work: DailyWork) => {}

  const handleDeleteWork = (work: DailyWork) => {
    setDeleteTarget(work)
  }

  const confirmDeleteWork = () => {
    if (!deleteTarget) return

    console.log('Suppression de', deleteTarget)
    setDeleteTarget(null)
  }

  const columns = dailyWorkColumns({
    onView: handleViewWork,
    onEdit: handleEditWork,
    onDelete: handleDeleteWork,
  })

  return (
    <div className="mt-4.5">
      <DataLayout
        columns={columns}
        data={dailyWork}
        minWidth="min-w-[1250px]"
      />

      <DeleteModal
        open={!!deleteTarget}
        onOpenChange={(v) => !v && setDeleteTarget(null)}
        itemName={deleteTarget?.worker}
        onConfirm={confirmDeleteWork}
      />
    </div>
  )
}