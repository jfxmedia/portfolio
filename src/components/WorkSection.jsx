import Card from '../components/Card';
import { useState } from 'react';
import { FaShopify, FaHtml5, FaGithub, FaCss3Alt } from "react-icons/fa6";
import { SiJavascript, SiAdobecreativecloud } from "react-icons/si";
import jeandousset from "../assets/images/jeandousset.jpg";
import animalinstinctive from "../assets/images/animalinstinctive.jpg";
import chilitechnology from "../assets/images/chilitechnology.jpg";
import chilisleep from "../assets/images/chilisleep.jpg";

const WorkSection = () => {
  const [openCard, setOpenCard] = useState(null);
  const cards = [
    {
      title: "Software Engineer @ Jeandousset LLC",
      description: `Jeandousset is a high-end luxury jewelry brand based in Los Angeles, CA. 
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Similique repellendus delectus dolorem eligendi! Nihil, 
        nostrum obcaecati dolore doloribus illum eaque iure vero, 
        optio eligendi dicta consequuntur sit. Repellat, ea magnam.
        ipsum dolor sit amet consectetur adipisicing elit. 
        Similique repellendus delectus dolorem eligendi! Nihil, 
        nostrum obcaecati dolore doloribus illum eaque iure vero, 
        optio eligendi dicta consequuntur sit. Repellat, ea magnam.
        ipsum dolor sit amet consectetur adipisicing elit. 
        Similique repellendus delectus dolorem eligendi! Nihil, 
        nostrum obcaecati dolore doloribus illum eaque iure vero, 
        optio eligendi dicta consequuntur sit. Repellat, ea magnam.
        ipsum dolor sit amet consectetur adipisicing elit. 
        Similique repellendus delectus dolorem eligendi! Nihil, 
        nostrum obcaecati dolore doloribus illum eaque iure vero, 
        optio eligendi dicta consequuntur sit. Repellat, ea magnam.`,
      url: "https://www.jeandousset.com",
      href: "https://www.jeandousset.com",
      src: jeandousset,
      icons: (
        <>
          <FaShopify className='mr-4 w-10 h-auto text-lime-400' />
          <FaGithub className='mr-4 w-10 h-auto text-slate-900' />
          <SiJavascript className='mr-4 w-10 h-auto text-yellow-300'/>
          <FaHtml5 className='mr-4 w-10 h-auto text-orange-400' />
          <FaCss3Alt className='mr-4 w-10 h-auto text-blue-500' />
        </>
      )
    },
    {
      title: "Frontend Engineer @ Sleepme",
      description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Similique repellendus delectus dolorem eligendi! Nihil, 
        nostrum obcaecati dolore doloribus illum eaque iure vero, 
        optio eligendi dicta consequuntur sit. Repellat, ea magnam.`,
      url: "https://www.sleep.me",
      href: "https://www.sleep.me",
      src: chilisleep,
      icons: (
        <>
          <FaShopify className='mr-4 w-10 h-auto text-lime-400' />
          <FaGithub className='mr-4 w-10 h-auto text-slate-900' />
          <SiJavascript className='mr-4 w-10 h-auto text-yellow-300'/>
          <FaHtml5 className='mr-4 w-10 h-auto text-orange-400' />
          <FaCss3Alt className='mr-4 w-10 h-auto text-blue-500' />
          <SiAdobecreativecloud className='mr-4 w-10 h-auto text-red-500'/>
        </>
      )
    },
    {
      title: "Lead Designer @ Chilisleep",
      description: `Chilitechnology/Chilisleep was a D2C brand focused on the Sleep Health space, which sold a physical product on their digital storefront.
        I began as the Designer in a 3 person marketing team handling everything from Facebook (at the time) ads, to paper marketing materials and 50' trade show banners, to 3D animation and physical packaging design. 
        I worked in Shopify exclusively for their new e-commerce store, handling content management to apps and services and all design.`,
      url: "",
      href: "",
      src: chilitechnology,
      icons: (
        <>
          <SiAdobecreativecloud className='mr-4 w-10 h-auto text-red-500'/>
          <FaCss3Alt className='mr-4 w-10 h-auto text-blue-500' />
          <FaShopify className='mr-4 w-10 h-auto text-lime-400' />
          <FaHtml5 className='mr-4 w-10 h-auto text-orange-400' />
        </>
      )
    },
    {
      title: "Owner/Founder",
      description: `I started a POD T-shirt and apparel company where I design, develop and market the website and its products. 
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Similique repellendus delectus dolorem eligendi! Nihil, 
        nostrum obcaecati dolore doloribus illum eaque iure vero, 
        optio eligendi dicta consequuntur sit. Repellat, ea magnam.`,
      url: "https://www.sleep.me",
      href: "https://www.sleep.me",
      src: animalinstinctive,
      icons: (
        <>
          <FaShopify className='mr-4 w-10 h-auto text-lime-400' />
          <FaGithub className='mr-4 w-10 h-auto text-slate-900' />
          <SiJavascript className='mr-4 w-10 h-auto text-yellow-300'/>
          <FaHtml5 className='mr-4 w-10 h-auto text-orange-400' />
          <FaCss3Alt className='mr-4 w-10 h-auto text-blue-500' />
          <SiAdobecreativecloud className='mr-4 w-10 h-auto text-red-500'/>
        </>
      )
    }
  ];
  
  return (
    <div className='w-full'>
      <div className="w-full lg:mx-auto max-w-6xl flex flex-wrap justify-between">
        <div className="px-8 py-10 w-full flex flex-col text-center">
          <div className="text-6xl py-4 text-cyan-800 font-bold">my work</div>
          <div className="py-2 text-lg">Some of my professional work history and other projects</div>
        </div>
        {cards.map((card, index) => (
          <div className="w-full" key={index}>
            <Card {...card} 
            index={index}
            isOpen={openCard === index}
            toggleOpen={() => setOpenCard(openCard === index ? null : index)}
            />
          </div>
        ))}
      </div>
    </div>

  );
}

export default WorkSection;
