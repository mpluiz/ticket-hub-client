export interface IconProps {
  size?: number
  color?: string
}

export function ArrowUpRight({ size = 16, color = 'none' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 12 12" fill={color} xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_9_907)">
        <path d="M2.20334 5.66006H10.3374" stroke="white" strokeWidth="1.4" strokeLinecap="round"
              strokeLinejoin="round"/>
        <path d="M6.27039 1.59302L10.3374 5.66006L6.27039 9.72711" stroke="white" strokeWidth="1.4"
              strokeLinecap="round" strokeLinejoin="round"/>
      </g>
      <defs>
        <clipPath id="clip0_9_907">
          <rect width="11" height="11" fill="white" transform="translate(0.770508 0.160156)"/>
        </clipPath>
      </defs>
    </svg>
  )
}
