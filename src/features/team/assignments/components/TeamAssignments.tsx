import { ClipboardList, Plus } from 'lucide-react'

import { HeaderLink } from '@/features/_shared/HeaderLink'
import { Cards } from '@/features/_shared/Cards'
import { AssignmentsTable } from '@/features/team/assignments/components/AssignmentsTable'

const summary = [
  ['Affectations', '86', 'Affectations enregistrées'],
  ['En cours', '32', 'Affectations actives'],
  ['Ouvriers affectés', '36', 'Ce mois'],
  ['Articles concernés', '18', 'Articles en production'],
] as [string, string, string][]

export function TeamAssignments() {
  return (
    <div className="mx-auto max-w-[1100px] px-5 py-7 sm:px-8">
      <HeaderLink
        title="Affectations"
        subtitle="Affectation des ouvriers aux articles et aux opérations de production."
        action="Ajouter une affectation"
        to="/team/affectations/ajouter"
        icon={ClipboardList}
        actionIcon={Plus}
      />

      <Cards summary={summary} />

      <AssignmentsTable />
    </div>
  )
}