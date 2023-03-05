import { FunctionComponent } from 'react'

export enum Tags {
  Animal = 'animal',
  Earth = 'earth',
  Plant = 'plant',
  Space = 'space',
  Venus = 'venus'
}

interface CardViewerProps {
  name?: string
  mc?: number
  tag?: Tags
  vps?: number
}

export const CardViewer: FunctionComponent<CardViewerProps> = ({
  name = 'Sample Card',
  mc = 5,
  tag = Tags.Plant,
  vps = 1
}) => {
  return (
    <div className='h-full flex flex-grow items-center justify-end mr-5'>
      <div className='relative w-[334px] h-[478px]'>
        <div className='absolute flex justify-center items-center top-20 left-2 w-[310px] h-[200px] bg-slate-700'>
          <img src='img/upload-icon.png' alt='Upload' className='opacity-50 h-16' />
        </div>
        <div className='relative w-[334px] h-[478px] bg-[url("img/tmtemplates/templates/green_normal.png")] bg-contain bg-no-repeat bg-center'>
          <span className='absolute text-black left-7 top-7 text-2xl'>{mc}</span>
          <div className='absolute flex justify-center items-center left-16 top-7 w-20 h-8 bg-[url("img/tmtemplates/requisites/min_small.png")] bg-contain bg-no-repeat'>
            <div className='w-6 h-6 bg-[url("img/tmtemplates/tiles/greenery-no-o2.png")] bg-contain bg-no-repeat' />
          </div>
          <div className={`absolute flex justify-center items-center right-5 top-5 w-12 h-12 bg-[url("img/tmtemplates/tags/${tag}.png")] bg-contain bg-no-repeat`} />
          <div className='flex text-black absolute w-full justify-center top-16 text-xl uppercase'>{name}</div>
          <div className='text-white absolute left-32 top-[246px] blur-sm'>
            FANMADE
          </div>
          <div className='text-black absolute left-32 top-[246px]'>
            FANMADE
          </div>
          <div className={`absolute flex justify-center items-center right-5 bottom-14 w-24 h-24 bg-[url("img/tmtemplates/VPs/${vps}.png")] bg-contain bg-no-repeat`} />
        </div>
      </div>
    </div>
  )
}
