/* eslint-disable react/prop-types */

import {useState} from 'react';
import aztecLogo from '../assets/images/aztecLogo.png';

const Navbar = (props) => {

  const [isOpen, setOpen] = useState(false)
  

  return (
    <nav className="w-full mx-auto absolute">
      <div className='flex lg:items-center max-lg:justify-between py-2 max-w-7xl mx-auto px-8 relative'>
        <div className="flex flex-col lg:hidden my-auto z-[999]">
   
        </div>
  
  {/* DESKTOP */}
        <div className='max-lg:hidden lg:flex sm:flex-row py-4 lg:flex-row'>
          <ul className="flex flex-col lg:flex-row">
            <a className='lg:px-4 py-2 rounded-xl text-lg text-colorDark hover:bg-gradient-to-r from-cyan-100 to-lime-200 cursor-pointer hover:font-bold'>{props.work}</a>
            <a className='lg:px-4 py-2 rounded-xl text-lg text-colorDark hover:bg-gradient-to-r from-cyan-100 to-lime-200 cursor-pointer hover:font-bold'>{props.about}</a>
            <a className='lg:px-4 py-2 rounded-xl text-lg text-colorDark hover:bg-gradient-to-r from-cyan-100 to-lime-200 cursor-pointer hover:font-bold'>{props.contact}</a>
          </ul>
        </div>


        <img className='w-12 lg:w-16 h-auto top-1/4 lg:absolute mx-auto lg:left-[47%]' src={aztecLogo} alt=""/>
      </div>
    </nav>
  )
}

export default Navbar