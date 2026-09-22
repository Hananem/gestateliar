import { useState } from 'react'

import { DataLayout } from '@/features/_shared/DataLayout'
import { DeleteModal } from '@/features/_shared/DeleteModal'
import {
  assignmentsColumns,
  type Assignment,
} from './assignments-columns'

const assignments: Assignment[] = [
  {
    id: 1,
    worker: 'Ahmed Benali',
    article: 'Chemise Classic',
    operation: 'Assemblage',
    startDate: '01/10/2026',
    endDate: '15/10/2026',
    status: 'En cours',
  },
  {
    id: 2,
    worker: 'Karim Haddad',
    article: 'Pantalon Basic',
    operation: 'Coupe',
    startDate: '05/10/2026',
    endDate: '20/10/2026',
    status: 'En cours',
  },
  {
    id: 3,
    worker: 'Nadia Mansouri',
    article: 'Veste Work',
    operation: 'Finition',
    startDate: '10/09/2026',
    endDate: '25/09/2026',
    status: 'Terminée',
  },
]

export function AssignmentsTable() {
  const [deleteTarget, setDeleteTarget] = useState<Assignment | null>(null)

  const handleViewAssignment = (_assignment: Assignment) => {}

  const handleEditAssignment = (_assignment: Assignment) => {}

  const handleDeleteAssignment = (assignment: Assignment) => {
    setDeleteTarget(assignment)
  }

  const confirmDeleteAssignment = () => {
    if (!deleteTarget) return

    console.log('Suppression de', deleteTarget)
    setDeleteTarget(null)
  }

  const columns = assignmentsColumns({
    onView: handleViewAssignment,
    onEdit: handleEditAssignment,
    onDelete: handleDeleteAssignment,
  })

  return (
    <div className="mt-4.5">
      <DataLayout
        columns={columns}
        data={assignments}
        minWidth="min-w-[1050px]"
      />

      <DeleteModal
        open={!!deleteTarget}
        onOpenChange={(v) => !v && setDeleteTarget(null)}
        itemName={deleteTarget?.worker}
        onConfirm={confirmDeleteAssignment}
      />
    </div>
  )
}