import { createFileRoute } from "@tanstack/react-router";
import { AdminWorkspace } from "@/features/admin/components/AdminWorkspace";

function RolesPermissionsPage() {
  return <AdminWorkspace page="roles" />;
}

export const Route = createFileRoute("/admin/roles-permissions")({ component: RolesPermissionsPage });
