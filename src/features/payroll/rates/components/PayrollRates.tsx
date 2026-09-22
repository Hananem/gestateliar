import { Banknote, Plus } from 'lucide-react'

import { HeaderLink } from '@/features/_shared/HeaderLink'
import { Cards } from '@/features/_shared/Cards'
import { PayrollRatesTable } from './PayrollRatesTable'

const summary = [
  ['Barèmes', '12', 'Barèmes enregistrés'],
  ['Actifs', '10', 'Barèmes actifs'],
] as [string, string, string][]

export function PayrollRates() {
  return (
    <div className="mx-auto max-w-[1100px] px-5 py-7 sm:px-8">
      <HeaderLink
        title="Barèmes"
        subtitle="Gestion des tarifs de rémunération des ouvriers."
        action="Ajouter un barème"
        to="/payroll/baremes/ajouter"
        icon={Banknote}
        actionIcon={Plus}
      />

      <Cards summary={summary} />

      <PayrollRatesTable />
    </div>
  )
}