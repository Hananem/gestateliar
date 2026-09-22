import * as React from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/lib/i18n'

/**
 * Modal shell matching the industrial-textile direction:
 * dark-green header, white body, tinted footer. Uses Radix Dialog
 * primitives directly so we control the close-button placement.
 */
export function Modal({
  open,
  onOpenChange,
  children,
  className,
  style,
}: {
  open: boolean
  onOpenChange: (v: boolean) => void
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}) {
  const { dir } = useLanguage()
  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/50 backdrop-blur-[1px] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <DialogPrimitive.Content
          dir={dir}
          style={style}
          className={cn(
            'fixed left-1/2 top-1/2 z-50 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-xl border border-border bg-card shadow-elevated duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
            className,
          )}
        >
          {children}
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  )
}

export function ModalHeader({
  title,
  children,
  onClose,
}: {
  title: string
  children?: React.ReactNode
  onClose?: () => void
}) {
  return (
    <div className="flex items-center justify-between bg-primary px-5 py-4 text-primary-foreground">
      <h2 className="font-display text-sm font-bold uppercase tracking-widest">
        {title}
      </h2>
      <div className="flex items-center gap-2">
        {children}
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            aria-label="Fermer"
            className="text-primary-foreground/70 transition-colors hover:text-primary-foreground"
          >
            <X className="size-4.5" />
          </button>
        )}
      </div>
    </div>
  )
}

export function ModalBody({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return <div className={cn('space-y-4 p-5', className)}>{children}</div>
}

export function ModalFooter({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        'flex items-center justify-end gap-3 border-t border-border bg-muted/50 px-5 py-4',
        className,
      )}
    >
      {children}
    </div>
  )
}

export function ModalField({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block font-display text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
        {label}
      </span>
      {children}
    </label>
  )
}
