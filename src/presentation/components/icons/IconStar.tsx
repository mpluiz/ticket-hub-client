import { IconProps } from '@/presentation/components/icons'

export function IconStar({ size = 16, color = 'white' }: IconProps) {
  return (
    <svg className="icon" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 17.2351L6.179 20.0001L7.388 13.8801L3 9.39206L9.179 8.62106L12 3.00006L14.821 8.62106L21 9.39206L16.612 13.8801L17.821 20.0001L12 17.2351Z" fill={color} stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}
