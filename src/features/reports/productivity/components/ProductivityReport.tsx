import { BarChart3 } from 'lucide-react'
import { ReportLayout } from '@/features/_shared/ReportLayout'

const report = {
  title: 'Productivité',
  subtitle: 'Comparer le travail validé par ouvrier, article et opération.',
  columns: ['Ouvrier', 'Opération', 'Quantité validée', 'Lots', 'Période'],
  rows: [
    ['Yacine Benali', 'Coupe', '250 pièces', '3', 'Sept. 2026'],
    ['Nadia Khelifi', 'Assemblage', '214 pièces', '2', 'Sept. 2026'],
    ['Karim Amrani', 'Finition', '178 pièces', '3', 'Sept. 2026'],
  ],
}

const summary = [
  ['Ouvriers suivis', '24', 'Équipe active'],
  ['Travail validé', '1 284 pièces', 'Mois en cours'],
  ['Opération principale', 'Assemblage', '214 pièces'],
  ['Variation', '+8,4 %', 'Vs. août'],
] as [string, string, string][]

export function ProductivityReport() {
  return <ReportLayout report={report} summary={summary} icon={BarChart3} />
}
