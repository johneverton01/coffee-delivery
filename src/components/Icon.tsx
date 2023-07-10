import { ReactNode } from 'react'
import { clsx } from 'clsx'

interface IconProps {
  description?: string
  iconBackground: 'orange' | 'purple' | 'yellow' | 'gray'
  children: ReactNode
}

export function Icon({ description, children, iconBackground }: IconProps) {
  return (
    <div className="flex gap-3 items-center">
      <div className={clsx('flex items-center justify-center w-8 h-8 rounded-full text-white', {
        'bg-purple-500': iconBackground === 'purple',
        'bg-yellow-700': iconBackground === 'orange',
        'bg-yellow-500': iconBackground === 'yellow',
        'bg-gray-900': iconBackground === 'gray',
      })}>
        {children}
      </div>
      <div>
        {description}
      </div>
    </div>
  )
}