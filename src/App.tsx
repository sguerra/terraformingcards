import { FunctionComponent } from 'react'
import './App.css'
import { Button } from './components/Button'
import { CardField } from './components/CardField'
import { Header } from './components/Header'

const App: FunctionComponent = () => {
  return (
    <div className='flex flex-col w-screen h-screen bg-black bg-opacity-50'>
      <Header title='Terraforming Cards' />
      <div className='flex flex-row flex-grow text-white'>
        <div className='h-full flex flex-grow items-center justify-center'>Card Viewer</div>
        <div className='h-full flex flex-grow items-center justify-center'>
          <div className='bg-contain pt-12 h-[478px] w-[334px] bg-[url("img/tmtemplates/resources/card.png")]'>
            <CardField label='Nombre' inputType='text' />
            <CardField label='Megacréditos:' inputType='number' />
            <CardField label='Tags:' inputType='text' />
            <CardField label='Imagen:' inputType='text' />
            <CardField label='Requisitos:' inputType='text' />
            <CardField label='Puntos de victoria:' inputType='number' />
            <CardField label='Expansión:' inputType='text' />
            <CardField label='Efectos:' />
            <CardField label='Íconos:' inputType='text' />
            <CardField label='Descripción:' inputType='text' />
          </div>
        </div>
      </div>
      <div className='h-20'>
        <Button>
          Submit Card
        </Button>
      </div>
    </div>
  )
}

export default App
