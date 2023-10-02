import { IconProps } from '@/presentation/components/icons'

export function IconCoffee({ size = 16, color = 'white' }: IconProps) {
  return (
    <svg className="icon" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M3.9975 8.87454H13.0013C13.4156 8.87454 13.7516 9.21047 13.7516 9.62485V11.8758C13.7516 14.3621 11.736 16.3777 9.24969 16.3777H7.74907C5.26275 16.3777 3.24719 14.3621 3.24719 11.8758V9.62485C3.24719 9.21047 3.58312 8.87454 3.9975 8.87454Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.1254 6.6236C10.6252 6.09838 10.6252 5.27304 11.1254 4.74782C11.6256 4.2226 11.6256 3.39726 11.1254 2.87204" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8.4993 6.6236C7.9991 6.09838 7.9991 5.27304 8.4993 4.74782C8.99951 4.2226 8.99951 3.39726 8.4993 2.87204" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.8732 6.6236C5.37299 6.09839 5.37299 5.27304 5.8732 4.74782C6.37341 4.2226 6.37341 3.39726 5.8732 2.87204" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.0971 14.213L14.4821 13.896C15.8107 13.592 16.7528 12.41 16.7528 11.047V11.047C16.7528 10.4708 16.5239 9.91824 16.1165 9.51083C15.7091 9.10342 15.1566 8.87454 14.5804 8.87454H12.6261" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}
