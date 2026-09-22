export type AuditEntry = {
  id: number
  date: string
  user: string
  action: string
  entity: string
  description: string
}

export const auditColumns = [
  {
    accessorKey: 'date',
    header: 'Date',
  },
  {
    accessorKey: 'user',
    header: 'Utilisateur',
  },
  {
    accessorKey: 'action',
    header: 'Action',
  },
  {
    accessorKey: 'entity',
    header: 'Entité',
  },
  {
    accessorKey: 'description',
    header: 'Description',
  },
]