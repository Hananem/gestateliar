import { Tags, Plus } from 'lucide-react'

import { HeaderLink } from '@/features/_shared/HeaderLink'
import { Cards } from '@/features/_shared/Cards'
import { ExpenseCategoriesTable } from '@/features/expenses/categories/components/ExpenseCategoriesTable'

const summary = [
  ['Catégories', '8', 'Catégories enregistrées'],
  ['Actives', '8', 'Catégories disponibles'],
] as [string, string, string][]

export function ExpenseCategories() {
  return (
    <div className="mx-auto max-w-[1100px] px-5 py-7 sm:px-8">
      <HeaderLink
        title="Catégories"
        subtitle="Gestion des catégories de dépenses."
        action="Ajouter une catégorie"
        to="/expenses/categories/ajouter"
        icon={Tags}
        actionIcon={Plus}
      />

      <Cards summary={summary} />

      <ExpenseCategoriesTable />
    </div>
  )
}