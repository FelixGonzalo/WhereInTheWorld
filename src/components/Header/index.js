import React from 'react'
import './style.scss'
import { FaMoon } from 'react-icons/fa'

export const Header = () => {
  return (
    <header className='Header__container'>
      <div className='wrapper Header'>
        <h1 className='Header__title'>Where in the world?</h1>
        <button className='Header__btn'>
          <FaMoon /> <span>Dark Mode</span>
        </button>
      </div>
    </header>
  )
}
