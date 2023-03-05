import { FunctionComponent, ReactNode } from 'react'

interface CardFieldProps {
  children?: ReactNode
  label: string
  inputType?: 'text' | 'number' | 'select'
  numberRange?: { min: number, max: number }
}

export const CardField: FunctionComponent<CardFieldProps> = ({ label, inputType, numberRange = { min: 0, max: 0 } }) => {
  const hasInputType = Boolean(inputType)
  return (
    <div className={`flex px-7 py-1 ${hasInputType ? 'justify-between' : 'justify-center items-center'} w-full`}>
      <label className={`${hasInputType ? 'w-28 truncate !text-right pr-2' : 'flex-grow text-center'} pr-2`}>{label}</label>

      {hasInputType && inputType === 'text' && (
        <input className='flex-grow  rounded-md bg-black bg-opacity-50 border-white border-2' type={inputType} />)}

      {hasInputType && inputType === 'number' && (
        <input
          className='flex-grow text-right rounded-md bg-black bg-opacity-50 border-white border-2' type={inputType}
          min={numberRange.min} max={numberRange.max}
        />)}

      {hasInputType && inputType === 'select' && (
        <select className='flex-grow rounded-md bg-black bg-opacity-50 border-white border-2'>
          <option value='None'>None</option>
          <option value='Plant'>Plant</option>
        </select>)}
    </div>
  )
}
