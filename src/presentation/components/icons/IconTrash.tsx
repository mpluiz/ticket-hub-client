import { IconProps } from '@/presentation/components/icons'

export function IconTrash({ size = 16, color = 'white' }: IconProps) {
  return (
    <svg className="icon" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M12.01 15.8777H6.99085C6.15771 15.8777 5.46503 15.2363 5.40113 14.4056L4.71716 5.51404H14.2836L13.5997 14.4056C13.5358 15.2363 12.8431 15.8777 12.01 15.8777V15.8777Z" stroke={color} strokeWidth="1.0625" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15.1698 5.51401H3.83173" stroke={color} strokeWidth="1.0625" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M7.50723 3.12238H11.4933C11.9335 3.12238 12.2905 3.4793 12.2905 3.91958V5.514H6.71002V3.91958C6.71002 3.4793 7.06694 3.12238 7.50723 3.12238Z" stroke={color} strokeWidth="1.0625" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10.8958 8.70291V12.6889" stroke={color} strokeWidth="1.0625" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8.10541 8.70291V12.6889" stroke={color} strokeWidth="1.0625" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}
