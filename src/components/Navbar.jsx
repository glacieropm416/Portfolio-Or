import { motion } from 'framer-motion'

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 glass px-8 py-4 flex justify-between items-center"
    >
      <h1 className="text-2xl font-bold gradient-text">
        Ashmith Rohan
      </h1>

      <ul className="hidden md:flex gap-8 text-sm">
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </motion.nav>
  )
}

export default Navbar