import { Modal, ModalHeader, ModalBody, ModalField } from '@/features/_shared/Modal'
import { useLanguage } from '@/lib/i18n'
import type { Inventory } from './inventory-columns'

interface ViewInventoryModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  inventory: Inventory | null
}

export function ViewInventoryModal({
  open,
  onOpenChange,
  inventory,
}: ViewInventoryModalProps) {
  const { t } = useLanguage()

  if (!inventory) return null

  return (
    <Modal open={open} onOpenChange={onOpenChange}>
      <ModalHeader title={inventory.inventory} onClose={() => onOpenChange(false)} />

      <ModalBody>
        <ModalField label={t('Périmètre')}>
          <p className="text-sm text-foreground">{inventory.scope}</p>
        </ModalField>

        <div className="grid grid-cols-2 gap-4">
          <ModalField label={t('Références')}>
            <p className="text-sm text-foreground">{inventory.references}</p>
          </ModalField>

          <ModalField label={t('Écart')}>
            <p className="text-sm text-foreground">{inventory.gap}</p>
          </ModalField>
        </div>

        <ModalField label={t('Statut')}>
          <p className="text-sm text-foreground">{t(inventory.status)}</p>
        </ModalField>
      </ModalBody>
    </Modal>
  )
}