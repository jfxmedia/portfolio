import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WorkSection from "./components/WorkSection";
import About from "./components/About";


const App = () => {

  return (
    <section className="">
      <Navbar work="Work" about="About" contact="Contact Me" />
      <Hero 
        title="Hello!" 
        subtitle="I am a FRONTEND DEVELOPER with a DESIGNERS EYE">      
      </Hero>
      <WorkSection />
      <About 
        title="obsessed with learning"
        description="I am a self taught, frontend developer with an obsession to master everything I take on. 
          I've been working professionally as a developer for over four years, and as a lead designer for 3 years prior. 
          I also run a T-shirt e-commerce brand where I design and develop the storefront and products on the side.">
      </About>
    </section>
  )
}

export default App