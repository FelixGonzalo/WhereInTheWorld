import React, { useState } from 'react'
import { Header } from '../components/Header'
import { Search } from '../components/Search'
import { CountryList } from '../components/CountryList'
import { Select } from '../components/Select'

export const Home = () => {
  const [searchName, setSearchName] = useState('')
  const [searchRegion, setSearchRegion] = useState('')

  return (
    <>
      <Header />
      <Search searchName={searchName} setSearchName={setSearchName} />
      <Select setSearchRegion={setSearchRegion} />
      <CountryList searchName={searchName} searchRegion={searchRegion} />
    </>
  )
}
