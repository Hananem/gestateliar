import { Plus, FolderTree } from 'lucide-react'
import { DataLayout } from '@/features/_shared/DataLayout'

const content = {
  title: 'Catégories',
  subtitle: 'Classer les dépenses pour faciliter leur suivi et leurs rapports.',
  action: 'Ajouter une catégorie',
  columns: [
    'Catégorie',
    'Description',
    'Dépenses enregistrées',
    'Montant période',
    'Statut',
  ],
  rows: [
    [
      'Matières et fournitures',
      "Achats liés à l'atelier",
      '18 dépenses',
      '426 800 DA',
      'Active',
    ],
    [
      'Transport',
      'Livraison et déplacement',
      '7 dépenses',
      '118 400 DA',
      'Active',
    ],
    [
      'Charges',
      'Électricité et services',
      '4 dépenses',
      '212 600 DA',
      'Active',
    ],
  ],
}

const summary = [
  ['Catégories actives', '8', 'Référentiel'],
  ['Catégorie principale', '426 800 DA', 'Matières'],
  ['Dépenses classées', '34', 'Période active'],
  ['À classer', '2', 'Dépenses'],
] as [string, string, string][]

export function ExpenseCategories() {
  return (
    <DataLayout
      content={content}
      summary={summary}
      icon={FolderTree}
      actionIcon={Plus}
    />
  )
}
