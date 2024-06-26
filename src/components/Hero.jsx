/* eslint-disable react/prop-types */


const Hero = ({title, subtitle}) => {
  return (
    <section className="w-full">
      <div className="mx-auto bg-gradient-to-br from-teal-100 to-purple-100 rounded-b-xl">
        <div className="flex flex-col w-full mx-auto max-w-7xl  h-[75vh]">
          <div className="m-auto max-w-xl lg:max-w-5xl text-center">
            <div className="text-3xl p-10 font-bold text-cyan-700">{subtitle}</div>
            <h1 className="font-bold text-transparent bg-gradient-to-r from-purple-400 to-cyan-300 text-8xl lg:text-9xl bg-clip-text">{title}</h1>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero