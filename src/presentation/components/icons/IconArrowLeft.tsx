import { IconProps } from '@/presentation/components/icons'

export function IconArrowLeft({ size = 16, color = 'white' }: IconProps) {
  return (
    <svg className="icon" width={size} height={size} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M15.2925 7.71255L11.4125 11.5925L15.2925 15.4725C15.6825 15.8625 15.6825 16.4925 15.2925 16.8825C14.9025 17.2725 14.2725 17.2725 13.8825 16.8825L9.29246 12.2925C8.90246 11.9025 8.90246 11.2725 9.29246 10.8825L13.8825 6.29255C14.2725 5.90255 14.9025 5.90255 15.2925 6.29255C15.6725 6.68255 15.6825 7.32255 15.2925 7.71255Z" fill={color}/>
    </svg>
  )
}
