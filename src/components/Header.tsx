import { FunctionComponent } from 'react'

export const Header: FunctionComponent = () => {
  return (
    <div className='h-16 flex align-center justify-center bg-[url("img/dark-hexagon.jpeg")] bg-cover grayscale rounded-b-xl border-stone-500 border-b-2'>
      <h1 className='self-center text-white text-2xl'>Terraforming Cards</h1>
      <h1 className='self-center text-white text-2xl fixed blur-2xl'>Terraforming Cards</h1>
    </div>
  )
}
