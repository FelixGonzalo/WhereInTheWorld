import React from 'react'
import { FaSearch } from 'react-icons/fa'
import './styles.scss'

export const Search = ({ searchName, setSearchName }) => {
  const handleChange = (e) => {
    const value = e.target.value
    setSearchName(value)
  }

  return (
    <div className='Search'>
      <button className='Search__btn'>
        <FaSearch />
      </button>
      <input
        className='Search__input'
        type='text'
        placeholder='Search for a country...'
        onChange={handleChange}
        value={searchName}
      />
    </div>
  )
}
