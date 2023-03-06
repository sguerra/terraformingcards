import { ChangeEvent, FunctionComponent, ReactNode, useEffect } from 'react'
import { useDropzone } from 'react-dropzone'

export type ChangedRecord = Record<string, string | number>

interface CardFieldProps {
  children?: ReactNode
  label: string
  inputType?: 'text' | 'number' | 'select-tag' | 'select-requisite' | 'select-vps' | 'image'
  numberRange?: { min: number, max: number }
  propName?: string
  onChange?: (changed: ChangedRecord) => void
}

export const CardField: FunctionComponent<CardFieldProps> = ({ propName, label, inputType, numberRange = { min: 0, max: 0 }, onChange = (changed: ChangedRecord) => {} }) => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/png': ['.png'],
      'image/jpg': ['.jpg', '.jpeg']
    }
  })
  const hasInputType = Boolean(inputType)

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
    const { name, value } = e.target
    const changed: ChangedRecord = {}
    changed[name] = value

    onChange(changed)
  }

  const handleRangeChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
    const target = e.target
    const { value } = target
    const { min, max } = numberRange
    const numbervalue = Number(value)
    if (numbervalue < min) {
      target.value = min.toString()
      return
    }
    if (numbervalue > max) {
      target.value = max.toString()
      return
    }
    handleChange(e)
  }

  useEffect(() => {
    const file = acceptedFiles.pop()
    if (file == null) return
    const image = URL.createObjectURL(file)
    onChange({ image })
  }, [acceptedFiles])

  return (
    <div className={`flex px-7 py-2 ${hasInputType ? 'justify-between' : 'justify-center items-center'} w-full`}>
      <label className={`flex-shrink text-sm ${hasInputType ? ' w-24 !text-right pr-4' : 'flex-grow text-center'}`}>{label}</label>

      {hasInputType && inputType === 'text' && (
        <input name={propName} className='flex-grow rounded-md bg-black bg-opacity-50 border-white border-2' type={inputType} onChange={handleChange} />)}

      {hasInputType && inputType === 'number' && (
        <input
          name={propName}
          onChange={handleRangeChange}
          className='flex-grow text-center rounded-md bg-black bg-opacity-50 border-white border-2' type={inputType}
          min={numberRange.min} max={numberRange.max}
        />)}

      {hasInputType && inputType === 'select-tag' && (
        <select
          name={propName}
          onChange={handleChange}
          className='flex-grow rounded-md bg-black bg-opacity-50 border-white border-2'
        >
          <option value='none'>Ninguno</option>
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
        <select
          className='flex-grow rounded-md bg-black bg-opacity-50 border-white border-2'
          name={propName}
          onChange={handleChange}
        >
          <option value='none'>Ninguno</option>
          <option value='city'>Ciudad</option>
          <option value='colony'>Colonia</option>
          <option value='greenery-no-o2'>Invernadero</option>
          <option value='ocean'>Océano</option>
        </select>
      )}

      {hasInputType && inputType === 'select-vps' && (
        <select
          className='flex-grow rounded-md bg-black bg-opacity-50 border-white border-2'
          name={propName}
          onChange={handleChange}
        >
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
        </select>
      )}

      {hasInputType && inputType === 'image' && (
        <div {...getRootProps({ className: 'dropzone flex-grow rounded-md bg-white text-black bg-opacity-75 border-white border-2 text-center cursor-pointer' })}>
          <input {...getInputProps()} />
          <p>Subir archivo</p>
        </div>
      )}
    </div>
  )
}
