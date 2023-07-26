import { useState } from 'react'
import { navLinks } from '../constants'
import { burgerMenu } from '../assets'


const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <nav className='sticky top-0 z-50 w-full py-5 px-10 flex justify-between items-center bg-primary'>
      <h1 className='text-4xl'>
        <a href="#">
          Frogger Remastered
        </a>
      </h1>
      <div>
        <ul className='md:flex hidden flex-row gap-10'>
          {(navLinks.map((navlLink) => (
            <li
              className='text-xl nav-link-color'
              key={navlLink.id}
            >
              <a href={`#${navlLink.id}`}>
                {navlLink.title}
              </a>
            </li>
          )))}
        </ul>
      </div>
      <div className='md:hidden relative'>
        <img
          src={burgerMenu}
          alt="menu"
          onClick={() => {
            setToggle(!toggle)
          }}
          className='h-5'
        />
        <ul className={`${toggle ? '' : 'hidden'} nav-mobile right-[-20px] p-5 top-[50px] bg-primary 
        flex flex-col gap-10 rounded-b-2`}>
          {(navLinks.map((navlLink) => (
            <li
              className='text-xl nav-link-color'
              key={navlLink.id}
            >
              <a href={`#${navlLink.id}`}>
                {navlLink.title}
              </a>
            </li>
          )))}
        </ul>
      </div>

    </nav>
  )
}

export default Navbar