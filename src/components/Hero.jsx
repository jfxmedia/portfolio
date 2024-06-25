/* eslint-disable react/prop-types */


const Hero = ({title, subtitle}) => {
  return (
    <section className="w-full">
      <div className="mx-auto bg-gradient-to-br from-teal-100 to-purple-100 rounded-b-xl">
        <div className="flex flex-col w-full max-w-7xl h-[75vh] text-left mx-auto">
          <div className="max-w-md m-auto">
            <h1 className="font-bold text-transparent bg-gradient-to-r from-lime-300 to-cyan-300 text-[10rem] bg-clip-text">{title}</h1>
            <p className="p-2 text-2xl text-cyan-800 font-bold">{subtitle}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero