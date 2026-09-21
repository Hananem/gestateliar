import type { ReactNode } from 'react'

export type PageContent = {
  title: string
  columns: string[]
  rows: string[][]
  images?: Record<string, string>
}

export type SummaryItem = [
  label: string,
  value: string,
  note: string,
]

export type DataLayoutProps = {
  content: PageContent
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
