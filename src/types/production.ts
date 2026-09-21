export type ProductionPage =
  | 'overview'
  | 'articles'
  | 'operations'
  | 'lots'
  | 'consumption'
  | 'progress'
  | 'rejects'

export type ProductionPageData = {
  title: string
  subtitle: string
  action: string
  columns: string[]
  rows: string[][]
}
