import { Shirt, Plus } from 'lucide-react'

import { HeaderLink } from '@/features/_shared/HeaderLink'
import { Cards } from '@/features/_shared/Cards'
import { ArticlesTable } from '@/features/production/articles/components/ArticlesTable'

const summary = [
  ['Articles', '24', 'Produits fabriqués'],
  ['Articles actifs', '21', 'En production'],
  ['Modèles', '12', 'Modèles enregistrés'],
  ['Opérations', '5', 'Opérations disponibles'],
] as [string, string, string][]

export function ProductionArticles() {
  return (
    <div className="mx-auto max-w-[1100px] px-5 py-7 sm:px-8">
      <HeaderLink
        title="Articles"
        subtitle="Référentiel des produits fabriqués, variantes, opérations et tarifs."
        action="Ajouter un article"
        to="/production/articles/ajouter"
        icon={Shirt}
        actionIcon={Plus}
      />

      <Cards summary={summary} />

      <ArticlesTable />
    </div>
  )
}