import { useState } from 'react'
import { sectionWrapper } from '../hoc'
import { reports, reportLinks } from '../constants'
import { downArrow } from '../assets'

const Docs = () => {
  const [active, setActive] = useState('escenarios');
  const [toggle, setToggle] = useState(false);
  const [activeTitle, setActiveTitle] = useState('Escenarios');

  return (
    <>
      <h1 className='text-center text-4xl my-2 w-full border-b-4 border-primary pb-3 text-primary'>
        Documentación
      </h1>
      <div className='flex md:flex-row flex-col mx-10'>
        {/*Computer navigation */}
        <ul className='md:flex hidden no-list flex-col w-[150px] bg-primary justify-center rounded-l-md overflow-hidden'>
          {(reportLinks.map((reportLink) => (
            <li
              className={`${active === reportLink.id ? 'bg-quinary' : ''} hover:cursor-pointer hover:bg-quinary 
              w-full h-full px-4 py-5 transition-all duration-500 linear`}
              onClick={() => { setActive(reportLink.id) }}
              key={reportLink.id}
            >
              {reportLink.tabTitle}
            </li>
          )))}
        </ul>
        {/* Mobile navigation */}
        <div className='relative w-full md:hidden'>
          <p
            className='py-5 px-4 bg-primary rounded-t-md text-center'
            onClick={() => {
              setToggle(!toggle)
            }}
          >
            {activeTitle}
            <img
              className='down-arrow'
              src={downArrow}
              alt="down arrow"
            />
          </p>
          <ul
            className={`${toggle ? '' : 'hidden'} md:hidden  bg-primary nav-mobile z-20 w-full translate-all linear
            duration-500`}
          >
            {(reportLinks.map((reportLink) => (
              <li
                className={`${active === reportLink.id ? 'bg-quinary' : ''} w-full h-full px-4 py-5`}
                onClick={() => {
                  setActiveTitle(reportLink.tabTitle)
                  setActive(reportLink.id)
                  setToggle(false)
                }}
                key={reportLink.id}
              >
                {reportLink.tabTitle}
              </li>
            )))}
          </ul>
        </div>

        {(reports.map((report) => (
          <div
            key={report.id}
            className={`${active === report.id ? 'block' : 'hidden'} relative w-full h-100 p-5 bg-tertiary md:rounded-r-md
            md:rounded-l-none rounded-b-md min-h-[500px]`}
          >
            {report.text.map((text) => (<p key={text.id}>&nbsp;&nbsp;&nbsp;{text.body} <br /></p>))}
            <img
              className='docs-img select-none'
              src={report.bgImg}
              alt=""
              draggable='false'

            />
          </div>
        )))}

      </div>
    </>
  )
}

export default sectionWrapper(Docs, 'documentacion')