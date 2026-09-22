import { ClipboardCheck } from 'lucide-react'

import { Header } from '@/features/_shared/Header'
import { AuditTable } from '@/features/admin/audit/components/AuditTable'

export function AdminAudit() {
  return (
    <div className="mx-auto max-w-[1100px] px-5 py-7 sm:px-8">
      <Header
        title="Audit"
        subtitle="Historique des actions effectuées dans l’application."
        icon={ClipboardCheck}
      />

      <AuditTable />
    </div>
  )
}