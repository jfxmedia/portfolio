import Card from '../components/Card';
import { FaShopify, FaHtml5, FaGithub, FaCss3Alt } from "react-icons/fa6";
import { SiJavascript, SiAdobecreativecloud } from "react-icons/si";
import jeandousset from "../assets/images/jeandousset.jpg";
import animalinstinctive from "../assets/images/animalinstinctive.jpg";
import chilitechnology from "../assets/images/chilitechnology.jpg";
import chilisleep from "../assets/images/chilisleep.jpg";

const WorkSection = () => {
  const cards = [
    {
      title: "Software Engineer @ Jeandousset LLC",
      description: `Jeandousset is a high-end luxury jewelry brand based in Los Angeles, CA. 
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Similique repellendus delectus dolorem eligendi! Nihil, 
        nostrum obcaecati dolore doloribus illum eaque iure vero, 
        optio eligendi dicta consequuntur sit. Repellat, ea magnam.`,
      url: "https://www.jeandousset.com",
      href: "https://www.jeandousset.com",
      src: jeandousset,
      icons: (
        <>
          <FaShopify className='mx-2 w-10 h-auto text-lime-400' />
          <FaGithub className='mx-2 w-10 h-auto text-slate-900' />
          <SiJavascript className='mx-2 w-10 h-auto text-yellow-300'/>
          <FaHtml5 className='mx-2 w-10 h-auto text-orange-400' />
          <FaCss3Alt className='mx-2 w-10 h-auto text-blue-500' />
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
          <FaShopify className='mx-2 w-10 h-auto text-lime-400' />
          <FaGithub className='mx-2 w-10 h-auto text-slate-900' />
          <SiJavascript className='mx-2 w-10 h-auto text-yellow-300'/>
          <FaHtml5 className='mx-2 w-10 h-auto text-orange-400' />
          <FaCss3Alt className='mx-2 w-10 h-auto text-blue-500' />
          <SiAdobecreativecloud className='mx-2 w-10 h-auto text-red-500'/>
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
          <SiAdobecreativecloud className='mx-2 w-10 h-auto text-red-500'/>
          <FaCss3Alt className='mx-2 w-10 h-auto text-blue-500' />
          <FaShopify className='mx-2 w-10 h-auto text-lime-400' />
          <FaHtml5 className='mx-2 w-10 h-auto text-orange-400' />
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
          <FaShopify className='mx-2 w-10 h-auto text-lime-400' />
          <FaGithub className='mx-2 w-10 h-auto text-slate-900' />
          <SiJavascript className='mx-2 w-10 h-auto text-yellow-300'/>
          <FaHtml5 className='mx-2 w-10 h-auto text-orange-400' />
          <FaCss3Alt className='mx-2 w-10 h-auto text-blue-500' />
          <SiAdobecreativecloud className='mx-2 w-10 h-auto text-red-500'/>
        </>
      )
    }
  ];
  
  return (
<div className='w-full'>
  <div className="w-full my-12 lg:mx-auto max-w-6xl flex flex-wrap justify-between">
    {cards.map((card, index) => (
      <div className="lg:w-[48%] w-full flex-shrink-0" key={index}>
        <Card {...card} />
      </div>
    ))}
  </div>
</div>

  );
}

export default WorkSection;
