/* eslint-disable react/prop-types */
import { useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FaGithub } from "react-icons/fa6";


const Card = ({ index, isOpen, toggleOpen, src, url, title, icons, description, git_link }) => {
  const contentRef = useRef(null);

  return (
    <section className="mx-4 bg-white rounded-xl">
      <div
        key={index}
        onClick={toggleOpen}
        className={` rounded-xl shadow-lg lg:hover:border-2 border-cyan-700 h-auto p-8 w-full my-4 flex flex-col lg:flex-row cursor-pointer`}>
        <div className="lg:w-2/5 self-start">
          <img
            src={src}
            href={url}
            alt=""
            className='w-full mx-auto mb-4 lg:mb-0 rounded-xl flex shadow-lg border-2 border-cyan-700'
          />
        </div>
        <div className="lg:px-10 lg:pt-0 lg:w-3/5 flex flex-col">
          <div className="flex flex-wrap">
            <div className="flex flex-col w-full">
              <div className="flex flex-row">
                <h2 className='pb-4 text-4xl font-bold text-cyan-700'>{title}</h2>
              </div>
            </div>
            <div className="">
              <div className="flex flex-row py-4">{icons}</div>
            </div>
            <div
              ref={contentRef}
              style={{
                maxHeight: isOpen ? `${contentRef.current.scrollHeight}px` : '135px',
                transition: 'max-height 0.2s ease-out',
                overflow: 'hidden',
              }}
              className={`description-content transition-all duration-300 ease-in-out ${isOpen ? 'description-content-open' : ''}`}>
              {description}
              <div className="py-4 flex flex-col font-bold text-cyan-700">
                {url ? <a href={url} className="underline hover:translate-x-[10px] transition-all ease-in-out" target="_blank" rel="noreferrer">
                  {url.replace("https://", "")} 
                  <FontAwesomeIcon 
                  className="px-2 text-xl " 
                  icon={faArrowRight} />
                </a> : ""}
                { git_link ? 
                  <a href={git_link} target="_blank" rel="noreferrer noopener" className="text-xl underline hover:translate-x-[10px] transition-all ease-in-out py-4 flex flex-row">
                    <FaGithub  href={git_link} />
                    <FontAwesomeIcon className="px-2" icon={faArrowRight} />
                  </a> : '' }
              </div>
            </div>
            <FontAwesomeIcon
              className="text-2xl py-4 text-cyan-700"
              icon={isOpen ? faChevronUp : faChevronDown}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
