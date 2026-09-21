import { createFileRoute } from '@tanstack/react-router'
import { TeamWorkspace } from '@/features/team/components/TeamWorkspace'

function TravailPage() {
  return <TeamWorkspace page="dailyWork" />
}

export const Route = createFileRoute('/team/travail')({
  component: TravailPage,
})
