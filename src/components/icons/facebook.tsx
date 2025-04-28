import type React from 'react'
export function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <clipPath clipPathUnits="userSpaceOnUse" id="a">
          <path d="M-600 350h700v-700h-700Z" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="b">
          <path d="M-447.918 426.396h700v-700h-700Z" />
        </clipPath>
      </defs>
      <g
        style={{
          strokeWidth: 27.7778,
        }}
      >
        <path
          d="M0 0c0 138.071-111.929 250-250 250S-500 138.071-500 0c0-117.245 80.715-215.622 189.606-242.638v166.242h-51.552V0h51.552v32.919c0 85.092 38.508 124.532 122.048 124.532 15.838 0 43.167-3.105 54.347-6.211V81.986c-5.901.621-16.149.932-28.882.932-40.993 0-56.832-15.528-56.832-55.9V0h81.659l-14.028-76.396h-67.631v-171.773C-95.927-233.218 0-127.818 0 0"
          style={{
            fill: '#0866ff',
            fillOpacity: 1,
            fillRule: 'nonzero',
            stroke: 'none',
            strokeWidth: 27.7778,
          }}
          transform="matrix(.048 0 0 -.048 24 12)"
          clipPath="url(#a)"
        />
        <path
          d="m0 0 14.029 76.396H-67.63v27.019c0 40.372 15.838 55.899 56.831 55.899 12.733 0 22.981-.31 28.882-.931v69.253c-11.18 3.106-38.509 6.212-54.347 6.212-83.539 0-122.048-39.441-122.048-124.533V76.396h-51.552V0h51.552v-166.242a250.6 250.6 0 0 1 60.394-7.362c10.254 0 20.358.632 30.288 1.831V0Z"
          style={{
            fill: '#fff',
            fillOpacity: 1,
            fillRule: 'nonzero',
            stroke: 'none',
            strokeWidth: 27.7778,
          }}
          transform="matrix(.048 0 0 -.048 16.7 15.667)"
          clipPath="url(#b)"
        />
      </g>
    </svg>
  )
}
