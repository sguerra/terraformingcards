import { FunctionComponent, ReactNode } from 'react'

interface ButtonProps {
  id: string
  children?: ReactNode
  onClick?: () => void
  color?: 'primary' | 'secondary'
}

export const Button: FunctionComponent<ButtonProps> = ({ id, children, onClick, color = 'primary' }) => {
  const clickHandler = (): void => {
    if (onClick == null) return
    onClick()
  }
  return (
    <div id={id} className='flex justify-center mt-5'>
      <button className='relative flex items-center justify-center overflow-hidden cursor-pointer border-white border-2 rounded-lg text-white text-xl hover:text-2xl w-64 h-12 hover:shadow-md shadow-stone-200 opacity-80 hover:opacity-100' type='button' onClick={clickHandler}>
        <img src={`img/${color}-diamond.jpeg`} className='absolute top-0 left-0 w-full object-center object-contain z-0' alt='button image' />
        <div className='z-10'>{children}</div>
      </button>
    </div>
  )
}
