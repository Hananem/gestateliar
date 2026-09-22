import { useState } from 'react'

import { DataLayout } from '@/features/_shared/DataLayout'
import { DeleteModal } from '@/features/_shared/DeleteModal'
import {
  payrollBonusesColumns,
  type PayrollBonus,
} from './payroll-bonuses-columns'

const payrollBonuses: PayrollBonus[] = [
  {
    id: 1,
    date: '05/09/2026',
    worker: 'Ahmed Benali',
    type: 'Prime de rendement',
    amount: '15 000 DA',
    reason: 'Objectif de production atteint',
  },
  {
    id: 2,
    date: '10/09/2026',
    worker: 'Nadia Mansouri',
    type: 'Prime exceptionnelle',
    amount: '10 000 DA',
    reason: 'Qualité du travail',
  },
]

export function PayrollBonusesTable() {
  const [deleteTarget, setDeleteTarget] =
    useState<PayrollBonus | null>(null)

  const handleView = (_bonus: PayrollBonus) => {}
  const handleEdit = (_bonus: PayrollBonus) => {}

  const handleDelete = (bonus: PayrollBonus) => {
    setDeleteTarget(bonus)
  }

  const confirmDelete = () => {
    if (!deleteTarget) return

    console.log('Suppression de', deleteTarget)
    setDeleteTarget(null)
  }

  const columns = payrollBonusesColumns({
    onView: handleView,
    onEdit: handleEdit,
    onDelete: handleDelete,
  })

  return (
    <div className="mt-4.5">
      <DataLayout
        columns={columns}
        data={payrollBonuses}
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