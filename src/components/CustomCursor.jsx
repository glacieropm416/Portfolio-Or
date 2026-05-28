import { useEffect, useState } from 'react'

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', move)

    return () => {
      window.removeEventListener('mousemove', move)
    }
  }, [])

  return (
    <div
      className="hidden md:block fixed top-0 left-0 w-6 h-6 rounded-full border border-cyan-400 pointer-events-none z-[999]"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`
      }}
    ></div>
  )
}

export default CustomCursor