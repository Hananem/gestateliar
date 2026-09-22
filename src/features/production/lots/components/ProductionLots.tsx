import { Factory, Plus } from 'lucide-react'

import { HeaderLink } from '@/features/_shared/HeaderLink'
import { Cards } from '@/features/_shared/Cards'
import { LotsTable } from '@/features/production/lots/components/LotsTable'

const summary = [
  ['Lots', '18', 'Lots de production'],
  ['En cours', '7', 'Production active'],
  ['Planifiés', '5', 'À venir'],
  ['Terminés', '6', 'Ce mois'],
] as [string, string, string][]

export function ProductionLots() {
  return (
    <div className="mx-auto max-w-[1100px] px-5 py-7 sm:px-8">
      <HeaderLink
        title="Lots de production"
        subtitle="Planification, suivi et gestion des lots de production."
        action="Créer un lot"
        to="/production/lots/ajouter"
        icon={Factory}
        actionIcon={Plus}
      />

      <Cards summary={summary} />

      <LotsTable />
    </div>
  )
}