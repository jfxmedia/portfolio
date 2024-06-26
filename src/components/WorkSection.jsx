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
      description: ( 
      <>
        <div className='pb-4'>Jeandousset is a high-end luxury jewelry brand based in Los Angeles, CA.,
        Jeandousset was at the beginning of a 2 wordpress websites to 1 Shopify Plus ecomm storefront migration 
        when they hired me as their lead Frontend Developer in addition to their current Backend Developer.
        High-octane fast paced position, a startup culture with an extremely hands-on ownership requirement which rewarded out of the box problem solving.
        </div>
          <ul className=''>
            <li>Built and revised a huge collection of Metafields used in numerous apps and on the storefront.</li>
            <li>Led the Klaviyo integration and built numerous complex flows based on API triggers I built.</li>
            <li>Developed numerous components and landing pages and Product pages.</li>
            <li>Modified and revised their checkout experience.</li>
            <li>Built out third party integrations via the Storefront API and external apps + tracking pixel integration.</li>
            <li>Data migration and modification, metafield synchronization with manual data imports.</li>
            <li>Developed 40+ Shopify notification emails built from scratch using Liquid/HTML.</li>
          </ul>
      </>
      ),
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
      description: (
      <>
        <div className='pb-4'>Chilitechnology rebranded as Ooler.co followed by Chilisleep and finally Sleepme. 
        The company built a full in-house development department with an iOS and Android team, 
        in addition to the Frontend and Backend team where I was employed.
        </div>
        <ul className=''>
          <li>Aided in the development of the SASS style library.</li>
          <li>Developed theme components with customizable sections and blocks.</li>
          <li>Optimized and integrated the external apps and pixels into the new Sleep.me storefront.</li>
          <li>Built out custom affiliate landing pages for 50+ affiliates.</li>
          <li>Performed Split-testing with Optimize and VWO for landing pages and PDPs.</li>
          <li>Optimizied SEO on Sleep.me, improved loading times, reduced bloat and apps.</li>
        </ul>
      </>
      ),
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
      title: "Lead Designer @ Chilitechnology",
      description: (
        <>
        <div className='pb-4'>
          Chilitechnology was a D2C brand focused on the Sleep Health space, which sold a physical product on their digital storefront.
          I was hired as the Lead of Design in a 3 person marketing team handling everything from Facebook/Meta ads, to paper marketing materials and 50 foot trade show banners.
        </div> 
        <ul className=''>
          <li>Created 3D and 2D product animations and schematics.</li>
          <li>Aided in the development of the new Brand Style Guide.</li>
          <li>Designed thousands of static and animated Facebook, Google, and other PPC ads using keywords and brand assets.</li>
          <li>Created many landing page assets, images, banners, popups and schematic artwork used on the ecommerce storefront.</li>
          <li>Created all the merchandise artwork and on-site infographics, both Animated and Static.</li>
          <li>Designed their proprietary subscription cleaning product packaging and on-site PDP.</li>
          <li>Helped build and design the structure of physical packaging for the product as well as all paper information and package design.</li> 
          <li>Owned the Chilitechnology website content management updates and modifcations in Shopify.</li>
          <li>SEO optimization and best practices constantly executed.</li>
          <li>Sitespeed monitoring and optimization weekly.</li>
        </ul>
        </>
      )
        ,
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
      title: "Owner/Developer",
      description: (
        <>
          <div>I opened a T-shirt and apparel brand where I design, develop and market the website and its products.
          I developed and built the theme from scratch using Shopify Plus. The goal was to have a simple and clean quick to convert storefront to list
          my hand made apparel designs inspired by nature and culture. This has been a great side project and has allowed me to keep up to date personally with Shopify and their
          constant updates and feature releases. A mix of creativity, development and marketing.
          </div>
        </>
        ),
      url: "https://www.animalinstinctive.com",
      href: "https://www.animalinstinctive.com",
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
          <div className="text-6xl py-4 text-cyan-700 font-bold">my work</div>
          <div className="py-2 text-lg">Some of my professional work and other projects.</div>
        </div>
        {cards.map((card, index) => (
          <div className="w-full lg:hover:scale-105 duration-200" key={index}>
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
