import { createFileRoute } from '@tanstack/react-router'
import { AdminRoles } from '@/features/admin/roles/components/AdminRoles'

function RolesPermissionsPage() {
  return <AdminRoles />
}

export const Route = createFileRoute('/admin/roles-permissions')({
  component: RolesPermissionsPage,
})
