import { useState } from 'react'

import { DataLayout } from '@/features/_shared/DataLayout'
import { DeleteModal } from '@/features/_shared/DeleteModal'
import {
  expensesColumns,
  type Expense,
} from './expenses-columns'

const expenses: Expense[] = [
  {
    id: 1,
    date: '22/09/2026',
    category: 'Électricité',
    amount: '24 500 DA',
    paymentMode: 'Espèces',
    beneficiary: 'Sonelgaz',
    receipt: 'REC-001',
    note: 'Facture septembre',
  },
  {
    id: 2,
    date: '20/09/2026',
    category: 'Transport',
    amount: '8 000 DA',
    paymentMode: 'Espèces',
    beneficiary: 'Transport Benali',
    receipt: 'REC-002',
    note: 'Transport matières',
  },
  {
    id: 3,
    date: '18/09/2026',
    category: 'Maintenance',
    amount: '15 000 DA',
    paymentMode: 'Virement',
    beneficiary: 'Atelier Maintenance',
    receipt: 'REC-003',
    note: 'Réparation machine',
  },
]

export function ExpensesTable() {
  const [deleteTarget, setDeleteTarget] = useState<Expense | null>(null)

  const handleViewExpense = (_expense: Expense) => {}
  const handleEditExpense = (_expense: Expense) => {}

  const handleDeleteExpense = (expense: Expense) => {
    setDeleteTarget(expense)
  }

  const confirmDeleteExpense = () => {
    if (!deleteTarget) return

    console.log('Suppression de', deleteTarget)
    setDeleteTarget(null)
  }

  const columns = expensesColumns({
    onView: handleViewExpense,
    onEdit: handleEditExpense,
    onDelete: handleDeleteExpense,
  })

  return (
    <div className="mt-4.5">
      <DataLayout
        columns={columns}
        data={expenses}
        minWidth="min-w-[1050px]"
      />

      <DeleteModal
        open={!!deleteTarget}
        onOpenChange={(v) => !v && setDeleteTarget(null)}
        itemName={deleteTarget?.category}
        onConfirm={confirmDeleteExpense}
      />
    </div>
  )
}