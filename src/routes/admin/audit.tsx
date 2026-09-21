import { createFileRoute } from '@tanstack/react-router'
import { AdminWorkspace } from '@/features/admin/components/AdminWorkspace'

function AuditPage() {
  return <AdminWorkspace page="audit" />
}

export const Route = createFileRoute('/admin/audit')({ component: AuditPage })
