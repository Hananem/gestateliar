import { createFileRoute } from "@tanstack/react-router";
import { TeamPage } from "@/features/team/team";

export const Route = createFileRoute("/team")({ component: TeamPage });