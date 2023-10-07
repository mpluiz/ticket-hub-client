import { IconProps } from '@/presentation/components/icons'

export function IconArrowDown({ size = 16, color = 'white' }: IconProps) {
  return (
    <svg className="icon" width={size} height={size} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 10L12 14L16 10" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}
