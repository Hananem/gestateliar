import { createFileRoute } from "@tanstack/react-router";
import { Subpage } from "@/features/_shared/Subpage";

function RolesPermissionsPage() {
  return <Subpage title="Rôles & permissions" subtitle="Gestion des rôles et des permissions." />;
}

export const Route = createFileRoute("/admin/roles-permissions")({ component: RolesPermissionsPage });
