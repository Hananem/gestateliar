import { DataLayout } from '@/features/_shared/DataLayout'
import {
  auditColumns,
  type AuditEntry,
} from './audit-columns'

const auditEntries: AuditEntry[] = [
  {
    id: 1,
    date: '22/09/2026 10:32',
    user: 'Admin',
    action: 'Création',
    entity: 'Ouvrier',
    description: 'Création de l’ouvrier OUV-001',
  },
  {
    id: 2,
    date: '22/09/2026 09:45',
    user: 'Responsable',
    action: 'Modification',
    entity: 'Lot',
    description: 'Modification du lot LOT-001',
  },
  {
    id: 3,
    date: '21/09/2026 16:20',
    user: 'Admin',
    action: 'Validation',
    entity: 'Travail',
    description: 'Validation d’une saisie de travail',
  },
]

export function AuditTable() {
  return (
    <div className="mt-4.5">
      <DataLayout
        columns={auditColumns}
        data={auditEntries}
        minWidth="min-w-[950px]"
      />
    </div>
  )
}