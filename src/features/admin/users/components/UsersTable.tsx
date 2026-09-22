import { useState } from 'react'

import { DataLayout } from '@/features/_shared/DataLayout'
import { DeleteModal } from '@/features/_shared/DeleteModal'
import {
  usersColumns,
  type AdminUser,
} from './users-columns'

const users: AdminUser[] = [
  {
    id: 1,
    name: 'Admin',
    email: 'admin@example.com',
    role: 'Administrateur',
    status: 'Actif',
  },
  {
    id: 2,
    name: 'Responsable',
    email: 'responsable@example.com',
    role: 'Responsable',
    status: 'Actif',
  },
  {
    id: 3,
    name: 'Comptable',
    email: 'comptable@example.com',
    role: 'Comptable',
    status: 'Actif',
  },
]

export function UsersTable() {
  const [deleteTarget, setDeleteTarget] = useState<AdminUser | null>(null)

  const handleView = (_user: AdminUser) => {}
  const handleEdit = (_user: AdminUser) => {}

  const handleDelete = (user: AdminUser) => {
    setDeleteTarget(user)
  }

  const confirmDelete = () => {
    if (!deleteTarget) return

    console.log('Suppression de', deleteTarget)
    setDeleteTarget(null)
  }

  const columns = usersColumns({
    onView: handleView,
    onEdit: handleEdit,
    onDelete: handleDelete,
  })

  return (
    <div className="mt-4.5">
      <DataLayout
        columns={columns}
        data={users}
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