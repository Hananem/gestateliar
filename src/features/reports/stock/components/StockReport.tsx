import { Boxes } from 'lucide-react'
import { ReportLayout } from '@/features/_shared/ReportLayout'

const report = {
  title: 'Stock',
  subtitle: 'Synthèse des quantités, alertes et valorisation du stock.',
  columns: ['Indicateur', 'Valeur', 'Période'],
  rows: [
    ['Valeur du stock', '12,4 M DA', 'Sept. 2026'],
    ['Matières sous le seuil', '7', 'Au 20 sept.'],
    ['Mouvements enregistrés', '384', 'Mois en cours'],
  ],
}

const summary = [
  ['Valeur du stock', '12,4 M DA', 'Stock disponible'],
  ['Alertes ouvertes', '7', '2 urgentes'],
  ['Mouvements', '384', 'Mois en cours'],
  ['Variation', '+4,8 %', 'Vs. août'],
] as [string, string, string][]

export function StockReport() {
  return <ReportLayout report={report} summary={summary} icon={Boxes} />
}
