export type TeamPage = 'workers' | 'assignments' | 'dailyWork'

export type TeamPageData = {
  title: string
  subtitle: string
  action: string
  columns: string[]
  rows: string[][]
}
