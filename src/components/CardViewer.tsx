import { FunctionComponent } from 'react'

export enum Tags {
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
  Greenery = 'greenery-no-o2',
  Ocean = 'ocean',
  City = 'city',
  Colony = 'colony',
}

interface CardViewerProps {
  name?: string
  mc?: number
  tag?: Tags
  vps?: number
  effectText?: string
  flavorText?: string
  requirement?: Requirements
}

const MAX_EFFECT_TEXT = 90
const MAX_FLAVOR_TEXT = 80

function wrapText (text: string, maxLength: number): string {
  return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text
}

export const CardViewer: FunctionComponent<CardViewerProps> = ({
  name = 'Sample Card',
  mc = 99,
  tag = Tags.Moon,
  vps = 5,
  requirement = Requirements.Greenery,
  effectText = 'Agrega un animal a cualquier carta. Incrementa tu produccion de plantas 1 paso.',
  flavorText = 'Un nuevo valle ha sido encontrado.'
}) => {
  const wrappedEffectText = wrapText(effectText, MAX_EFFECT_TEXT)
  const wrappedFlavorText = wrapText(flavorText, MAX_FLAVOR_TEXT)

  return (
    <div className='h-full flex flex-grow items-center justify-end mr-5'>
      <div className='relative w-[334px] h-[478px]'>
        <div className='absolute flex justify-center items-center top-20 left-2 w-[310px] h-[200px] bg-slate-700'>
          <img src='img/upload-icon.png' alt='Upload' className='opacity-50 h-16' />
        </div>
        <div className='relative w-[334px] h-[478px] bg-[url("img/tmtemplates/templates/green_normal.png")] bg-contain bg-no-repeat bg-center'>

          <span className='absolute flex justify-center text-black left-3 top-7 text-2xl w-11'>{mc}</span>

          <div className='absolute flex justify-center items-center left-16 top-7 w-20 h-8 bg-[url("img/tmtemplates/requisites/min_small.png")] bg-contain bg-no-repeat'>
            <img className='h-6' src={`img/tmtemplates/tiles/${requirement}.png`} alt='requirement' />
          </div>

          <img className='absolute right-5 top-5 w-12 h-12' src={`img/tmtemplates/tags/${tag}.png`} alt='tag' />

          <div className='flex text-black absolute w-full justify-center top-16 text-xl uppercase'>{name}</div>

          <div className='text-white absolute left-32 top-[246px] blur-sm'>
            FANMADE
          </div>
          <div className='text-black absolute left-32 top-[246px]'>
            FANMADE
          </div>

          <img className='absolute right-5 bottom-14 w-24 flex justify-center' src={`img/tmtemplates/VPs/${vps}.png`} alt='VPs' />

          <img className='absolute left-24 bottom-[160px] w-8 flex justify-center' src='img/tmtemplates/resources/animal.png' alt='plant1' />

          <div className='absolute flex justify-center items-center left-6 bottom-[150px] w-12 h-12 bg-[url("img/tmtemplates/production-boxes/1x1.png")] bg-contain'>
            <img className='w-8' src='img/tmtemplates/resources/plant.png' alt='production' />
          </div>

          <span className='absolute flex items-center justify-center text-center text-black left-8 bottom-16 text-sm w-44 h-20'>({wrappedEffectText})</span>

          <span className='absolute w-64 h-8 flex justify-center items-center text-center italic  text-black right-10 bottom-6 text-xs border-black border-t'>
            {wrappedFlavorText}
          </span>
        </div>
      </div>
    </div>
  )
}
