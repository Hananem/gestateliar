export type ExpensePage =
  'expenses' | 'categories' | 'recurring' | 'report' | 'costs'

export type ExpensePageData = {
  title: string
  subtitle: string
  action: string
  columns: string[]
  rows: string[][]
}
