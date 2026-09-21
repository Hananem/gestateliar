import { createFileRoute } from '@tanstack/react-router'
import { TeamAssignments } from '@/features/team/assignments/components/TeamAssignments'

function AffectationsPage() {
  return <TeamAssignments />
}

export const Route = createFileRoute('/team/affectations')({
  component: AffectationsPage,
})
