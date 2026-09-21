import { createFileRoute } from '@tanstack/react-router'
import { TeamWorkers } from '@/features/team/workers/components/TeamWorkers'

function OuvriersPage() {
  return <TeamWorkers />
}

export const Route = createFileRoute('/team/ouvriers')({
  component: OuvriersPage,
})
