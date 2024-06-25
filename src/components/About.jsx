import flyfishing from "../assets/images/flyfishing.jpg";

function About(props) {
  return (
    <section className="w-full mx-auto max-w-6xl my-12">
      <div className="w-full flex flex-col lg:flex-row">
        <div className="mx-8 w-2/3">
          <img 
            src={flyfishing}
            alt="" 
            className='w-full h-auto rounded-xl flex shadow-lg'/>
        </div>
        <div className="lg:w-1/3 text-cyan-800">
          <div className=" text-3xl font-bold p-10 pb-4">{props.title}</div>
          <div className="p-10 pt-2">{props.description} </div>
        </div>
      </div>
    </section>
  );
}

export default About;
