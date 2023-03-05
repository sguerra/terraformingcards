import { FunctionComponent } from 'react'
import './App.css'
import { Button } from './components/Button'
import { CardEditor } from './components/CardEditor'
import { CardViewer } from './components/CardViewer'
import { Header } from './components/Header'

const App: FunctionComponent = () => {
  return (
    <div className='flex flex-col w-screen h-screen bg-black bg-opacity-50'>
      <Header title='Terraforming Cards' />
      <div className='flex flex-row flex-grow text-white'>
        <CardViewer />
        <div className='h-full flex flex-grow items-center justify-start ml-5'>
          <CardEditor />
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
