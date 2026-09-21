import type { ComponentType, ReactNode } from 'react'

export type PageContent = {
  title: string
  subtitle: string
  action: string
  columns: string[]
  rows: string[][]
}

export type SummaryItem = [label: string, value: string, note: string]

export type DataLayoutProps = {
  content: PageContent
  summary: SummaryItem[]
  icon: ComponentType<{ className?: string }>
  actionIcon: ComponentType<{ className?: string }>
  minWidth?: string
  children?: ReactNode
}

export type Report = {
  title: string
  subtitle: string
  columns: string[]
  rows: string[][]
}

export type SubViewProps = {
  title: string
  subtitle: string
}
