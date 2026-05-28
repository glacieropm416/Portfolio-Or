import { motion } from 'framer-motion'
import { skills } from '../data/skills'

const SkillCategory = ({ title, items }) => (
  <div className="glass p-8 rounded-3xl">
    <h3 className="text-3xl font-bold mb-6 text-cyan-400">
      {title}
    </h3>

    <div className="flex flex-wrap gap-4">
      {items.map((skill, index) => (
        <motion.div
          whileHover={{ scale: 1.1 }}
          key={index}
          className="px-5 py-3 rounded-full bg-white/10 border border-cyan-500"
        >
          {skill}
        </motion.div>
      ))}
    </div>
  </div>
)

const Skills = () => {
  return (
    <section id="skills" className="py-28 px-6">
      <h2 className="text-center text-5xl font-bold gradient-text mb-20">
        Skills
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        <SkillCategory title="Frontend" items={skills.frontend} />
        <SkillCategory title="Backend" items={skills.backend} />
        <SkillCategory title="Tools" items={skills.tools} />
      </div>
    </section>
  )
}

export default Skills