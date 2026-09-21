import { createFileRoute } from '@tanstack/react-router'
import { AdminUsers } from '@/features/admin/users/components/AdminUsers'

function UtilisateursPage() {
  return <AdminUsers />
}

export const Route = createFileRoute('/admin/utilisateurs')({
  component: UtilisateursPage,
})
