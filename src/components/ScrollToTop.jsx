import { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setVisible(window.scrollY > 300)
    })
  }, [])

  return (
    visible && (
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 bg-cyan-500 p-4 rounded-full z-50"
      >
        <FaArrowUp />
      </button>
    )
  )
}

export default ScrollToTop