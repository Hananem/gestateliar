import { useState } from 'react'

import { DataLayout } from '@/features/_shared/DataLayout'
import { DeleteModal } from '@/features/_shared/DeleteModal'
import {
  expenseCategoriesColumns,
  type ExpenseCategory,
} from './expense-categories-columns'

const categories: ExpenseCategory[] = [
  {
    id: 1,
    name: 'Loyer',
    description: 'Loyer de l’atelier',
    status: 'Active',
  },
  {
    id: 2,
    name: 'Électricité',
    description: 'Factures d’électricité',
    status: 'Active',
  },
  {
    id: 3,
    name: 'Transport',
    description: 'Frais de transport',
    status: 'Active',
  },
  {
    id: 4,
    name: 'Maintenance',
    description: 'Entretien et réparation',
    status: 'Active',
  },
]

export function ExpenseCategoriesTable() {
  const [deleteTarget, setDeleteTarget] =
    useState<ExpenseCategory | null>(null)

  const handleViewCategory = (_category: ExpenseCategory) => {}
  const handleEditCategory = (_category: ExpenseCategory) => {}

  const handleDeleteCategory = (category: ExpenseCategory) => {
    setDeleteTarget(category)
  }

  const confirmDeleteCategory = () => {
    if (!deleteTarget) return

    console.log('Suppression de', deleteTarget)
    setDeleteTarget(null)
  }

  const columns = expenseCategoriesColumns({
    onView: handleViewCategory,
    onEdit: handleEditCategory,
    onDelete: handleDeleteCategory,
  })

  return (
    <div className="mt-4.5">
      <DataLayout
        columns={columns}
        data={categories}
        minWidth="min-w-[700px]"
      />

      <DeleteModal
        open={!!deleteTarget}
        onOpenChange={(v) => !v && setDeleteTarget(null)}
        itemName={deleteTarget?.name}
        onConfirm={confirmDeleteCategory}
      />
    </div>
  )
}