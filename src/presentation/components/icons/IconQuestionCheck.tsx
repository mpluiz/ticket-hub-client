import { IconProps } from '@/presentation/components/icons'

export function IconQuestionCheck({ size = 16, color = 'white' }: IconProps) {
  return (
    <svg className="icon" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none">
      <path d="M10.6847 10.1847C10.9217 9.16314 11.8522 8.45484 12.8999 8.49832C14.0726 8.43337 15.0779 9.32697 15.1509 10.4992C15.1509 12.0037 13 12.5 13 13.5004" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.1252 16.2517C13.1251 16.3207 13.0691 16.3766 13.0001 16.3766C12.9311 16.3766 12.8751 16.3206 12.8751 16.2516C12.8751 16.1826 12.931 16.1266 13 16.1265C13.0332 16.1265 13.0651 16.1396 13.0886 16.1631C13.1121 16.1866 13.1252 16.2185 13.1252 16.2517" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M5.62837 17.6604C2.94527 13.8307 3.63478 8.58534 7.21648 5.57913C10.7982 2.57293 16.0836 2.80335 19.3901 6.10985C22.6966 9.41634 22.927 14.7018 19.9208 18.2835C16.9146 21.8652 11.6693 22.5547 7.83956 19.8716L4.99663 20.5033L5.62837 17.6604Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}
