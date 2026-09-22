import { useState } from 'react'

import { DataLayout } from '@/features/_shared/DataLayout'
import { DeleteModal } from '@/features/_shared/DeleteModal'
import {
  payrollRatesColumns,
  type PayrollRate,
} from './payroll-rates-columns'

const payrollRates: PayrollRate[] = [
  {
    id: 1,
    worker: 'Ahmed Benali',
    remunerationMode: 'À la pièce',
    operation: 'Assemblage',
    rate: '45 DA',
    effectiveDate: '01/01/2026',
    status: 'Actif',
  },
  {
    id: 2,
    worker: 'Karim Haddad',
    remunerationMode: 'À la journée',
    operation: 'Coupe',
    rate: '1 800 DA',
    effectiveDate: '01/01/2026',
    status: 'Actif',
  },
  {
    id: 3,
    worker: 'Nadia Mansouri',
    remunerationMode: 'À la pièce',
    operation: 'Finition',
    rate: '35 DA',
    effectiveDate: '01/02/2026',
    status: 'Actif',
  },
]

export function PayrollRatesTable() {
  const [deleteTarget, setDeleteTarget] = useState<PayrollRate | null>(null)

  const handleView = (_rate: PayrollRate) => {}
  const handleEdit = (_rate: PayrollRate) => {}

  const handleDelete = (rate: PayrollRate) => {
    setDeleteTarget(rate)
  }

  const confirmDelete = () => {
    if (!deleteTarget) return

    console.log('Suppression de', deleteTarget)
    setDeleteTarget(null)
  }

  const columns = payrollRatesColumns({
    onView: handleView,
    onEdit: handleEdit,
    onDelete: handleDelete,
  })

  return (
    <div className="mt-4.5">
      <DataLayout
        columns={columns}
        data={payrollRates}
        minWidth="min-w-[1000px]"
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