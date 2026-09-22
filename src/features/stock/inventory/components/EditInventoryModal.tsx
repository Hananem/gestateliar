import { useEffect, useState } from 'react'
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalField,
} from '@/features/_shared/Modal'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useLanguage } from '@/lib/i18n'
import type { Inventory } from './inventory-columns'

interface EditInventoryModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  inventory: Inventory | null
  onSubmit?: (data: Inventory) => void
}

// TODO: remplacer par les vraies données (API / hooks)
const STATUSES = [
  { value: 'À approuver', label: 'À approuver' },
  { value: 'En cours', label: 'En cours' },
  { value: 'Terminé', label: 'Terminé' },
]

export function EditInventoryModal({
  open,
  onOpenChange,
  inventory,
  onSubmit,
}: EditInventoryModalProps) {
  const { t } = useLanguage()
  const [values, setValues] = useState<Inventory | null>(inventory)

  // Resynchronise le formulaire quand une nouvelle ligne est ouverte en édition
  useEffect(() => {
    setValues(inventory)
  }, [inventory])

  const set = (patch: Partial<Inventory>) =>
    setValues((prev) => (prev ? { ...prev, ...patch } : prev))

  const isValid = !!values?.inventory && !!values?.scope && !!values?.status

  function handleOpenChange(next: boolean) {
    onOpenChange(next)
  }

  function handleSubmit() {
    if (!values || !isValid) return
    onSubmit?.(values)
    handleOpenChange(false)
  }

  if (!values) return null

  return (
    <Modal open={open} onOpenChange={handleOpenChange}>
      <ModalHeader
        title={t("Modifier l'inventaire")}
        onClose={() => handleOpenChange(false)}
      />

      <ModalBody>
        <ModalField label={t('Inventaire')}>
          <Input
            value={values.inventory}
            onChange={(e) => set({ inventory: e.target.value })}
            className="bg-muted/40"
          />
        </ModalField>

        <ModalField label={t('Périmètre')}>
          <Input
            value={values.scope}
            onChange={(e) => set({ scope: e.target.value })}
            className="bg-muted/40"
          />
        </ModalField>

        <div className="grid grid-cols-2 gap-4">
          <ModalField label={t('Références')}>
            <Input
              value={values.references}
              onChange={(e) => set({ references: e.target.value })}
              placeholder="0 / 0"
              className="bg-muted/40"
            />
          </ModalField>

          <ModalField label={t('Écart')}>
            <Input
              value={values.gap}
              onChange={(e) => set({ gap: e.target.value })}
              className="bg-muted/40"
            />
          </ModalField>
        </div>

        <ModalField label={t('Statut')}>
          <Select value={values.status} onValueChange={(v) => set({ status: v })}>
            <SelectTrigger className="bg-muted/40">
              <SelectValue placeholder={t('Sélectionner un statut')} />
            </SelectTrigger>
            <SelectContent>
              {STATUSES.map((s) => (
                <SelectItem key={s.value} value={s.value}>
                  {t(s.label)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </ModalField>
      </ModalBody>

      <ModalFooter>
        <Button variant="ghost" size="sm" onClick={() => handleOpenChange(false)}>
          {t('Annuler')}
        </Button>
        <Button size="sm" disabled={!isValid} onClick={handleSubmit}>
          {t('Enregistrer')}
        </Button>
      </ModalFooter>
    </Modal>
  )
}