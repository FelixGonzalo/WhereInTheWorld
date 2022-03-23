import React from 'react'
import './styles.scss'

export const Select = ({ setSearchRegion }) => {
  const handleChange = e => {
    const value = e.target.value
    setSearchRegion(value)
  }

  return (
    <select onChange={handleChange} className='Select' aria-label='Filter by region'>
      <option value=''>All</option>
      <option value='africa'>Africa</option>
      <option value='america'>America</option>
      <option value='europe'>Europe</option>
      <option value='oceania'>Oceania</option>
    </select>
  )
}
