import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-28 px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="glass max-w-6xl mx-auto rounded-3xl p-10"
      >
        <h2 className="text-5xl font-bold gradient-text mb-8">
          About Me
        </h2>

        <p className="mt-8 text-gray-300 text-lg leading-8 max-w-3xl mx-auto">
  I'm <span className="text-cyan-400 font-semibold">Ashmith Rohan R</span>, 
  a passionate BE-CSE student (2023–2027) and aspiring 
  <span className="text-purple-400 font-semibold"> Full Stack Developer</span> 
  focused on building modern, scalable, and user-centric digital experiences. 
  I enjoy transforming ideas into visually engaging and high-performance web applications 
  using technologies like React, Spring Boot, and modern UI/UX practices. 
  With a strong interest in frontend creativity and backend architecture, 
  I continuously explore innovative technologies to craft futuristic and impactful solutions.
</p>

        <div className="grid md:grid-cols-2 gap-10 mt-10">
          <div className="glass p-6 rounded-2xl">
            <h3 className="text-2xl font-semibold text-cyan-400">
              Education
            </h3>
            <p className="mt-4 text-gray-300">
              BE Computer Science & Engineering
            </p>
            <p className="text-gray-400">
              2023 - 2027
            </p>
          </div>

          <div className="glass p-6 rounded-2xl">
            <h3 className="text-2xl font-semibold text-purple-400">
              Career Goal
            </h3>
            <p className="mt-4 text-gray-300">
              Become a high-impact Full Stack Engineer building premium scalable products.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default About
