import React from 'react'
import { sectionWrapper } from '../hoc'
import { downloadables } from '../constants'

const downloadCard = (id,cardImg, cardImgAlt, link, desc) => {
  return(
    <div
      key={id} 
      className='relative card-shadow w-[200px] bg-primary rounded-md overflow-hidden'
    >
      <div className='flex justify-center items-center p-5 w-full bg-secondary'>
        <img 
          src={cardImg} 
          alt={cardImgAlt} 
          className='h-[70px]'
        />
      </div>
      <div className='card-text text-center mb-5 p-5'>
        <p>
          {desc}
        </p>
        <a 
          className='absolute inset-x-0 bottom-[10px] border-b-2 border-quaternary' 
          href={link}
          target="_blank"
        >
          Download Asset 
        </a>
      </div>
    </div>
  )
}

const Downloads = () => {
  return (
    <>
      <h1 className='text-center text-4xl my-2 w-full border-b-4 border-primary pb-3 text-primary'>
        Descargas
      </h1>
      <div className='flex flex-wrap gap-5 mx-10 justify-center'>
        {downloadables.map((downloadable) => (
          downloadCard(downloadable.id,downloadable.img, downloadable.imgAlt, downloadable.link, downloadable.desc)
        ))}
      </div>
    </>
  )
}

export default sectionWrapper(Downloads, 'downloads') 