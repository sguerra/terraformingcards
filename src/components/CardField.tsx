import { FunctionComponent, ReactNode } from 'react'

interface CardFieldProps {
  children?: ReactNode
  label: string
  inputType?: 'text' | 'number' | 'select-tag' | 'select-requisite'
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

      {hasInputType && inputType === 'select-tag' && (
        <select className='flex-grow rounded-md bg-black bg-opacity-50 border-white border-2'>
          <option value='none'>None</option>
          <option value='animal'>Animal</option>
          <option value='building'>Edificio</option>
          <option value='city'>Ciudad</option>
          <option value='earth'>Tierra</option>
          <option value='event'>Evento</option>
          <option value='galactic'>Galáctico</option>
          <option value='infrastructure'>Infraestructura</option>
          <option value='jovian'>Joviana</option>
          <option value='mars'>Marte</option>
          <option value='microbe'>Microbio</option>
          <option value='moon'>Luna</option>
          <option value='planetary'>Planetario</option>
          <option value='plant'>Planta</option>
          <option value='power'>Poder</option>
          <option value='radioactive'>Radioactivo</option>
          <option value='science'>Ciencia</option>
          <option value='space'>Espacio</option>
          <option value='venus'>Venus</option>
          <option value='wild'>Comodín</option>
        </select>)}

      {hasInputType && inputType === 'select-requisite' && (
        <select className='flex-grow rounded-md bg-black bg-opacity-50 border-white border-2'>
          <option value='none'>None</option>
          <option value='city'>Ciudad</option>
          <option value='colony'>Colonia</option>
          <option value='greenery-no-o2'>Invernadero</option>
          <option value='ocean'>Océano</option>
        </select>
      )}
    </div>
  )
}
