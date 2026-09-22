import { Repeat, Plus } from 'lucide-react'

import { HeaderLink } from '@/features/_shared/HeaderLink'
import { Cards } from '@/features/_shared/Cards'
import { RecurringExpensesTable } from '@/features/expenses/recurring/components/RecurringExpensesTable'

const summary = [
  ['Dépenses récurrentes', '6', 'Dépenses configurées'],
  ['Actives', '5', 'Dépenses actives'],
  ['Mensuelles', '5', 'Récurrence mensuelle'],
] as [string, string, string][]

export function RecurringExpenses() {
  return (
    <div className="mx-auto max-w-[1100px] px-5 py-7 sm:px-8">
      <HeaderLink
        title="Dépenses récurrentes"
        subtitle="Gestion des dépenses qui se répètent périodiquement."
        action="Ajouter une dépense"
        to="/expenses/depenses-recurrentes/ajouter"
        icon={Repeat}
        actionIcon={Plus}
      />

      <Cards summary={summary} />

      <RecurringExpensesTable />
    </div>
  )
}