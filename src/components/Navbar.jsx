/* eslint-disable react/prop-types */

import {useState} from 'react';
import { Cross as Hamburger } from 'hamburger-react'
import aztecLogo from '../assets/images/aztecLogo.png';

const Navbar = (props) => {

  const [isOpen, setOpen] = useState(false)
  

  return (
    <nav className="relative flex lg:items-center max-lg:justify-between w-full py-2 px-8 max-w-7xl mx-auto">
      <div className="flex flex-col lg:hidden my-auto z-[999]">
        <Hamburger
          toggled={isOpen} 
          toggle={setOpen}
          label='Show mobile menu'
          rounded
          color="#1f1f1f"
        />
      </div>

{/* DESKTOP */}
      <div className='max-lg:hidden lg:flex sm:flex-row py-4 lg:flex-row'>
        <ul className="flex flex-col lg:flex-row">
          <a className='lg:px-4 py-2 rounded-lg text-lg text-colorDark hover:bg-gradient-to-r from-cyan-100 to-lime-200 cursor-pointer hover:font-bold'>{props.work}</a>
          <a className='lg:px-4 py-2 rounded-lg text-lg text-colorDark hover:bg-gradient-to-r from-cyan-100 to-lime-200 cursor-pointer hover:font-bold'>{props.about}</a>
          <a className='lg:px-4 py-2 rounded-lg text-lg text-colorDark hover:bg-gradient-to-r from-cyan-100 to-lime-200 cursor-pointer hover:font-bold'>{props.contact}</a>
        </ul>
      </div>

{/* MOBILE */}
{isOpen &&
      <div id='mobileMenu' className='z-[99] fixed top-0 left-0 lg:hidden w-full h-full bg-white flex sm:flex-row lg:flex-row'>
        <div className="flex flex-col justify-center text-center mx-auto lg:flex-row text-colorDark">
          <a href='' className='p-6 text-3xl cursor-auto'>{props.work}</a>
          <a href='' className='p-6 text-3xl cursor-auto'>{props.about}</a>
          <a href='' className='p-6 text-3xl cursor-auto'>{props.contact}</a>
        </div>
      </div>}
      <img className='w-12 lg:w-16 h-auto top-1/8 lg:absolute lg:left-[47%]' src={aztecLogo} alt=""/>
    </nav>
  )
}

export default Navbar