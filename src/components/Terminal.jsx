import { useState } from 'react'

const commands = {
  help: 'Available commands: help, skills, projects, resume, contact',
  skills: 'React, Spring Boot, JavaScript, Java, Tailwind CSS',
  projects: 'Weather App, Pet Adoption System, Fashion Rental Platform',
  contact: 'Email: ashmith@example.com',
  resume: 'Resume download available in Hero section'
}

const Terminal = () => {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState([])

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const response = commands[input] || 'Command not found'

      setOutput([...output, `> ${input}`, response])
      setInput('')
    }
  }

  return (
    <div className="glass rounded-3xl p-6 max-w-4xl mx-auto font-mono">
      <div className="h-80 overflow-y-auto mb-4">
        {output.map((line, i) => (
          <p key={i} className="mb-2">
            {line}
          </p>
        ))}
      </div>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleCommand}
        className="w-full bg-transparent outline-none"
        placeholder="Type command..."
      />
    </div>
  )
}

export default Terminal