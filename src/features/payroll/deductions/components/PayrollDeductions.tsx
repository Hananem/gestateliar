import { CircleMinus, Plus } from 'lucide-react'

import { HeaderLink } from '@/features/_shared/HeaderLink'
import { Cards } from '@/features/_shared/Cards'
import { PayrollDeductionsTable } from './PayrollDeductionsTable'

const summary = [
  ['Retenues', '15', 'Retenues enregistrées'],
  ['Ce mois', '5', 'Retenues du mois'],
  ['Montant', '42 000 DA', 'Total des retenues'],
] as [string, string, string][]

export function PayrollDeductions() {
  return (
    <div className="mx-auto max-w-[1100px] px-5 py-7 sm:px-8">
      <HeaderLink
        title="Retenues"
        subtitle="Gestion des retenues appliquées aux rémunérations."
        action="Ajouter une retenue"
        to="/payroll/retenues/ajouter"
        icon={CircleMinus}
        actionIcon={Plus}
      />

      <Cards summary={summary} />

      <PayrollDeductionsTable />
    </div>
  )
}
