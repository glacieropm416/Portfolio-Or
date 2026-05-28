import { useEffect, useState } from 'react'

const useTheme = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'dark'
  )

  useEffect(() => {
    localStorage.setItem('theme', theme)
    document.documentElement.className = theme
  }, [theme])

  return { theme, setTheme }
}

export default useTheme