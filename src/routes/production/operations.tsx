import { createFileRoute } from "@tanstack/react-router";
import { Subpage } from "@/features/_shared/Subpage";

function OperationsPage() {
  return <Subpage title="Opérations" subtitle="Organisation des opérations de production." />;
}

export const Route = createFileRoute("/production/operations")({ component: OperationsPage });
