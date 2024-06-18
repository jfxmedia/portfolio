/* eslint-disable react/prop-types */
import { useState } from 'react'


const Hero = (props) => {
  return (
    <section className="lg:mx-8">
      <div className="mx-auto bg-gradient-to-br to-cyan-100 from-white rounded-lg max-w-7xl">
        <div className="flex flex-col w-full text-left mx-auto h-[400px] lg:h-[600px]">
          <div className="rounded-lg max-w-sm m-auto">
            <h1 className="font-bold text-transparent bg-gradient-to-r from-lime-300 to-cyan-300 text-9xl p-2 bg-clip-text">{props.title}</h1>
            <p className="p-2 text-2xl text-colorDark font-bold">{props.subtitle}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero