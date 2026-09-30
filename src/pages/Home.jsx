import Hero from '../sections/Hero'
import AboutPreview from '../sections/AboutPreview'
import FeaturedProjects from '../sections/FeaturedProjects'
import ServicesPreview from '../sections/ServicesPreview'
import Skills from '../sections/Skills'
import Testimonials from '../sections/Testimonials'

function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <FeaturedProjects />
      <ServicesPreview />
      <Skills />
      <Testimonials />
    </>
  )
}

export default Home