import { createFileRoute } from "@tanstack/react-router";
import { Subpage } from "@/features/_shared/Subpage";

function AuditPage() {
  return <Subpage title="Audit" subtitle="Historique des actions effectuées dans l’application." />;
}

export const Route = createFileRoute("/admin/audit")({ component: AuditPage });
