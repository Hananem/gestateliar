import { useState } from 'react'

import { DataLayout } from '@/features/_shared/DataLayout'
import { DeleteModal } from '@/features/_shared/DeleteModal'
import {
  rolesColumns,
  type AdminRole,
} from './roles-columns'

const roles: AdminRole[] = [
  {
    id: 1,
    name: 'Administrateur',
    description: 'Accès complet à l’application',
    usersCount: 1,
  },
  {
    id: 2,
    name: 'Responsable',
    description: 'Gestion de la production et du personnel',
    usersCount: 2,
  },
  {
    id: 3,
    name: 'Comptable',
    description: 'Gestion de la paie et des dépenses',
    usersCount: 1,
  },
]

export function RolesTable() {
  const [deleteTarget, setDeleteTarget] = useState<AdminRole | null>(null)

  const handleView = (_role: AdminRole) => {}
  const handleEdit = (_role: AdminRole) => {}

  const handleDelete = (role: AdminRole) => {
    setDeleteTarget(role)
  }

  const confirmDelete = () => {
    if (!deleteTarget) return

    console.log('Suppression de', deleteTarget)
    setDeleteTarget(null)
  }

  const columns = rolesColumns({
    onView: handleView,
    onEdit: handleEdit,
    onDelete: handleDelete,
  })

  return (
    <div className="mt-4.5">
      <DataLayout
        columns={columns}
        data={roles}
        minWidth="min-w-[850px]"
      />

      <DeleteModal
        open={!!deleteTarget}
        onOpenChange={(v) => !v && setDeleteTarget(null)}
        itemName={deleteTarget?.name}
        onConfirm={confirmDelete}
      />
    </div>
  )
}