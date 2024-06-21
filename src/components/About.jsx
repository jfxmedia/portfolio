import flyfishing from "../assets/images/flyfishing.jpg";

function About(props) {
  return (
    <section className="my-12 w-full">
      <div className="mx-auto max-w-6xl flex flex-col lg:flex-row relative">
        <div className="flex w-full h-auto">
          <img 
            src={flyfishing}
            alt="" 
            className='w-full h-auto rounded-xl flex shadow-lg'/>
        </div>
        <div className="text-cyan-800 bg-white absolute right-0 mr-[2rem] border-2 border-white lg:w-1/3 h-auto rounded-xl self-center">
          <div className=" text-3xl font-bold p-10 pb-4">{props.title}</div>
          <div className="p-10 pt-2">{props.description} </div>
        </div>
      </div>
    </section>
  );
}

export default About;
