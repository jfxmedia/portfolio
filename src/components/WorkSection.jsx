/* eslint-disable react/display-name */
import Card from '../components/Card';
import { useState, forwardRef } from 'react';
import { FaShopify, FaHtml5, FaGithub, FaCss3Alt, FaBootstrap, FaVuejs } from "react-icons/fa6";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { SiJavascript, SiAdobecreativecloud } from "react-icons/si";
import jeandousset from "../assets/images/jeandousset.jpg";
import animalinstinctive from "../assets/images/animalinstinctive.jpg";
import chilitechnology from "../assets/images/chilitechnology.jpg";
import chilisleep from "../assets/images/chilisleep.jpg";
import fxweather from "../assets/images/fxweather.jpg";
import portfolio from "../assets/images/portfolio.jpg";

const WorkSection = forwardRef((props, ref) => {
  const [openCard, setOpenCard] = useState(null);
    
  const cards = [
    {
      title: "Software Engineer @ Jeandousset LLC",
      description: ( 
      <>
        <div className='pb-4'>Jeandousset is a high-end luxury jewelry brand based in Los Angeles.
        JD was at the beginning of a 2 dated and malfunctioning websites to <span className='font-bold'>1 Shopify Plus</span> e-commerce storefront migration, 
        when they hired me as their lead Frontend Developer in addition to their current Backend Developer.
        High-octane fast paced position, a startup culture with an extreme hands-on ownership requirement which rewarded out of the box problem solving.
        </div>
          <ul className=''>
            <li className='pb-1'><FontAwesomeIcon icon={faCaretRight} className='pr-2 text-colorTeal' />I was responsible for developing the custom frontend of the current JD website including static and dynamic components, animations and layouts from Figma designs.</li>
            <li className='pb-1'><FontAwesomeIcon icon={faCaretRight} className='pr-2 text-colorTeal' />Modified and revised their frontend checkout experience including payment vendor integrations.</li>
            <li className='pb-1'><FontAwesomeIcon icon={faCaretRight} className='pr-2 text-colorTeal' />Led the Klaviyo integration, built numerous custom email flows based on custom API triggers I built.</li>
            <li className='pb-1'><FontAwesomeIcon icon={faCaretRight} className='pr-2 text-colorTeal' />Built out third party integrations via the Admin API and Flow, integrated third party apps & pixels.</li>
            <li className='pb-1'><FontAwesomeIcon icon={faCaretRight} className='pr-2 text-colorTeal' />Data migration and modification, synced metafields from manual matrixify imports.</li>
            <li className='pb-1'><FontAwesomeIcon icon={faCaretRight} className='pr-2 text-colorTeal' />Built out their on-site UGC experience, quiz forms, and some designs when needed.</li>
            <li className='pb-1'><FontAwesomeIcon icon={faCaretRight} className='pr-2 text-colorTeal' />Developed 40+ Shopify notification emails built from scratch using Shopify Liquid + HTML/CSS.</li>
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
      title: "Frontend Engineer @ Chilisleep/Sleepme",
      description: (
      <>
        <div className='pb-4'>Chilitechnology rebranded as Ooler.co followed by Chilisleep and finally Sleepme. 
        The company built a full in-house development department with an iOS and Android team, in addition to the Frontend and Backend team where I was employed. 
        The transition from Chilisleep to Sleepme began with a brand new <span className='font-bold'>Headless CMS</span> setup with <span className='font-bold'>Shopify</span> & <span className='font-bold'>Strapi</span> on the backend, with <span className='font-bold'>Vue</span> + <span className='font-bold'>NuxtJS</span> + <span className='font-bold'>Bootstrap</span> on the frontend.
        </div>
        <ul className=''>
          <li className='pb-1'><FontAwesomeIcon icon={faCaretRight} className='pr-2 text-colorTeal' />Optimized and integrated the external app library and pixels into the new headless Sleepme storefront.</li>
          <li className='pb-1'><FontAwesomeIcon icon={faCaretRight} className='pr-2 text-colorTeal' />Developed Vue components for the new Sleepme frontend.</li>
          <li className='pb-1'><FontAwesomeIcon icon={faCaretRight} className='pr-2 text-colorTeal' />Integrated and ammended the new bootstrap library with fresh component buildouts.</li>
          <li className='pb-1'><FontAwesomeIcon icon={faCaretRight} className='pr-2 text-colorTeal' />Handled the complete integration of third party pixels using Segment + Tag Manager.</li>
          <li className='pb-1'><FontAwesomeIcon icon={faCaretRight} className='pr-2 text-colorTeal' />Developed theme components with customizable sections and blocks for Chilisleep.</li>
          <li className='pb-1'><FontAwesomeIcon icon={faCaretRight} className='pr-2 text-colorTeal' />Aided in the development of the SASS style library.</li>
          <li className='pb-1'><FontAwesomeIcon icon={faCaretRight} className='pr-2 text-colorTeal' />Built out custom affiliate landing pages for 50+ affiliates using Shopify.</li>
          <li className='pb-1'><FontAwesomeIcon icon={faCaretRight} className='pr-2 text-colorTeal' />Performed AB testing with Optimize and VWO for landing pages and PDPs.</li>
          <li className='pb-1'><FontAwesomeIcon icon={faCaretRight} className='pr-2 text-colorTeal' />Optimizied SEO on Chilisleep, improved loading times, reduced bloat and apps.</li>
          <li className='pb-1'><FontAwesomeIcon icon={faCaretRight} className='pr-2 text-colorTeal' />Developed Klaviyo flows and emails.</li>
        </ul>
      </>
      ),
      url: "https://www.sleep.me",
      href: "https://www.sleep.me",
      src: chilisleep,
      icons: (
        <>
          <FaVuejs className='mr-4 w-10 h-auto text-lime-900' />
          <FaBootstrap className='mr-4 w-10 h-auto text-purple-700' />
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
          <li className='pb-1'><FontAwesomeIcon icon={faCaretRight} className='pr-2 text-colorTeal' />Created 3D and 2D product animations and schematics.</li>
          <li className='pb-1'><FontAwesomeIcon icon={faCaretRight} className='pr-2 text-colorTeal' />Aided in the development of the new Brand Style Guide.</li>
          <li className='pb-1'><FontAwesomeIcon icon={faCaretRight} className='pr-2 text-colorTeal' />Designed thousands of static and animated Facebook, Google, and other PPC ads using keywords and brand assets.</li>
          <li className='pb-1'><FontAwesomeIcon icon={faCaretRight} className='pr-2 text-colorTeal' />Created many landing page assets, images, banners, popups and schematic artwork used on the ecommerce storefront.</li>
          <li className='pb-1'><FontAwesomeIcon icon={faCaretRight} className='pr-2 text-colorTeal' />Created all the merchandise artwork and on-site infographics, both Animated and Static.</li>
          <li className='pb-1'><FontAwesomeIcon icon={faCaretRight} className='pr-2 text-colorTeal' />Designed their proprietary subscription cleaning product packaging and on-site PDP.</li>
          <li className='pb-1'><FontAwesomeIcon icon={faCaretRight} className='pr-2 text-colorTeal' />Helped build and design the structure of physical packaging for the product as well as all paper information and package design.</li> 
          <li className='pb-1'><FontAwesomeIcon icon={faCaretRight} className='pr-2 text-colorTeal' />Owned the Chilitechnology website content management updates and modifcations in Shopify.</li>
          <li className='pb-1'><FontAwesomeIcon icon={faCaretRight} className='pr-2 text-colorTeal' />SEO optimization and best practices constantly executed.</li>
          <li className='pb-1'><FontAwesomeIcon icon={faCaretRight} className='pr-2 text-colorTeal' />Sitespeed monitoring and optimization weekly.</li>
        </ul>
        </>
      )
        ,
      url: "",
      href: "",
      src: chilitechnology,
      icons: (
        <>
          <FaShopify className='mr-4 w-10 h-auto text-lime-400' />
          <SiAdobecreativecloud className='mr-4 w-10 h-auto text-red-500'/>
          <FaCss3Alt className='mr-4 w-10 h-auto text-blue-500' />
          <FaHtml5 className='mr-4 w-10 h-auto text-orange-400' />
        </>
      )
    },
    {
      title: "Animal Instinctive",
      description: (
        <>
          <div>I opened a T-shirt and apparel brand where I design, develop and market the website and its products.
          The goal was to have a simple and clean quick to convert storefront to list my hand made apparel designs inspired by nature and culture. This has been a great side project and has allowed me to keep up to date personally with Shopify and their
          constant updates and feature releases. A mix of creativity, development and marketing.
          </div>
        </>
        ),
      url: "https://www.animalinstinctive.com",
      href: "https://www.animalinstinctive.com",
      src: animalinstinctive,
      git_link: "https://github.com/jfxmedia/animal",
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
      title: "fxWeather",
      description: (
        <>
          <div>As a too frequent user of countless weather apps, I decided to make my own using some free APIs.
            I plan to build this out in my free time to integrate new features I think up. This quickly became pretty complex as I developed features and functions, but as it grows, so does my imagination. 
            Check it out!
          </div>
        </>
        ),
      url: "https://jfxmedia.github.io/fxWeather/",
      href: "https://jfxmedia.github.io/fxWeather/",
      git_link: "https://github.com/jfxmedia/fxweather",
      src: fxweather,
      icons: (
        <>
          <FaGithub className='mr-4 w-10 h-auto text-slate-900' />
          <SiJavascript className='mr-4 w-10 h-auto text-yellow-300'/>
          <FaHtml5 className='mr-4 w-10 h-auto text-orange-400' />
          <FaCss3Alt className='mr-4 w-10 h-auto text-blue-500' />
          <SiAdobecreativecloud className='mr-4 w-10 h-auto text-red-500'/>
        </>
      )
    },
    {
      title: "Portfolio",
      description: (
        <>
          <div>You are here. My goal here was to make a simple but clean Portfolio page where any professional and personal digiital projects can live. 
            I built this in <span className='font-bold'>React + Vite</span> with <span className='font-bold'>TailwindCSS</span> and used <span className='font-bold'>Fontawesome</span> for the icons.
          </div>
        </>
        ),
      url: "https://jfxmedia.com",
      href: "https://jfxmedia.com",
      git_link: "https://github.com/jfxmedia/portfolio",
      src: portfolio,
      icons: (
        <>
          <FaGithub className='mr-4 w-10 h-auto text-slate-900' />
          <SiJavascript className='mr-4 w-10 h-auto text-yellow-300'/>
          <FaHtml5 className='mr-4 w-10 h-auto text-orange-400' />
          <FaCss3Alt className='mr-4 w-10 h-auto text-blue-500' />
        </>
      )
    }
  ];


  return (
    <div ref={ref} className='w-full bg-fuchsia-50 pb-20'>
      <div className="w-full lg:mx-auto max-w-6xl flex flex-wrap justify-between ">
        <div className="px-8 py-10 w-full flex flex-col text-center">
          <div className="text-6xl py-4 text-cyan-700 font-bold">my work</div>
          <div className="py-2 text-lg">Some of my professional work and other projects.</div>
        </div>
        {cards.map((card, index) => (
          <div className="w-full duration-100" key={index}>
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
});

export default WorkSection;
