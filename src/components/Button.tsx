import { FunctionComponent, ReactNode } from 'react'

interface ButtonProps {
  children?: ReactNode
}

export const Button: FunctionComponent<ButtonProps> = ({ children }) => {
  return (
    <div className='flex justify-center'>
      <button className='cursor-pointer border-white border-2 rounded-lg text-white text-xl hover:text-2xl w-64 h-12 bg-[url("img/green-diamond.jpeg")] grayscale hover:grayscale-0 hover:shadow-md shadow-stone-200' type='button'>
        {children}
      </button>
    </div>
  )
}
