import { WalletCards } from 'lucide-react'
import { ReportLayout } from '@/features/_shared/ReportLayout'

const report = {
  title: 'Paie',
  subtitle: 'Synthèse des montants bruts, primes, retenues et nets dus.',
  columns: ['Période', 'Brut', 'Primes', 'Avances', 'Retenues', 'Net dû'],
  rows: [
    [
      'Septembre 2026',
      '1 842 500 DA',
      '86 000 DA',
      '124 000 DA',
      '43 200 DA',
      '1 761 300 DA',
    ],
    [
      'Août 2026',
      '1 798 000 DA',
      '72 500 DA',
      '98 000 DA',
      '67 900 DA',
      '1 704 600 DA',
    ],
  ],
}

const summary = [
  ['Brut total', '1,84 M DA', 'Sept. 2026'],
  ['Net dû', '1,76 M DA', 'Après déductions'],
  ['Fiches', '24', 'Période active'],
  ['À clôturer', '1 période', 'Septembre'],
] as [string, string, string][]

export function PayrollReport() {
  return <ReportLayout report={report} summary={summary} icon={WalletCards} />
}
