import { FunctionComponent, ReactNode } from 'react'
import { CardField } from './CardField'

interface CardEditorProps {
  children?: ReactNode
}

export const CardEditor: FunctionComponent<CardEditorProps> = () => {
  return (
    <div className='bg-contain pt-12 h-[478px] w-[334px] bg-[url("img/tmtemplates/resources/card.png")]'>
      <CardField label='Nombre:' inputType='text' />
      <CardField label='Megacréditos:' inputType='number' numberRange={{ min: 1, max: 99 }} />
      <CardField label='Tags:' inputType='select-tag' />
      <CardField label='Imagen:' inputType='text' />
      <CardField label='Requisitos:' inputType='select-requisite' />
      <CardField label='P de victoria:' inputType='number' numberRange={{ min: -10, max: 15 }} />
      <CardField label='Expansión:' inputType='text' />
      <CardField label='Efectos' />
      <CardField label='Íconos:' inputType='text' />
      <CardField label='Descripción:' inputType='text' />
    </div>
  )
}
