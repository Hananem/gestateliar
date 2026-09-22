import { createFileRoute } from '@tanstack/react-router'
import { PackageCheck, Save } from 'lucide-react'

import { Header } from '@/features/_shared/Header'
import { MaterialForm } from '#/features/stock/materials/components/AddMaterialForm'

export const Route = createFileRoute('/stock/matieres/ajouter')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="mx-auto max-w-[1100px] px-5 py-7 sm:px-8">
      <Header
        title="Ajouter une matière"
        subtitle="Ajouter une nouvelle matière ou un accessoire au catalogue."
        action="Enregistrer"
        icon={PackageCheck}
        actionIcon={Save}
      />

      <MaterialForm
        onSubmit={(data) => {
          console.log(data)
        }}
      />
    </div>
  )
}