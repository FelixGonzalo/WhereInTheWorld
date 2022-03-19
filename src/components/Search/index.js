import React from 'react'
import { FaSearch } from 'react-icons/fa'
import './styles.scss'

export const Search = () => {
  return (
    <div className='Search'>
      <button className='Search__btn'><FaSearch /></button>
      <input className='Search__input' type='text' placeholder='Search for a country...' />
    </div>
  )
}
