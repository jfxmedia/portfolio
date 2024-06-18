/* eslint-disable react/prop-types */
import { useState } from "react"

const Card = (props, index) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <section onMouseEnter={()=> toggleOpen()} onMouseLeave={()=> toggleOpen()} className={`relative px-8 py-10 w-full flex flex-col cursor-pointer`}>
      <img 
        src={props.src} 
        href={props.url}
        alt="" 
        className='w-full mx-auto h-auto rounded-lg flex drop-shadow-lg'
      />
      {isOpen &&
      <div key={index} className="z-50 bg-white absolute left-0 p-8 flex flex-col w-full h-full">
        <div className="p-6 flex flex-wrap">
          <div className="flex flex-col w-full">
            <div className="flex flex-row">
              <h2 className='py-4 text-2xl'>{props.title}</h2>
            </div>
          </div>
          <div>
            <p className="py-4">{props.description}</p>
            <div className="flex flex-row py-4">
              {props.icons}
            </div>
          </div>
          <a href={props.href}>{props.url}</a>
        </div>
      </div>}
    </section>
  )
}

export default Card