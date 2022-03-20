import React, { useState } from 'react'
import { Header } from '../../components/Header'
import { Search } from '../../components/Search'
import { CountryList } from '../../components/CountryList'
import { Select } from '../../components/Select'
import './styles.scss'

export const Home = () => {
  const [searchName, setSearchName] = useState('')
  const [searchRegion, setSearchRegion] = useState('')

  return (
    <>
      <Header />
      <div className='Home__menu'>
        <Search searchName={searchName} setSearchName={setSearchName} />
        <Select setSearchRegion={setSearchRegion} />
      </div>
      <CountryList searchName={searchName} searchRegion={searchRegion} />
    </>
  )
}
