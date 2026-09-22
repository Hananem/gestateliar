import { DataLayout } from '@/features/_shared/DataLayout'
import {
  payrollClosuresColumns,
  type PayrollClosure,
} from './payroll-closures-columns'

const payrollClosures: PayrollClosure[] = [
  {
    id: 1,
    month: 'Août 2026',
    closingDate: '31/08/2026',
    workersCount: 36,
    gross: '1 720 000 DA',
    net: '1 480 000 DA',
    status: 'Clôturé',
  },
  {
    id: 2,
    month: 'Juillet 2026',
    closingDate: '31/07/2026',
    workersCount: 34,
    gross: '1 650 000 DA',
    net: '1 420 000 DA',
    status: 'Clôturé',
  },
]

export function PayrollClosuresTable() {
  const handleView = (_closure: PayrollClosure) => {}

  const columns = payrollClosuresColumns({
    onView: handleView,
  })

  return (
    <div className="mt-4.5">
      <DataLayout
        columns={columns}
        data={payrollClosures}
        minWidth="min-w-[1000px]"
      />
    </div>
  )
}