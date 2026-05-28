const experiences = [
    {
      role: 'Full Stack Developer Intern',
  
      company: 'ANS TECHNOLOGICAL SOLUTION',
  
      location:
        'https://www.google.com/maps/place/Ans+Technological+Solution/@12.8392955,80.0567093,56m/data=!3m1!1e3!4m14!1m7!3m6!1s0x3a52f700197bb697:0xbaf72da83c6b3836!2sAns+Technological+Solution!8m2!3d12.8392236!4d80.0567414!16s%2Fg%2F11x8rbm9mr!3m5!1s0x3a52f700197bb697:0xbaf72da83c6b3836!8m2!3d12.8392236!4d80.0567414!16s%2Fg%2F11x8rbm9mr?entry=ttu&g_ep=EgoyMDI2MDUyNi4wIKXMDSoASAFQAw%3D%3D',
  
      certificate:
        'https://drive.google.com/file/d/17ylr_lAc7NnAuXbCs0nUhtrJWLZpBDAZ/view?usp=sharing',
  
      duration: '2025',
  
      desc:
        'Contributed to the development of LeedNext, a student learning platform, as a Full Stack Developer Intern. Worked with Java, Spring Boot, REST APIs, and MySQL for backend development, and ReactJS, HTML5, and CSS3 for frontend development. Implemented secure authentication, role-based access control, and responsive UI components. Collaborated in an Agile development team, followed clean code practices, and used Git for version control.',
  
      tech: [
        'Java',
        'Spring Boot',
        'REST APIs',
        'MySQL',
        'ReactJS',
        'IDE Plugins',
        'Swagger UI'
      ]
    }
  ]
  
  const Experience = () => {
    return (
      <section
        id="experience"
        className="py-28 px-6 bg-[#050816]"
      >
  
        {/* Heading */}
        <h2 className="text-5xl md:text-6xl font-black text-center mb-20 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Internship Experience
        </h2>
  
        {/* Experience Card */}
        <div className="max-w-5xl mx-auto">
  
          {experiences.map((item, index) => (
  
            <div
              key={index}
              className="
                bg-white/5
                backdrop-blur-xl
                border
                border-white/10
                rounded-3xl
                p-10
                hover:scale-[1.02]
                transition
                duration-300
              "
            >
  
              {/* Role */}
              <h3 className="text-4xl font-bold text-white">
                {item.role}
              </h3>
  
              {/* Company + Buttons */}
              <div className="mt-4 flex flex-wrap items-center gap-4">
  
                <p className="text-cyan-400 text-xl font-semibold">
                  {item.company}
                </p>
  
                {/* Location Button */}
                <a
                  href={item.location}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    px-4
                    py-2
                    rounded-full
                    bg-cyan-500/10
                    border
                    border-cyan-400/30
                    text-cyan-300
                    text-sm
                    hover:bg-cyan-500/20
                    transition
                  "
                >
                  View Location
                </a>
  
                {/* Certificate Button */}
                <a
                  href={item.certificate}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    px-4
                    py-2
                    rounded-full
                    bg-purple-500/10
                    border
                    border-purple-400/30
                    text-purple-300
                    text-sm
                    hover:bg-purple-500/20
                    transition
                  "
                >
                  View Internship Certificate
                </a>
  
              </div>
  
              {/* Duration */}
              <p className="text-gray-500 mt-3 text-lg">
                {item.duration}
              </p>
  
              {/* Description */}
              <p className="text-gray-300 leading-8 mt-8 text-lg">
                {item.desc}
              </p>
  
              {/* Tech Stack */}
              <div className="flex flex-wrap gap-4 mt-8">
  
                {item.tech.map((tech, i) => (
  
                  <span
                    key={i}
                    className="
                      px-5
                      py-2
                      rounded-full
                      text-sm
                      bg-purple-500/10
                      border
                      border-purple-400/30
                      text-purple-300
                    "
                  >
                    {tech}
                  </span>
  
                ))}
  
              </div>
  
            </div>
  
          ))}
  
        </div>
      </section>
    )
  }
  
  export default Experience