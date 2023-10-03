import { ComponentProps } from '@/presentation/components'
import '@/presentation/components/Container/Container.scss'

export type ContainerProps = ComponentProps<HTMLDivElement>

export function Container({ className, children }: ContainerProps) {
  return (
    <div className={`container ${className}`}>
      {children}
    </div>
  )
}
