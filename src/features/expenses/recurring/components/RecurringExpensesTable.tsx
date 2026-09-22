import { useState } from 'react'

import { DataLayout } from '@/features/_shared/DataLayout'
import { DeleteModal } from '@/features/_shared/DeleteModal'
import {
  recurringExpensesColumns,
  type RecurringExpense,
} from './recurring-expenses-columns'

const recurringExpenses: RecurringExpense[] = [
  {
    id: 1,
    name: 'Loyer atelier',
    category: 'Loyer',
    amount: '80 000 DA',
    frequency: 'Mensuelle',
    nextDate: '01/10/2026',
    status: 'Active',
  },
  {
    id: 2,
    name: 'Électricité',
    category: 'Électricité',
    amount: '25 000 DA',
    frequency: 'Mensuelle',
    nextDate: '05/10/2026',
    status: 'Active',
  },
  {
    id: 3,
    name: 'Internet',
    category: 'Services',
    amount: '4 000 DA',
    frequency: 'Mensuelle',
    nextDate: '10/10/2026',
    status: 'Active',
  },
]

export function RecurringExpensesTable() {
  const [deleteTarget, setDeleteTarget] =
    useState<RecurringExpense | null>(null)

  const handleViewExpense = (_expense: RecurringExpense) => {}
  const handleEditExpense = (_expense: RecurringExpense) => {}

  const handleDeleteExpense = (expense: RecurringExpense) => {
    setDeleteTarget(expense)
  }

  const confirmDeleteExpense = () => {
    if (!deleteTarget) return

    console.log('Suppression de', deleteTarget)
    setDeleteTarget(null)
  }

  const columns = recurringExpensesColumns({
    onView: handleViewExpense,
    onEdit: handleEditExpense,
    onDelete: handleDeleteExpense,
  })

  return (
    <div className="mt-4.5">
      <DataLayout
        columns={columns}
        data={recurringExpenses}
        minWidth="min-w-[950px]"
      />

      <DeleteModal
        open={!!deleteTarget}
        onOpenChange={(v) => !v && setDeleteTarget(null)}
        itemName={deleteTarget?.name}
        onConfirm={confirmDeleteExpense}
      />
    </div>
  )
}