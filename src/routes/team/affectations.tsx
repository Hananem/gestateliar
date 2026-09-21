import { createFileRoute } from "@tanstack/react-router";
import { TeamWorkspace } from "@/features/team/components/TeamWorkspace";

function AffectationsPage() {
  return <TeamWorkspace page="assignments" />;
}

export const Route = createFileRoute("/team/affectations")({ component: AffectationsPage });
