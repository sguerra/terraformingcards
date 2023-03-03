import { FunctionComponent, ReactNode } from 'react'

interface ButtonProps {
  children?: ReactNode
}

export const Button: FunctionComponent<ButtonProps> = ({ children }) => {
  return (
    <div className='flex justify-center'>
      <button className='border-white border-2 rounded-lg text-white text-lg hover:text-xl w-60 h-10 bg-[url("img/green-diamond.jpeg")] grayscale hover:grayscale-0 hover:shadow-md shadow-stone-200' type='button'>
        {children}
      </button>
    </div>
  )
}
