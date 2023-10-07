import { IconProps } from '@/presentation/components/icons'

export function IconCalendar({ size = 16, color = 'white' }: IconProps) {
  return (
    <svg className="icon" width={size} height={size} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.50022 3.00104V6.00089" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16.4997 3.00104V6.00089" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="3.00049" y="4.50098" width="17.9991" height="16.4992" rx="3" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12.5 14.9992H7.50024" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12.5 11.4994H7.50024" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16.4998 14.9992H15.4999" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16.4998 11.4994H15.4999" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}
