import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../sections/Hero'
import About from '../sections/About'
import Skills from '../sections/Skills'
import Projects from '../sections/Projects'
import Timeline from '../sections/Timeline'
import Certifications from '../sections/Certifications'
import CodingProfiles from '../sections/CodingProfiles'
import Contact from '../sections/Contact'

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Timeline />
      <Certifications />
      <CodingProfiles />
      <Contact />
      <Footer />
    </>
  )
}

export default Home