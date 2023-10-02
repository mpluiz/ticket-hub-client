import { ReactNode } from 'react'
import { ComponentProps, Text } from '@/presentation/components'
import '@/presentation/components/Button/Button.scss'

export interface ButtonProps extends ComponentProps<HTMLButtonElement> {
  type?: 'button' | 'submit'
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  icon?: ReactNode
  disabled?: boolean
}

export function Button({
  children,
  className,
  type = 'button',
  variant = 'primary',
  size = 'md',
  disabled = false,
  icon,
  ...others
}: ButtonProps) {
  return (
    <button
      className={`button button--${variant} button--size-${size} ${className ?? ''}`}
      type={type}
      disabled={disabled}
      {...others}
    >
      <Text>{children}</Text>
      {icon && icon}
    </button>
  )
}
