import { FeatureView } from '@/features/_shared/FeatureView'

type SubViewProps = {
  title: string
  subtitle: string
}

export function SubView({ title, subtitle }: SubViewProps) {
  return <FeatureView title={title} subtitle={subtitle} />
}
