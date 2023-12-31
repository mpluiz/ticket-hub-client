import '@/presentation/components/Loader/Loader.scss'

type LoaderProps = { size?: 'sm' | 'md'| 'lg' | 'display' }

export function Loader({ size = 'md' }:LoaderProps) {
  return (
    <span className={`loader loader--size-${size}`} role="status">
      <svg viewBox="0 0 80 80">
        <circle cx="40" cy="40" r="32"></circle>
      </svg>
    </span>
  )
}
