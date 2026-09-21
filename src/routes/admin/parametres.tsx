import { createFileRoute } from '@tanstack/react-router'
import { AdminWorkspace } from '@/features/admin/components/AdminWorkspace'

function ParametresPage() {
  return <AdminWorkspace page="settings" />
}

export const Route = createFileRoute('/admin/parametres')({
  component: ParametresPage,
})
