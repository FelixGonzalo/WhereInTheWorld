import React, { useState, useEffect } from 'react'

export const ThemeContext = React.createContext()

const ThemeProvider = (props) => {
  const [theme, setTheme] = useState('light')

  const toggleTheme = (mode) => {
    setTheme(mode)
    window.localStorage.setItem('theme', JSON.stringify(mode))
    document.getElementById('body').classList.toggle('theme_dark')
  }

  useEffect(() => {
    if (window.localStorage.getItem('theme')) {
      const mode = JSON.parse(window.localStorage.getItem('theme'))
      setTheme(mode)
      if (mode === 'dark') {
        document.getElementById('body').classList.add('theme_dark')
      }
    } else {
      window.localStorage.setItem('theme', JSON.stringify('light'))
    }
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
