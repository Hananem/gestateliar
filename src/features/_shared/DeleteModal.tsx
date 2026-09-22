import { AlertTriangle } from 'lucide-react'
import { Modal, ModalBody } from '@/features/_shared/Modal'
import { useLanguage } from '@/lib/i18n'

export interface DeleteModalProps {
  open: boolean
  onOpenChange: (v: boolean) => void
  itemName?: string
  title?: string
  description?: string
  onConfirm?: () => void
}

export function DeleteModal({
  open,
  onOpenChange,
  itemName,
  title,
  description,
  onConfirm,
}: DeleteModalProps) {
  const { t } = useLanguage()

  return (
    <Modal open={open} onOpenChange={onOpenChange} className="max-w-sm">
      <ModalBody className="text-center">
        <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full border border-destructive/20 bg-destructive-soft text-destructive">
          <AlertTriangle className="size-6" />
        </div>
        <h3 className="font-display text-base font-bold tracking-wide text-foreground">
          {title ?? t('Confirmer la suppression')}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {description ?? (
            <>
              {t('Voulez-vous vraiment supprimer')}{' '}
              {itemName && (
                <span className="font-bold text-foreground">{itemName}</span>
              )}{' '}
              ? {t('Cette action est irréversible.')}
            </>
          )}
        </p>
      </ModalBody>
      <div className="flex border-t border-border">
        <button
          type="button"
          onClick={() => onOpenChange(false)}
          className="flex-1 border-e border-border py-4 text-xs font-bold uppercase tracking-widest text-muted-foreground transition-colors hover:bg-accent"
        >
          {t('Annuler')}
        </button>
        <button
          type="button"
          onClick={() => {
            onConfirm?.()
            onOpenChange(false)
          }}
          className="flex-1 py-4 font-display text-xs font-bold uppercase tracking-widest text-destructive transition-colors hover:bg-destructive-soft"
        >
          {t('Supprimer')}
        </button>
      </div>
    </Modal>
  )
}