/* eslint-disable react/prop-types */
import { useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

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
            className='w-full mx-auto rounded-xl flex drop-shadow-lg border-2 border-cyan-800'
          />
        </div>
        <div className="py-8 lg:p-10 lg:pt-0 lg:w-2/3 flex flex-col">
          <div className="flex flex-wrap">
            <div className="flex flex-col w-full">
              <div className="flex flex-row">
                <h2 className='pb-4 text-4xl leading-[3.5rem] text-cyan-800'>{title}</h2>
              </div>
            </div>
            <div className="">
              <div className="flex flex-row py-4">{icons}</div>
            </div>
            <div
              ref={contentRef}
              style={{
                maxHeight: isOpen ? `${contentRef.current.scrollHeight}px` : '140px',
                transition: 'max-height 0.2s ease-out',
                overflow: 'hidden',
              }}
              className={`description-content transition-all duration-300 ease-in-out ${isOpen ? 'description-content-open' : ''}`}>
              {description}
            </div>
            <FontAwesomeIcon
              className="text-2xl py-4 text-cyan-800"
              icon={isOpen ? faChevronUp : faChevronDown}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
