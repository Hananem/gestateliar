import { useState } from 'react'

import { DataLayout } from '@/features/_shared/DataLayout'
import { DeleteModal } from '@/features/_shared/DeleteModal'
import {
  payrollDeductionsColumns,
  type PayrollDeduction,
} from './payroll-deductions-columns'

const payrollDeductions: PayrollDeduction[] = [
  {
    id: 1,
    date: '08/09/2026',
    worker: 'Ahmed Benali',
    type: 'Retenue',
    amount: '5 000 DA',
    reason: 'Absence non justifiée',
  },
  {
    id: 2,
    date: '12/09/2026',
    worker: 'Karim Haddad',
    type: 'Retenue exceptionnelle',
    amount: '3 000 DA',
    reason: 'Correction',
  },
]

export function PayrollDeductionsTable() {
  const [deleteTarget, setDeleteTarget] =
    useState<PayrollDeduction | null>(null)

  const handleView = (_deduction: PayrollDeduction) => {}
  const handleEdit = (_deduction: PayrollDeduction) => {}

  const handleDelete = (deduction: PayrollDeduction) => {
    setDeleteTarget(deduction)
  }

  const confirmDelete = () => {
    if (!deleteTarget) return

    console.log('Suppression de', deleteTarget)
    setDeleteTarget(null)
  }

  const columns = payrollDeductionsColumns({
    onView: handleView,
    onEdit: handleEdit,
    onDelete: handleDelete,
  })

  return (
    <div className="mt-4.5">
      <DataLayout
        columns={columns}
        data={payrollDeductions}
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