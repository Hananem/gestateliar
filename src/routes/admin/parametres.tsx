import { createFileRoute } from '@tanstack/react-router'
import { AdminSettings } from '@/features/admin/settings/components/AdminSettings'

function ParametresPage() {
  return <AdminSettings />
}

export const Route = createFileRoute('/admin/parametres')({
  component: ParametresPage,
})
