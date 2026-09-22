import { DataLayout } from '@/features/_shared/DataLayout'
import { alertsColumns, type Alert } from './alerts-columns'

const alerts: Alert[] = [
  {
    id: 1,
    material: 'Lycra bleu nuit',
    currentQuantity: '8 m',
    alertThreshold: '20 m',
    supplier: 'Tissus El Djazair',
    priority: 'Urgente',
  },
  {
    id: 2,
    material: 'Fil polyester 120',
    currentQuantity: '28 bobines',
    alertThreshold: '30 bobines',
    supplier: 'Filature de Tlemcen',
    priority: 'À surveiller',
  },
  {
    id: 3,
    material: 'RL-2026-039 · Popeline',
    currentQuantity: '12 m',
    alertThreshold: '15 m',
    supplier: 'Tissages de Sétif',
    priority: 'Rouleau faible',
  },
]

export function AlertsTable() {
  const columns = alertsColumns()

  return (
     <div className="mt-4.5"> 
    <DataLayout
      columns={columns}
      data={alerts}
      minWidth="min-w-[680px]"
    />
    </div>
  )
}