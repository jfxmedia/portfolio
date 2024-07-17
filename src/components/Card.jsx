/* eslint-disable react/prop-types */
import { useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Card = ({ index, isOpen, toggleOpen, src, url, title, icons, description }) => {
  const contentRef = useRef(null);

  return (
    <section className="mx-4 bg-white rounded-xl">
      <div
        key={index}
        onClick={toggleOpen}
        className={` rounded-xl shadow-lg lg:hover:border-2 border-cyan-700 h-auto p-8 w-full my-4 flex flex-col lg:flex-row cursor-pointer`}>
        <div className="lg:w-1/3 self-start">
          <img
            src={src}
            href={url}
            alt=""
            className='w-full mx-auto mb-4 lg:mb-0 rounded-xl flex shadow-lg border-2 border-cyan-700'
          />
        </div>
        <div className="lg:px-10 lg:pt-0 lg:w-2/3 flex flex-col">
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
              <div className="py-4 font-bold text-cyan-700 hover:translate-x-[15px] transition-all ease-in-out">
                visit {url ? <a href={url} className="underline" target="_blank" rel="noreferrer">
                  {url.replace("https://", "")} 
                  <FontAwesomeIcon className="px-2 text-xl" icon={faArrowRight} />
                </a> : ""}
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
