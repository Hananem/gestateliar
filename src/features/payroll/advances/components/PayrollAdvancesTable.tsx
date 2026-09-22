import { useState } from 'react'

import { DataLayout } from '@/features/_shared/DataLayout'
import { DeleteModal } from '@/features/_shared/DeleteModal'
import {
  payrollAdvancesColumns,
  type PayrollAdvance,
} from './payroll-advances-columns'

const payrollAdvances: PayrollAdvance[] = [
  {
    id: 1,
    date: '05/09/2026',
    worker: 'Ahmed Benali',
    amount: '20 000 DA',
    deductionMonth: 'Septembre 2026',
    reason: 'Avance sur salaire',
  },
  {
    id: 2,
    date: '10/09/2026',
    worker: 'Karim Haddad',
    amount: '15 000 DA',
    deductionMonth: 'Septembre 2026',
    reason: 'Avance exceptionnelle',
  },
]

export function PayrollAdvancesTable() {
  const [deleteTarget, setDeleteTarget] =
    useState<PayrollAdvance | null>(null)

  const handleView = (_advance: PayrollAdvance) => {}
  const handleEdit = (_advance: PayrollAdvance) => {}

  const handleDelete = (advance: PayrollAdvance) => {
    setDeleteTarget(advance)
  }

  const confirmDelete = () => {
    if (!deleteTarget) return

    console.log('Suppression de', deleteTarget)
    setDeleteTarget(null)
  }

  const columns = payrollAdvancesColumns({
    onView: handleView,
    onEdit: handleEdit,
    onDelete: handleDelete,
  })

  return (
    <div className="mt-4.5">
      <DataLayout
        columns={columns}
        data={payrollAdvances}
        minWidth="min-w-[900px]"
      />

      <DeleteModal
        open={!!deleteTarget}
        onOpenChange={(v) => !v && setDeleteTarget(null)}
        itemName={deleteTarget?.worker}
        onConfirm={confirmDelete}
      />
    </div>
  )
}