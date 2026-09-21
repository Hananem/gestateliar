import { createFileRoute } from '@tanstack/react-router'
import { TeamWorkspace } from '@/features/team/components/TeamWorkspace'

function OuvriersPage() {
  return <TeamWorkspace page="workers" />
}

export const Route = createFileRoute('/team/ouvriers')({
  component: OuvriersPage,
})
