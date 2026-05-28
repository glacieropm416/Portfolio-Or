import { projects } from '../data/projects'
import { motion } from 'framer-motion'

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-28 px-6 bg-[#050816]"
    >

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl md:text-6xl font-black text-center mb-20 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Projects
        </h2>
      </motion.div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 xl:grid-cols-3 gap-10">

        {projects.map((project, index) => (

          <motion.div
            key={index}

            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}

            transition={{
              duration: 0.6,
              delay: index * 0.2
            }}

            viewport={{ once: true }}

            whileHover={{
              y: -12,
              scale: 1.02
            }}

            className="
              group
              bg-white/5
              backdrop-blur-xl
              border
              border-white/10
              rounded-3xl
              overflow-hidden
              shadow-lg
              hover:shadow-cyan-500/20
              transition-all
              duration-500
            "
          >

            {/* Project Image */}
            <div className="overflow-hidden relative">

              <img
                src={project.image}
                alt={project.title}
                className="
                  w-full
                  h-60
                  object-cover
                  transition
                  duration-700
                  group-hover:scale-110
                "
              />

              <div className="absolute inset-0 bg-black/20"></div>

            </div>

            {/* Content */}
            <div className="p-8">

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-4">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 leading-7 text-sm mb-6">
                {project.desc}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-3 mb-8">

                {project.tech.map((item, i) => (

                  <span
                    key={i}
                    className="
                      px-4
                      py-2
                      rounded-full
                      text-sm
                      bg-cyan-500/10
                      border
                      border-cyan-400/30
                      text-cyan-300
                    "
                  >
                    {item}
                  </span>

                ))}

              </div>

              {/* GitHub Button */}
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="
                  w-full
                  flex
                  items-center
                  justify-center
                  gap-3
                  px-6
                  py-3
                  rounded-full
                  bg-cyan-500
                  hover:bg-cyan-400
                  text-black
                  font-semibold
                  transition
                  duration-300
                  hover:scale-105
                  shadow-lg
                  shadow-cyan-500/30
                "
              >
                GitHub Link
              </a>

            </div>

          </motion.div>

        ))}

      </div>
    </section>
  )
}

export default Projects