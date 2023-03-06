import { FunctionComponent } from 'react'
import { CardField, ChangedRecord } from './CardField'

interface CardEditorProps {
  onChange: (card: ChangedRecord) => void
}

export const CardEditor: FunctionComponent<CardEditorProps> = ({ onChange = () => {} }) => {
  return (
    <div className='bg-contain pt-12 h-[478px] w-[334px] bg-[url("img/tmtemplates/resources/card.png")]'>
      <CardField label='Nombre:' propName='name' inputType='text' onChange={onChange} />
      <CardField label='Megacréditos:' propName='mc' inputType='number' numberRange={{ min: 1, max: 99 }} onChange={onChange} />
      <CardField label='Tags:' propName='tag' inputType='select-tag' onChange={onChange} />
      <CardField label='Imagen:' inputType='text' />
      <CardField label='Requisitos:' propName='requirement' inputType='select-requisite' onChange={onChange} />
      <CardField label='P de victoria:' propName='vps' inputType='number' numberRange={{ min: 1, max: 5 }} onChange={onChange} />
      <CardField label='Expansión:' inputType='text' />
      <CardField label='Efectos' />
      <CardField label='Íconos:' inputType='text' />
      <CardField label='Descripción:' propName='effectText' inputType='text' onChange={onChange} />
      <CardField label='Contexto:' propName='flavorText' inputType='text' onChange={onChange} />
    </div>
  )
}
