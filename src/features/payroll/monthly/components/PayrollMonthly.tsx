import { Calculator } from 'lucide-react'

import { Header } from '@/features/_shared/Header'
import { Cards } from '@/features/_shared/Cards'
import { MonthlyPayrollTable } from './MonthlyPayrollTable'

const summary = [
  ['Mois', 'Septembre 2026', 'Période en cours'],
  ['Brut', '1 850 000 DA', 'Rémunération brute'],
  ['Avances', '185 000 DA', 'Avances déduites'],
  ['Net', '1 590 000 DA', 'Net à payer'],
] as [string, string, string][]

export function PayrollMonthly() {
  return (
    <div className="mx-auto max-w-[1100px] px-5 py-7 sm:px-8">
      <Header
        title="Calcul mensuel"
        subtitle="Calcul mensuel de la rémunération des ouvriers."
        icon={Calculator}
      />

      <Cards summary={summary} />

      <MonthlyPayrollTable />
    </div>
  )
}