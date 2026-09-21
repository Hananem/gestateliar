import { createFileRoute } from "@tanstack/react-router";
import { AdminWorkspace } from "@/features/admin/components/AdminWorkspace";

function UtilisateursPage() {
  return <AdminWorkspace page="users" />;
}

export const Route = createFileRoute("/admin/utilisateurs")({ component: UtilisateursPage });
