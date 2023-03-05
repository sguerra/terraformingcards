import { FunctionComponent, ReactNode } from 'react'
import { CardField } from './CardField'

interface CardEditorProps {
  children?: ReactNode
}

export const CardEditor: FunctionComponent<CardEditorProps> = () => {
  return (
    <div className='bg-contain pt-12 h-[478px] w-[334px] bg-[url("img/tmtemplates/resources/card.png")]'>
      <CardField label='Nombre:' inputType='text' />
      <CardField label='Megacréditos:' inputType='number' />
      <CardField label='Tags:' inputType='text' />
      <CardField label='Imagen:' inputType='text' />
      <CardField label='Requisitos:' inputType='text' />
      <CardField label='Puntos de victoria:' inputType='number' />
      <CardField label='Expansión:' inputType='text' />
      <CardField label='Efectos' />
      <CardField label='Íconos:' inputType='text' />
      <CardField label='Descripción:' inputType='text' />
    </div>
  )
}
