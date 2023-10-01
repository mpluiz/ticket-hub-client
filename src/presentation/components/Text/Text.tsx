import { ComponentProps } from '@/presentation/components'
import '@/presentation/components/Text/Text.scss'

interface TextProps extends ComponentProps<HTMLParagraphElement> {
  size?: 'sm' | 'nm' | 'md' | 'lg'
  weigth?: 'regular' | 'medium' | 'bold'
  color?: 'white' | 'black' | 'blue' | 'green'
}

export function Text({
  children,
  size = 'md',
  weigth = 'regular',
  color = 'black',
  ...others
}: TextProps) {
  return (
    <p
      className={`text text--size-${size} text--weight-${weigth} text--color-${color}`}
      {...others}
    >
      {children}
    </p>
  )
}
