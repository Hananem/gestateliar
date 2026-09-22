import { Gift, Plus } from 'lucide-react'

import { HeaderLink } from '@/features/_shared/HeaderLink'
import { Cards } from '@/features/_shared/Cards'
import { PayrollBonusesTable } from './PayrollBonusesTable'

const summary = [
  ['Primes', '18', 'Primes enregistrées'],
  ['Ce mois', '6', 'Primes du mois'],
  ['Montant', '75 000 DA', 'Total des primes'],
] as [string, string, string][]

export function PayrollBonuses() {
  return (
    <div className="mx-auto max-w-[1100px] px-5 py-7 sm:px-8">
      <HeaderLink
        title="Primes"
        subtitle="Gestion des primes attribuées aux ouvriers."
        action="Ajouter une prime"
        to="/payroll/primes/ajouter"
        icon={Gift}
        actionIcon={Plus}
      />

      <Cards summary={summary} />

      <PayrollBonusesTable />
    </div>
  )
}