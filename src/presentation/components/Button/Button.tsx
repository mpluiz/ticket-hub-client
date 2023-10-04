import { ReactNode } from 'react'
import { ComponentProps, Loader, Text } from '@/presentation/components'
import '@/presentation/components/Button/Button.scss'

export interface ButtonProps extends ComponentProps<HTMLButtonElement> {
  type?: 'button' | 'submit'
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  icon?: ReactNode
  disabled?: boolean
  loading?: boolean
}

export function Button({
  children,
  className,
  type = 'button',
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  icon,
  ...others
}: ButtonProps) {
  return (
    <button
      className={`button button--${variant} button--size-${size} ${className ?? ''}`}
      type={type}
      disabled={disabled || loading}
      {...others}
    >
      <Text>{children}</Text>
      {loading && <Loader size={size} />}
      {(icon && !loading) && icon}
    </button>
  )
}
