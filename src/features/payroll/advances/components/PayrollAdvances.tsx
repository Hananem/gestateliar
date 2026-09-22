import { Wallet, Plus } from 'lucide-react'

import { HeaderLink } from '@/features/_shared/HeaderLink'
import { Cards } from '@/features/_shared/Cards'
import { PayrollAdvancesTable } from './PayrollAdvancesTable'

const summary = [
  ['Avances', '24', 'Avances enregistrées'],
  ['Ce mois', '8', 'Avances du mois'],
  ['Montant', '185 000 DA', 'Total des avances'],
] as [string, string, string][]

export function PayrollAdvances() {
  return (
    <div className="mx-auto max-w-[1100px] px-5 py-7 sm:px-8">
      <HeaderLink
        title="Avances"
        subtitle="Gestion des avances versées aux ouvriers."
        action="Ajouter une avance"
        to="/payroll/avances/ajouter"
        icon={Wallet}
        actionIcon={Plus}
      />

      <Cards summary={summary} />

      <PayrollAdvancesTable />
    </div>
  )
}