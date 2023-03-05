import { FunctionComponent, ReactNode } from 'react'

interface CardFieldProps {
  children?: ReactNode
  label: string
  inputType?: 'text' | 'number'
}

export const CardField: FunctionComponent<CardFieldProps> = ({ label, inputType }) => {
  const hasInputType = Boolean(inputType)
  return (
    <div className={`flex px-7 py-1 ${hasInputType ? 'justify-between' : 'justify-center items-center'} w-full`}>
      <label className={`${hasInputType ? 'flex-shrink' : 'flex-grow text-center'} pr-2`}>{label}</label>
      {hasInputType && (<input className='flex-grow rounded-md bg-black bg-opacity-50 border-white border-2' type={inputType} />)}
    </div>
  )
}
