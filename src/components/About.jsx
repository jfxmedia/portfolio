/* eslint-disable react/prop-types */
import flyfishing from "../assets/images/flyfishing.jpg";

function About({title, description}) {
  return (
    <section className="w-full mx-auto max-w-6xl my-12">
      <div className="w-full flex flex-col-reverse lg:flex-row">
        <div className="lg:w-1/3 text-cyan-700 self-center p-8 lg:p-8">
          <div className="text-5xl font-bold pb-4">{title}</div>
          <div className="">{description}</div>
        </div>
        <div className="mx-8 lg:w-2/3">
          <img 
            src={flyfishing}
            alt="" 
            className='w-full h-auto rounded-xl flex shadow-lg'/>
        </div>
      </div>
    </section>
  );
}

export default About;
