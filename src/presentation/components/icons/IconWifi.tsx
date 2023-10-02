import { IconProps } from '@/presentation/components/icons'

export function IconWifi({ size = 16, color = 'white' }: IconProps) {
  return (
    <svg className="icon" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none">
      <path d="M8.99925 14.4375C8.844 14.4375 8.718 14.5635 8.7195 14.7188C8.71875 14.874 8.84475 15 9 15C9.15525 15 9.28125 14.874 9.28125 14.7188C9.28125 14.5635 9.15525 14.4375 8.99925 14.4375" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3.44324 9.00001C6.51224 6.18526 11.487 6.18526 14.556 9.00001" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M1.19556 5.853C5.50581 2.049 12.4943 2.049 16.8046 5.853" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.6842 11.8658C7.51495 10.0447 10.4842 10.0447 12.315 11.8658" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}
