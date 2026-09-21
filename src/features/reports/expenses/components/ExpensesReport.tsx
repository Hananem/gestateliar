import { WalletCards } from 'lucide-react'
import { ReportLayout } from '@/features/_shared/ReportLayout'

const report = {
  title: 'Dépenses',
  subtitle: 'Rapport des dépenses par catégorie, période et lot affecté.',
  columns: ['Catégorie', 'Montant', 'Dépenses', 'Lots affectés', 'Part'],
  rows: [
    ['Matières et fournitures', '426 800 DA', '18', '9', '48 %'],
    ['Charges', '212 600 DA', '4', '0', '24 %'],
    ['Transport', '118 400 DA', '7', '6', '13 %'],
  ],
}

const summary = [
  ['Dépenses', '890 000 DA', 'Sept. 2026'],
  ['Dépenses affectées', '612 400 DA', '19 lots'],
  ['Catégories', '8', 'Actives'],
  ['Variation', '+6,2 %', 'Vs. août'],
] as [string, string, string][]

export function ExpensesReport() {
  return <ReportLayout report={report} summary={summary} icon={WalletCards} />
}
