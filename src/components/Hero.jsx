/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'; 
import SayHi from './SayHi';

const Hero = ({ title, subtitle, scrollToRef }) => {
  const handleClick = () => {
    scrollToRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="w-full bg-gradient-to-b from-lime-50 to-lime-100">
      <div className="mx-auto rounded-b-xl">
        <div className="flex flex-col w-full mx-auto max-w-7xl h-[100vh] relative">
          <div className="m-auto px-4 max-w-xl lg:max-w-5xl text-center">
            <div className="text-3xl p-10 font-bold text-cyan-700">{subtitle}</div>
            <h1 className="font-bold tracking-tight text-left lg:text-center text-transparent bg-gradient-to-r from-fuchsia-400 to-cyan-400 text-7xl md:text-8xl lg:text-9xl bg-clip-text">{title}</h1>
          </div>
            <SayHi />
          <FontAwesomeIcon 
            onClick={handleClick} 
            className=' text-cyan-700 text-4xl mx-auto animate-bounceLimited pb-16 cursor-pointer' 
            icon={faChevronDown}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
