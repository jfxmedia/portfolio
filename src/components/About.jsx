import flyfishing from "../assets/images/flyfishing.jpg";

function About(props) {
  return (
    <section className="w-full pb-20 text-colorDark">
      <div className="max-w-6xl px-8 mx-auto w-full flex flex-col lg:flex-row justify-center relative">
        <div className="flex w-full">
          <img 
            src={flyfishing}
            alt="" 
            className='lg:w-4/5 h-auto rounded-lg flex shadow-lg'/>
        </div>
        <div className="lg:w-2/5 h-auto mx-auto bg-gradient-to-br from-white to-cyan-100 rounded-lg lg:absolute lg:right-[2rem] lg:top-[20%]">
          <div className="text-2xl font-bold px-10 pt-8 pb-2">{props.title}</div>
          <div className="px-10 pb-8 pt-2">{props.description} </div>
        </div>
      </div>
    </section>
  );
}

export default About;
