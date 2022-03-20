import React, { useState } from 'react'
import { Header } from '../components/Header'
import { Search } from '../components/Search'
import { CountryList } from '../components/CountryList'

export const Home = () => {
  const [searchName, setSearchName] = useState('')

  return (
    <>
      <Header />
      <Search searchName={searchName} setSearchName={setSearchName} />
      <CountryList searchName={searchName} />
    </>
  )
}
