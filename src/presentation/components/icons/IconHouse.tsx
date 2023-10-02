import { IconProps } from '@/presentation/components/icons'

export function IconHouse({ size = 16, color = 'white' }: IconProps) {
  return (
    <svg className="icon" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none">
      <path d="M2.25 8.03562L9 2.25012L15.75 8.03562" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3.2146 7.20912V15.7501H14.7856V2.25012H11.8929V4.72962" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.07178 15.7501V12.4283C7.07178 11.5996 7.74303 10.9283 8.57178 10.9283H9.42903C10.2578 10.9283 10.929 11.5996 10.929 12.4283V15.7501" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}
