import { FunctionComponent } from 'react'

export enum Tags {
  None = 'none',
  Animal = 'animal',
  Building = 'building',
  City = 'city',
  Earth = 'earth',
  Event = 'event',
  Galactic = 'galactic',
  Infrastructure = 'infrastructure',
  Jovian = 'jovian',
  Mars = 'mars',
  Microbe = 'microbe',
  Moon = 'moon',
  Planetary = 'planetary',
  Plant = 'plant',
  Power = 'power',
  Radioactive = 'radioactive',
  Science = 'science',
  Space = 'space',
  Venus = 'venus',
  Wild = 'wild'
}

export enum Requirements {
  None = 'none',
  Greenery = 'greenery-no-o2',
  Ocean = 'ocean',
  City = 'city',
  Colony = 'colony',
}

export interface CardViewerProps {
  name?: string
  mc?: number
  tag?: Tags
  vps?: number
  effectText?: string
  flavorText?: string
  requirement?: Requirements
  image?: string
}

const MAX_EFFECT_TEXT = 100
const MAX_FLAVOR_TEXT = 80

function wrapText (text: string, maxLength: number): string {
  return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text
}

export const CardViewer: FunctionComponent<CardViewerProps> = ({
  name = 'Carta Ejemplo',
  mc = 1,
  tag = Tags.Plant,
  vps = 1,
  requirement = Requirements.Greenery,
  effectText = 'Agrega un animal a cualquier carta. Incrementa tu produccion de plantas 1 paso.',
  flavorText = 'Un nuevo valle ha sido encontrado.',
  image = 'img/mars.jpeg'
}) => {
  const wrappedEffectText = wrapText(effectText, MAX_EFFECT_TEXT)
  const wrappedFlavorText = wrapText(flavorText, MAX_FLAVOR_TEXT)

  return (
    <div className='h-full flex flex-grow items-center justify-center md:justify-end m-2'>
      <div id='cardViewer' className='relative w-[334px] h-[478px] m-0 p-0'>
        <div className='absolute flex flex-col justify-center items-center top-20 left-2 w-[310px] h-[200px] overflow-hidden bg-slate-700'>
          <img src='img/upload-icon.png' alt='Upload' className='opacity-50 h-12 -mt-5' />
          <span className='text-sm opacity-50 pt-2'>Subir archivo</span>
          {image !== '' && (
            <img src={image} className='absolute flex top-0 left-0 w-full h-full object-cover' alt='uploaded image' />
          )}
        </div>
        <div className='relative w-[334px] h-[478px] bg-[url("../public/img/tmtemplates/templates/green_normal.png")] bg-contain bg-no-repeat bg-center'>

          <span className='absolute flex justify-center text-black left-3 top-7 text-2xl w-11'>{mc}</span>

          {requirement !== Requirements.None && (
            <div className='absolute flex justify-center items-center left-16 top-7 w-20 h-8 bg-[url("../public/img/tmtemplates/requisites/min_small.png")] bg-contain bg-no-repeat'>
              <img className='h-6' src={`img/tmtemplates/tiles/${requirement}.png`} alt='requirement' />
            </div>
          )}

          {tag !== Tags.None && (
            <img className='absolute right-5 top-5 w-12 h-12' src={`img/tmtemplates/tags/${tag}.png`} alt='tag' />
          )}
          <div className='flex text-black absolute w-full justify-center top-16 text-xl uppercase'>{name}</div>

          <div className='text-white absolute left-32 top-[252px] blur-sm'>
            FANMADE
          </div>
          <div className='text-black absolute left-32 top-[252px]'>
            FANMADE
          </div>

          <img className='absolute right-5 bottom-20 w-24 flex justify-center' src={`img/tmtemplates/VPs/${vps}.png`} alt='VPs' />

          <span className='absolute left-8 bottom-20 w-44 h-28 flex items-center justify-center text-sm text-center text-black'>({wrappedEffectText})</span>

          <span className='absolute w-64 h-8 right-10 bottom-8 flex justify-center items-center text-center italic  text-black text-xs border-black border-t'>
            {wrappedFlavorText}
          </span>
        </div>
      </div>
    </div>
  )
}
