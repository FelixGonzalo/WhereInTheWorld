import React, { useContext } from 'react'
import './style.scss'
import { FaMoon, FaSun } from 'react-icons/fa'
import { ThemeContext } from '../../context/ThemeProvider'

export const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  const handleClick = () => {
    if (theme === 'light') {
      toggleTheme('dark')
    } else {
      toggleTheme('light')
    }
  }

  return (
    <header className='Header__container'>
      <div className='wrapper Header'>
        <h1 className='Header__title'>Where in the world?</h1>
        {theme === 'light'
          ? (
            <button className='Header__btn' onClick={handleClick}>
              <FaMoon /> <span>Dark Mode</span>
            </button>
            )
          : (
            <button className='Header__btn' onClick={handleClick}>
              <FaSun /> <span>Light Mode</span>
            </button>
            )}
      </div>
    </header>
  )
}
