import { motion } from 'framer-motion'

const timeline = [
  {
    year: '2023',
    title: 'Started BE-CSE'
  },
  {
    year: '2024',
    title: 'Built Advanced React Projects'
  },
  {
    year: '2025',
    title: 'Started Full Stack Development'
  }
]

const Timeline = () => {
  return (
    <section className="py-28 px-6">
      <h2 className="text-5xl text-center font-bold gradient-text mb-20">
        Timeline
      </h2>

      <div className="max-w-4xl mx-auto border-l border-cyan-500 pl-10 space-y-16">
        {timeline.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="absolute -left-[50px] top-2 w-5 h-5 rounded-full bg-cyan-400"></div>

            <h3 className="text-2xl font-bold text-cyan-400">
              {item.year}
            </h3>

            <p className="text-gray-300 mt-2">
              {item.title}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Timeline