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

interface CardViewerProps {
  name?: string
  mc?: number
  tag?: Tags
  vps?: number
}

export const CardViewer: FunctionComponent<CardViewerProps> = ({
  name = 'Sample Card',
  mc = 99,
  tag = Tags.Moon,
  vps = 5
}) => {
  return (
    <div className='h-full flex flex-grow items-center justify-end mr-5'>
      <div className='relative w-[334px] h-[478px]'>
        <div className='absolute flex justify-center items-center top-20 left-2 w-[310px] h-[200px] bg-slate-700'>
          <img src='img/upload-icon.png' alt='Upload' className='opacity-50 h-16' />
        </div>
        <div className='relative w-[334px] h-[478px] bg-[url("img/tmtemplates/templates/green_normal.png")] bg-contain bg-no-repeat bg-center'>
          <span className='absolute flex justify-center text-black left-3 top-7 text-2xl w-11'>{mc}</span>
          <div className='absolute flex justify-center items-center left-16 top-7 w-20 h-8 bg-[url("img/tmtemplates/requisites/min_small.png")] bg-contain bg-no-repeat'>
            <div className='w-6 h-6 bg-[url("img/tmtemplates/tiles/greenery-no-o2.png")] bg-contain bg-no-repeat' />
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

          <img className='absolute left-6 bottom-40 w-8 flex justify-center' src='img/tmtemplates/resources/plant.png' alt='plant1' />
          <img className='absolute left-16 bottom-40 w-8 flex justify-center' src='img/tmtemplates/resources/plant.png' alt='plant2' />

          <img className='absolute left-6 bottom-24 w-12 flex justify-center' src='img/tmtemplates/production-boxes/1x1.png' alt='VPs' />
          <img className='absolute left-8 bottom-24 w-8 flex justify-center' src='img/tmtemplates/resources/plant.png' alt='VPs' />

          <span className='absolute flex justify-center font-sans  text-black right-28 bottom-14 text-sm w-32'>(Add two animals to any card. Increase your plant production 1 steps.)</span>

          <span className='absolute flex justify-center font-sans font-light italic  text-black right-10 bottom-7 text-sm '>
            Un nuevo valle ha sido encontrado.
          </span>
        </div>
      </div>
    </div>
  )
}
