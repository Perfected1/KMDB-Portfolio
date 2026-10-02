import Hero from '../sections/Hero'
import AboutPreview from '../sections/AboutPreview'
import FeaturedProjects from '../sections/FeaturedProjects'
import ServicesPreview from '../sections/ServicesPreview'
import Skills from '../sections/Skills'
import Testimonials from '../sections/Testimonials'
import ContactCTA from '../sections/ContactCTA'

function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <FeaturedProjects />
      <ServicesPreview />
      <Skills />
      <Testimonials />
      <ContactCTA />
    </>
  )
}

export default Home