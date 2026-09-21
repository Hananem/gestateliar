export type PayrollPage =
  | 'overview'
  | 'rates'
  | 'advances'
  | 'bonuses'
  | 'deductions'
  | 'monthly'
  | 'closures'
  | 'payslip'

export type PayrollPageData = {
  title: string
  subtitle: string
  action: string
  columns: string[]
  rows: string[][]
}
