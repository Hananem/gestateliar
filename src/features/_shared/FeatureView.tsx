import { AppShell } from '@/components/layout/AppShell'
import { SectionHeading } from '@/components/shared/Shared'
import { useLanguage } from '@/lib/i18n'

export function FeatureView({
  title,
  subtitle,
}: {
  title: string
  subtitle: string
}) {
  const { t } = useLanguage()

  return (
    <AppShell>
      <SectionHeading title={t(title)} subtitle={t(subtitle)} />
    </AppShell>
  )
}
