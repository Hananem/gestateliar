import { Users, Plus } from 'lucide-react'

import { HeaderLink } from '@/features/_shared/HeaderLink'
import { Cards } from '@/features/_shared/Cards'
import { UsersTable } from '@/features/admin/users/components/UsersTable'

const summary = [
  ['Utilisateurs', '12', 'Utilisateurs enregistrés'],
  ['Actifs', '10', 'Comptes actifs'],
  ['Inactifs', '2', 'Comptes désactivés'],
] as [string, string, string][]

export function AdminUsers() {
  return (
    <div className="mx-auto max-w-[1100px] px-5 py-7 sm:px-8">
      <HeaderLink
        title="Utilisateurs"
        subtitle="Gestion des utilisateurs de l'application."
        action="Ajouter un utilisateur"
        to="/admin/utilisateurs/ajouter"
        icon={Users}
        actionIcon={Plus}
      />

      <Cards summary={summary} />

      <UsersTable />
    </div>
  )
}