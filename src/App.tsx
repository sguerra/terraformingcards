import { FunctionComponent, MouseEvent, useEffect, useState } from 'react'
import './App.css'
import { Button } from './components/Button'
import { CardEditor } from './components/CardEditor'
import { ChangedRecord } from './components/CardField'
import { CardViewer, CardViewerProps } from './components/CardViewer'
import { Header } from './components/Header'
import html2canvas from 'html2canvas'
import { CloudinaryService } from './services/CloudinaryService'
import { ConfettiService } from './services/ConfettiService'
import ThreeDotsSvg from './assets/three-dots.svg'

type CardObject = CardViewerProps

const App: FunctionComponent = () => {
  const [card, setCard] = useState<CardObject & ChangedRecord>({})
  const [cloudinaryURL, setCloudinaryURL] = useState<string | null>(null)
  const [submittedCard, setSubmittedCard] = useState<HTMLCanvasElement | null>(null)

  const changeHandler = (changed: ChangedRecord): void => {
    setCard({ ...card, ...changed })
  }

  const submitHanlder = async (): Promise<void> => {
    const $cardViewer = document.getElementById('cardViewer')
    if ($cardViewer == null) return
    const canvas = await html2canvas($cardViewer, {
      backgroundColor: null,
      removeContainer: false,
      width: 334,
      height: 478
    })
    setSubmittedCard(canvas)
  }

  const shareHandler = (): void => {
    if (cloudinaryURL == null) return
    window.open(cloudinaryURL, 'new')
  }

  const closeHandler = (): void => {
    setSubmittedCard(null)
    setCloudinaryURL(null)
  }

  const mouseMoveHandler = (e: MouseEvent): void => {
    const [width, height] = [334, 478]

    const { pageX, pageY } = e

    const yRotation = (((pageX - 100 - height) / 2) / height) * 5
    const xRotation = (((pageY - 100 - width) / 2) / width) * 5

    e.target.setAttribute('style', `transform: perspective(500px) scale(1.1) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`)
  }

  const mouseOutHandler = (e: MouseEvent): void => {
    const el = e.currentTarget
    el.setAttribute('style', 'transform: perspective(500px) scale(1) rotateX(0) rotateY(0)')
  }

  useEffect(() => {
    if (submittedCard == null) return

    CloudinaryService.upload(submittedCard.toDataURL()).then((secureURL) => {
      setCloudinaryURL(secureURL)
    }) as unknown as Promise<void>
  }, [submittedCard])

  useEffect(() => {
    if (cloudinaryURL == null) return
    ConfettiService.play()
  }, [cloudinaryURL])

  return (
    <div id='mainContainer' className='flex flex-col w-screen h-screen bg-black bg-opacity-50 overflow-scroll'>
      <Header title='Terraforming Cards' />
      <div className='flex flex-col-reverse md:flex-row sm:mb-2 flex-grow text-white'>
        <CardViewer {...card} />
        <div className='h-full flex flex-grow items-center justify-center md:justify-start m-2'>
          <CardEditor onChange={changeHandler} />
        </div>
      </div>
      <div className='h-24 pb-2'>
        <Button id='submit' onClick={submitHanlder as () => void}>
          Continuar
        </Button>
      </div>
      {(submittedCard != null) && (
        <div className='fixed w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-10 backdrop-blur-sm'>
          <div className='text-white flex justify-center items-center rounded-full bg-white bg-opacity-30 hover:bg-opacity-50 cursor-pointer text-3xl w-14 h-14 mb-2' onClick={closeHandler}>
            <span className='-mt-1'>x</span>
          </div>
          <img id='img' className='w-[334px] h-[478px] z-10 transition-shadow hover:shadow-lg hover:shadow-black rounded-3xl bg-black bg-opacity-25' src={`${submittedCard?.toDataURL()}`} alt='submitted card' onMouseMove={mouseMoveHandler} onMouseOut={mouseOutHandler} />
          {cloudinaryURL === null && (
            <img src={ThreeDotsSvg} alt='loading' className='self-center w-12 m-7' />
          )}
          {cloudinaryURL !== null && (
            <Button id='share' onClick={shareHandler} color='secondary'>
              Compartir
            </Button>
          )}
        </div>
      )}
      <div id='confetti' className='left-0 bottom-0' />
    </div>
  )
}

export default App
