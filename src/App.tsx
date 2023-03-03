import { FunctionComponent } from 'react'
import './App.css'
import { Button } from './components/Button'
import { Header } from './components/Header'

const App: FunctionComponent = () => {
  return (
    <div className='flex flex-col w-screen h-screen bg-black bg-opacity-50'>
      <Header />
      <div className='flex flex-row flex-grow text-white'>
        <div className='h-full flex flex-grow items-center justify-center'>Card Viewer</div>
        <div className='h-full flex flex-grow items-center justify-center'>Card Editor</div>
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
