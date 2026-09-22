import { DataLayout } from '@/features/_shared/DataLayout'
import {
  monthlyPayrollColumns,
  type MonthlyPayrollEntry,
} from './monthly-payroll-columns'

const monthlyPayroll: MonthlyPayrollEntry[] = [
  {
    id: 1,
    worker: 'Ahmed Benali',
    gross: '245 000 DA',
    advances: '20 000 DA',
    bonuses: '15 000 DA',
    deductions: '5 000 DA',
    net: '235 000 DA',
    status: 'À payer',
  },
  {
    id: 2,
    worker: 'Karim Haddad',
    gross: '198 000 DA',
    advances: '15 000 DA',
    bonuses: '8 000 DA',
    deductions: '3 000 DA',
    net: '188 000 DA',
    status: 'Payé',
  },
  {
    id: 3,
    worker: 'Nadia Mansouri',
    gross: '210 000 DA',
    advances: '10 000 DA',
    bonuses: '10 000 DA',
    deductions: '0 DA',
    net: '210 000 DA',
    status: 'À payer',
  },
]

export function MonthlyPayrollTable() {
  const handleView = (_entry: MonthlyPayrollEntry) => {}

  const columns = monthlyPayrollColumns({
    onView: handleView,
  })

  return (
    <div className="mt-4.5">
      <DataLayout
        columns={columns}
        data={monthlyPayroll}
        minWidth="min-w-[1100px]"
      />
    </div>
  )
}