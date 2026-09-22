import { ShieldCheck, Plus } from 'lucide-react'

import { HeaderLink } from '@/features/_shared/HeaderLink'
import { Cards } from '@/features/_shared/Cards'
import { RolesTable } from '@/features/admin/roles/components/RolesTable'

const summary = [
  ['Rôles', '5', 'Rôles enregistrés'],
  ['Permissions', '24', 'Permissions disponibles'],
] as [string, string, string][]

export function AdminRoles() {
  return (
    <div className="mx-auto max-w-[1100px] px-5 py-7 sm:px-8">
      <HeaderLink
        title="Rôles"
        subtitle="Gestion des rôles et des permissions."
        action="Ajouter un rôle"
        to="/admin/roles/ajouter"
        icon={ShieldCheck}
        actionIcon={Plus}
      />

      <Cards summary={summary} />

      <RolesTable />
    </div>
  )
}