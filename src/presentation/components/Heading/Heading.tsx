import { ComponentProps } from '@/presentation/components'
import '@/presentation/components/Heading/Heading.scss'

interface HeadingProps extends ComponentProps<HTMLParagraphElement> {
  size?: 'h3' | 'h2' | 'h1' | 'display'
  weigth?: 'regular' | 'medium' | 'bold'
  color?: 'white' | 'black' | 'blue' | 'green'
}

export function Heading({
  children,
  size = 'h3',
  weigth = 'regular',
  color = 'black',
  ...others
}: HeadingProps) {
  return (
    <p
      className={`heading heading--size-${size} heading--weight-${weigth} heading--color-${color}`}
      {...others}
    >
      {children}
    </p>
  )
}
