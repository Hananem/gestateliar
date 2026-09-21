import { FeaturePage } from '@/features/_shared/FeaturePage'

type SubpageProps = {
  title: string
  subtitle: string
}

export function Subpage({ title, subtitle }: SubpageProps) {
  return <FeaturePage title={title} subtitle={subtitle} />
}
