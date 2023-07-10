import { InputHTMLAttributes, ReactNode } from 'react';

interface ToggleButtonProps extends InputHTMLAttributes<HTMLInputElement>{
  children: ReactNode;
  type: string
  name: string
  id:string
}

export function ToggleButton({ children, type, name, id, ...rest }: ToggleButtonProps) {
  return (
        <label className="cursor-pointer w-full"
          htmlFor={id}>
          <input
            aria-label={type}
            className="peer sr-only"
            type="radio"
            id={id}
            name={name}
            {...rest}
          />
          <span className="whitespace-nowrap flex gap-3 rounded-md bg-gray-400 uppercase text-xs w-full items-center p-4 peer-checked:bg-purple-400 peer-checked:ring-purple-500 peer-checked:ring-1 peer-focus:ring-gray-500 peer-focus:ring-1 peer-hover:bg-gray-500 transition-colors">
            {children}
          </span>
        </label>
  )
}