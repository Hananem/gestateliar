import { Settings } from 'lucide-react'

import { Header } from '@/features/_shared/Header'

export function AdminSettings() {
  return (
    <div className="mx-auto max-w-[1100px] px-5 py-7 sm:px-8">
      <Header
        title="Paramètres"
        subtitle="Configuration générale de l’application."
        icon={Settings}
      />
    </div>
  )
}