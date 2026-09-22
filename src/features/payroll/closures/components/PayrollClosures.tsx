import { Lock } from 'lucide-react'

import { Header } from '@/features/_shared/Header'
import { Cards } from '@/features/_shared/Cards'
import { PayrollClosuresTable } from './PayrollClosuresTable'

const summary = [
  ['Clôtures', '8', 'Mois clôturés'],
  ['Dernière clôture', 'Août 2026', 'Dernière période'],
] as [string, string, string][]

export function PayrollClosures() {
  return (
    <div className="mx-auto max-w-[1100px] px-5 py-7 sm:px-8">
      <Header
        title="Clôtures"
        subtitle="Historique des clôtures mensuelles de la paie."
        icon={Lock}
      />

      <Cards summary={summary} />

      <PayrollClosuresTable />
    </div>
  )
}