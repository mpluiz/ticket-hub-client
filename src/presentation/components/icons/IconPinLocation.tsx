import { IconProps } from '@/presentation/components/icons'

export function IconPinLocation({ size = 16, color = 'white' }: IconProps) {
  return (
    <svg className="icon" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 13.5V13.5C10.343 13.5 9 12.157 9 10.5V10.5C9 8.843 10.343 7.5 12 7.5V7.5C13.657 7.5 15 8.843 15 10.5V10.5C15 12.157 13.657 13.5 12 13.5Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M12 21.5C12 21.5 5 15.75 5 10.5C5 6.634 8.134 3.5 12 3.5C15.866 3.5 19 6.634 19 10.5C19 15.75 12 21.5 12 21.5Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}
