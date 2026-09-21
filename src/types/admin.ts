export type AdminPage = 'users' | 'roles' | 'settings' | 'audit'

export type AdminData = {
  title: string
  subtitle: string
  action: string
  columns: string[]
  rows: string[][]
}
