import { createFileRoute } from '@tanstack/react-router'
import { TeamDailyWork } from '@/features/team/daily-work/components/TeamDailyWork'

function TravailPage() {
  return <TeamDailyWork />
}

export const Route = createFileRoute('/team/travail')({
  component: TravailPage,
})
