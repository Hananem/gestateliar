import { ClipboardList, Plus } from 'lucide-react'

import { HeaderLink } from '@/features/_shared/HeaderLink'
import { Cards } from '@/features/_shared/Cards'
import { DailyWorkTable } from '@/features/team/daily-work/components/DailyWorkTable'

const summary = [
  ['Travail journalier', '128', 'Saisies enregistrées'],
  ['Validés', '96', 'Travaux validés'],
  ['En attente', '24', 'À valider'],
  ['Rejets', '8', 'Quantités rejetées'],
] as [string, string, string][]

export function TeamDailyWork() {
  return (
    <div className="mx-auto max-w-[1100px] px-5 py-7 sm:px-8">
      <HeaderLink
        title="Travail journalier"
        subtitle="Saisie et validation du travail effectué par les ouvriers."
        action="Ajouter une saisie"
        to="/team/travail/ajouter"
        icon={ClipboardList}
        actionIcon={Plus}
      />

      <Cards summary={summary} />

      <DailyWorkTable />
    </div>
  )
}