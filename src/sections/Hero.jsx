import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'

import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaCode
} from 'react-icons/fa'

import ParticleBackground from '../components/ParticleBackground'
import resume from '../assets/TODAY RESUME.pdf'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050816] px-6">

      {/* Particle Background */}
      <div className="absolute inset-0 z-0">
        <ParticleBackground />
      </div>

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-cyan-500/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/20 blur-[120px] rounded-full"></div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center w-full"
      >

        {/* Name */}
        <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent leading-tight whitespace-nowrap">
          Ashmith Rohan R
        </h2>

        {/* Typing Animation */}
        <div className="mt-6 text-cyan-400 text-xl md:text-2xl font-semibold">
          <TypeAnimation
            sequence={[
              'Full Stack Java Developer',
              1500,
              
              'UI/UX Enthusiast',
              1500,
              
              'Problem Solver & Innovator',
              1500,
            
            ]}
            speed={50}
            repeat={Infinity}
          />
        </div>

        {/* Description */}
        <p className="mt-8 text-gray-300 text-lg leading-8 max-w-2xl mx-auto">
          Passionate Full Stack Developer creating responsive,
          scalable, and visually engaging web applications
          using modern technologies and premium UI/UX experiences.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-6">

          {/* Projects Button */}
          <a
            href="#projects"
            className="px-8 py-4 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black font-semibold transition duration-300 hover:scale-105 shadow-lg shadow-cyan-500/40"
          >
            View Projects
          </a>

          {/* View Resume */}
          <a
            href={resume}
            target="_blank"
            rel="noreferrer"
            className="px-8 py-4 rounded-full border border-purple-500 hover:bg-purple-500/20 transition duration-300 font-semibold"
          >
            View Resume
          </a>

          {/* Download Resume */}
          <a
            href={resume}
            download
            className="px-8 py-4 rounded-full border border-cyan-400 hover:bg-cyan-500/20 transition duration-300 flex items-center gap-3 font-semibold"
          >
            <FaDownload />
            Download Resume
          </a>

        </div>

        {/* Social Icons */}
        <div className="mt-12 flex justify-center gap-8 text-3xl text-white">

          <a
            href="https://github.com/glacieropm416"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 transition duration-300 hover:scale-125"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/ashmith-rohan-r-615a19353/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 transition duration-300 hover:scale-125"
          >
            <FaLinkedin />
          </a>

          <a
            href="#skills"
            className="hover:text-cyan-400 transition duration-300 hover:scale-125"
          >
            <FaCode />
          </a>

        </div>

      </motion.div>
    </section>
  )
}

export default Hero