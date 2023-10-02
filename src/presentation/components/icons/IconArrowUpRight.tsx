import { IconProps } from '@/presentation/components/icons'

export function IconArrowUpRight({ size = 16, color = 'white' }: IconProps) {
  return (
    <svg className="icon" width={size} height={size} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 12.3501H19" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 5.3501L19 12.3501L12 19.3501" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}
