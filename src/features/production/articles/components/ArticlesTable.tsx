import { useState } from 'react'

import { DataLayout } from '@/features/_shared/DataLayout'
import { DeleteModal } from '@/features/_shared/DeleteModal'
import {
  articlesColumns,
  type Article,
} from './articles-columns'

const articles: Article[] = [
  {
    id: 1,
    reference: 'ART-001',
    model: 'Chemise Classic',
    colors: ['Blanc', 'Bleu'],
    sizes: ['S', 'M', 'L', 'XL'],
    operations: 4,
    targetQuantity: 500,
    status: 'Actif',
  },
  {
    id: 2,
    reference: 'ART-002',
    model: 'Pantalon Basic',
    colors: ['Noir', 'Gris'],
    sizes: ['M', 'L', 'XL'],
    operations: 5,
    targetQuantity: 300,
    status: 'Actif',
  },
  {
    id: 3,
    reference: 'ART-003',
    model: 'Veste Work',
    colors: ['Bleu'],
    sizes: ['M', 'L', 'XL'],
    operations: 5,
    targetQuantity: 200,
    status: 'Actif',
  },
]

export function ArticlesTable() {
  const [deleteTarget, setDeleteTarget] = useState<Article | null>(null)

  const handleViewArticle = (_article: Article) => {
    // ouvrir le détail de l'article
  }

  const handleEditArticle = (_article: Article) => {
    // ouvrir la modification
  }

  const handleDeleteArticle = (article: Article) => {
    setDeleteTarget(article)
  }

  const confirmDeleteArticle = () => {
    if (!deleteTarget) return

    console.log('Suppression de', deleteTarget)
    setDeleteTarget(null)
  }

  const columns = articlesColumns({
    onView: handleViewArticle,
    onEdit: handleEditArticle,
    onDelete: handleDeleteArticle,
  })

  return (
    <div className="mt-4.5">
      <DataLayout
        columns={columns}
        data={articles}
        minWidth="min-w-[1000px]"
      />

      <DeleteModal
        open={!!deleteTarget}
        onOpenChange={(v) => !v && setDeleteTarget(null)}
        itemName={deleteTarget?.model}
        onConfirm={confirmDeleteArticle}
      />
    </div>
  )
}