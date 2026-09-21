import { createFileRoute } from '@tanstack/react-router'
import { AdminAudit } from '@/features/admin/audit/components/AdminAudit'

function AuditPage() {
  return <AdminAudit />
}

export const Route = createFileRoute('/admin/audit')({ component: AuditPage })
