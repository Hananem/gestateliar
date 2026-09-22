import { useState } from 'react'

import { DataLayout } from '@/features/_shared/DataLayout'
import { DeleteModal } from '@/features/_shared/DeleteModal'
import { workersColumns, type Worker } from './workers-columns'

const workers: Worker[] = [
  {
    id: 1,
    code: 'OUV-001',
    name: 'Ahmed Benali',
    phone: '0555 12 34 56',
    entryDate: '12/03/2024',
    specialty: 'Assemblage',
    status: 'Actif',
    remunerationMode: 'À la pièce',
    activeRate: '45 DA',
  },
  {
    id: 2,
    code: 'OUV-002',
    name: 'Karim Haddad',
    phone: '0661 45 67 89',
    entryDate: '05/06/2024',
    specialty: 'Coupe',
    status: 'Actif',
    remunerationMode: 'À la journée',
    activeRate: '1 800 DA',
  },
  {
    id: 3,
    code: 'OUV-003',
    name: 'Nadia Mansouri',
    phone: '0770 23 45 67',
    entryDate: '18/01/2025',
    specialty: 'Finition',
    status: 'Actif',
    remunerationMode: 'À la pièce',
    activeRate: '35 DA',
  },
]

export function WorkersTable() {
  const [deleteTarget, setDeleteTarget] = useState<Worker | null>(null)

  const handleViewWorker = (_worker: Worker) => {}

  const handleEditWorker = (_worker: Worker) => {}

  const handleDeleteWorker = (worker: Worker) => {
    setDeleteTarget(worker)
  }

  const confirmDeleteWorker = () => {
    if (!deleteTarget) return

    console.log('Suppression de', deleteTarget)
    setDeleteTarget(null)
  }

  const columns = workersColumns({
    onView: handleViewWorker,
    onEdit: handleEditWorker,
    onDelete: handleDeleteWorker,
  })

  return (
    <div className="mt-4.5">
      <DataLayout
        columns={columns}
        data={workers}
        minWidth="min-w-[1100px]"
      />

      <DeleteModal
        open={!!deleteTarget}
        onOpenChange={(v) => !v && setDeleteTarget(null)}
        itemName={deleteTarget?.name}
        onConfirm={confirmDeleteWorker}
      />
    </div>
  )
}