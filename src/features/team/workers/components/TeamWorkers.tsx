import { Users, Plus } from 'lucide-react'

import { HeaderLink } from '@/features/_shared/HeaderLink'
import { Cards } from '@/features/_shared/Cards'
import { WorkersTable } from '@/features/team/workers/components/WorkersTable'

const summary = [
  ['Ouvriers', '42', 'Personnel enregistré'],
  ['Actifs', '36', 'En activité'],
  ['Inactifs', '6', 'Hors activité'],
  ['Spécialités', '8', 'Métiers enregistrés'],
] as [string, string, string][]

export function TeamWorkers() {
  return (
    <div className="mx-auto max-w-[1100px] px-5 py-7 sm:px-8">
      <HeaderLink
        title="Ouvriers"
        subtitle="Gestion des ouvriers, spécialités et modes de rémunération."
        action="Ajouter un ouvrier"
        to="/team/ouvriers/ajouter"
        icon={Users}
        actionIcon={Plus}
      />

      <Cards summary={summary} />

      <WorkersTable />
    </div>
  )
}