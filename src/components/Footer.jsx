import React from 'react'
import { techUsed } from '../constants'

const Footer = () => {
  return (
    <footer className='flex flex-wrap h-[100px] w-100'>
      <div className='md:w-[60%] w-[100%] bg-primary px-10 h-full flex flex-row justify-between items-center'>
        {
          techUsed.map((tech) => (
            <img 
              key={tech.imgAlt}
              src={tech.img} 
              alt={tech.imgAlt} 
              className='h-[50px]'
            />
          ))
        }
      </div>
      <div className='md:w-[40%] w-[100%] bg-secondary h-full'>

      </div>
    </footer>
  )
}

export default Footer