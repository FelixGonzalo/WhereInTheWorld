import React from 'react'
import { CountryList } from './components/CountryList'
import { Header } from './components/Header'
import { Search } from './components/Search'
export const App = () => {
  return (
    <>
      <Header />
      <Search />
      <CountryList />
    </>
  )
}
