const certifications = [
  {
    title: "Cloud Computing",
    provider: "NPTEL",
    description:
      "Completed certification in Cloud Computing covering virtualization, cloud architecture, and distributed systems.",
    link: "https://drive.google.com/file/d/1kkmw9KveQvz4iPyDJd1SN_ZoSkya_Zka/view?usp=sharing",
  },
  {
    title: "Mobile Virtual Reality",
    provider: "NPTEL",
    description:
      "Learned concepts of immersive technologies, VR development, and mobile VR applications.",
    link: "https://drive.google.com/file/d/1LM5bpdQdAPF9mfblMTvK0sswC4yh1mql/view?usp=sharing",
  },
  
  {
    title: "Python Essentials 1",
    provider: "Cisco Networking Academy",
    description:
      "Built foundational Python programming skills including variables, loops, functions, and data structures.",
    link: "https://drive.google.com/file/d/107UZZtyPrjM1vjDxICQcqp5jT80WWehF/view?usp=sharing",
  },
  {
    title: "Python Essentials 2",
    provider: "Cisco Networking Academy",
    description:
      "Advanced Python concepts including OOP, modules, exceptions, and file handling.",
    link: "https://drive.google.com/file/d/1Uk4mrUCE6IeG4HzR171fNA5HFJ4Fpc2p/view?usp=sharing",
  },
]

const Certifications = () => {
  return (
    <section id="certifications" className="py-28 px-6">
      <h2 className="text-5xl font-bold text-center gradient-text mb-20">
        Certifications
      </h2>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="glass rounded-3xl overflow-hidden p-8 hover:scale-105 transition duration-300 border border-white/10"
          >
            {/* Top Gradient */}
            <div className="h-2 w-full bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mb-6"></div>

            {/* Content */}
            <h3 className="text-2xl font-bold text-white">
              {cert.title}
            </h3>

            <p className="text-cyan-400 mt-2 font-medium">
              {cert.provider}
            </p>

            <p className="mt-4 text-gray-400 leading-relaxed">
              {cert.description}
            </p>

            {/* Button */}
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold hover:opacity-90 transition"
            >
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Certifications