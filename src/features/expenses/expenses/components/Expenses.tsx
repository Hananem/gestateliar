import { Receipt, Plus } from 'lucide-react'

import { HeaderLink } from '@/features/_shared/HeaderLink'
import { Cards } from '@/features/_shared/Cards'
import { ExpensesTable } from '@/features/expenses/expenses/components/ExpensesTable'

const summary = [
  ['Dépenses', '156', 'Dépenses enregistrées'],
  ['Ce mois', '42', 'Dépenses du mois'],
  ['Montant', '385 000 DA', 'Total ce mois'],
] as [string, string, string][]

export function Expenses() {
  return (
    <div className="mx-auto max-w-[1100px] px-5 py-7 sm:px-8">
      <HeaderLink
        title="Dépenses"
        subtitle="Saisie et suivi des dépenses de l'atelier."
        action="Ajouter une dépense"
        to="/expenses/depenses/ajouter"
        icon={Receipt}
        actionIcon={Plus}
      />

      <Cards summary={summary} />

      <ExpensesTable />
    </div>
  )
}