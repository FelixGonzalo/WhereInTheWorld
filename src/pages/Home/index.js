import React, { useState } from 'react'
import { Header } from '../../components/Header'
import { Search } from '../../components/Search'
import { CountryList } from '../../components/CountryList'
import { Select } from '../../components/Select'
import './styles.scss'

export const Home = () => {
  const [searchName, setSearchName] = useState('')
  const [searchRegion, setSearchRegion] = useState('')

  const handleSetSearchRegion = (value) => {
    setSearchName('')
    setSearchRegion(value)
  }

  return (
    <>
      <Header />
      <div className='Home__menu'>
        <Search searchName={searchName} setSearchName={setSearchName} />
        <Select setSearchRegion={handleSetSearchRegion} />
      </div>
      <CountryList searchName={searchName} searchRegion={searchRegion} />
    </>
  )
}
