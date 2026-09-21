import type { LucideIcon } from 'lucide-react'

export type NavigationItem = {
  label: string
  icon: LucideIcon
  path: string
  children?: NavigationChild[]
  badge?: string
}

export type NavigationChild = {
  label: string
  path: string
}
