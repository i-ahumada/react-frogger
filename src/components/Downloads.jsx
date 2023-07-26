import { sectionWrapper } from '../hoc'
import { downloadables } from '../constants'
import { useEffect } from 'react'

const downloadCard = (id, cardImg, cardImgAlt, link, desc) => {
  return (
    <div
      key={id}
      className='card relative card-shadow w-[200px] bg-primary rounded-md overflow-hidden hidden-op'
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
          rel="noreferrer"
        >
          Download Asset
        </a>
      </div>
    </div>
  )
}

const Downloads = () => {
  console.log('loads')
  useEffect(() => {
    const cards = document.querySelectorAll('.card');
    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show')
          observer.unobserve(entry.target);
        } else {
          entry.target.classList.remove('show');
        }
      })
    }
    // Variables for dynamic styling
    const baseDelay = 400;
    let delay = 0;
    let zIndex = 30;
    let currRectY = 0;

    const observer = new IntersectionObserver(callback);

    cards.forEach((card) => {
      // Dynamic styling for each card depending of what row they're in
      const rect = card.getBoundingClientRect();
      if (rect.y !== currRectY) {
        currRectY = rect.y;
        delay = 0;
        zIndex = 30;
      }
      card.style['transition-delay'] = delay + 'ms';
      card.style['z-index'] = zIndex;
      zIndex--;
      delay += baseDelay;

      // Add observer
      observer.observe(card)
    });
  }, [])

  return (
    <>
      <h1 className='text-center text-4xl my-2 w-full border-b-4 border-primary pb-3 text-primary'>
        Descargas
      </h1>
      <div className='flex flex-wrap gap-5 mx-10 justify-center'>
        {downloadables.map((downloadable) => (
          downloadCard(downloadable.id, downloadable.img, downloadable.imgAlt, downloadable.link, downloadable.desc)
        ))}
      </div>
    </>
  )
}


export default sectionWrapper(Downloads, 'descargas') 