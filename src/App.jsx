import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WorkSection from "./components/WorkSection";
// import About from "./components/About";
import Footer from "./components/Footer";
import { useRef } from "react";

const App = () => {

  const workSectionRef = useRef(null)

  return (
    <section className="relative">
      <Navbar />
      <Hero 
        title="beautiful digital experiences" 
        description={<span className="">I am a Frontend Developer with extensive <span className="">Shopify PLUS</span> experience.</span>}
        subtitle="let's build"
        scrollToRef={workSectionRef}>      
      </Hero>
      <WorkSection 
       ref={workSectionRef}
       />
       {/* 
      <About 
        title="creeks & code"
        description="I am a self taught, frontend developer with an obsession to master everything I take on. 
          I've been working professionally as a developer for over four years, and as a lead designer for 3 years prior. 
          I also run a T-shirt e-commerce brand where I design and develop the storefront and products on the side.">
      </About> */}
      <Footer />
    </section>
  )
}

export default App