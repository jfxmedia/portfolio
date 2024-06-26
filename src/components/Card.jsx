/* eslint-disable react/prop-types */
import { useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Card = ({ index, isOpen, toggleOpen, src, url, title, icons, description }) => {
  const contentRef = useRef(null);

  return (
    <section className="mx-8 bg-gradient-to-tl rounded-xl from-cyan-50 to-indigo-50">
      <div
        key={index}
        onClick={toggleOpen}
        className={`h-auto p-8 w-full my-4 flex flex-col lg:flex-row cursor-pointer`}>
        <div className="lg:w-1/3 self-start">
          <img
            src={src}
            href={url}
            alt=""
            className='w-full mx-auto rounded-xl flex drop-shadow-lg border-2 border-cyan-700'
          />
        </div>
        <div className="py-8 lg:p-10 lg:pt-0 lg:w-2/3 flex flex-col">
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
                {url ? <a href={url}  target="_blank" rel="noreferrer">
                  Visit {url.replace("https://", "")} 
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
