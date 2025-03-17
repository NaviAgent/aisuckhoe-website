import type React from 'react'
export function ZaloIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
      <path d="M7.5 12.5h3v3" />
      <path d="M7.5 9.5l3 3" />
      <path d="M16.5 9.5h-3v3" />
      <path d="M13.5 12.5l3 3" />
    </svg>
  )
}
