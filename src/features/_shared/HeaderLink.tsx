import { Link } from '@tanstack/react-router'
import type { LucideIcon } from 'lucide-react'
import { useLanguage } from '@/lib/i18n'

type HeaderLinkProps = {
  title: string
  subtitle: string
  action: string
  to: string
  icon?: LucideIcon
  actionIcon?: LucideIcon
}

export function HeaderLink({
  title,
  subtitle,
  action,
  to,
  icon: Icon,
  actionIcon: ActionIcon,
}: HeaderLinkProps) {
  const { t } = useLanguage()

  return (
    <header className="flex flex-wrap items-start justify-between gap-4 mx-auto max-w-[1100px] px-5 py-7 sm:px-8">
      <div className="flex items-start gap-3.5">
        {Icon && (
          <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary">
            <Icon className="size-5.5" />
          </div>
        )}

        <div>
          <h1 className="font-display text-2xl font-bold tracking-tight text-foreground">
            {t(title)}
          </h1>

          <p className="mt-1 max-w-md text-sm leading-relaxed text-muted-foreground">
            {t(subtitle)}
          </p>
        </div>
      </div>

      <Link
        to={to}
        className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
      >
        {ActionIcon && <ActionIcon className="size-4" />}
        {t(action)}
      </Link>
    </header>
  )
}