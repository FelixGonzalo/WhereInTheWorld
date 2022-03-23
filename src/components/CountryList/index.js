import React, { useEffect, useState } from 'react'
import './styles.scss'
import { CountryCard } from '../CountryCard'
import { getAllCountries } from '../../services/Countries/getAllCountries'
import { Loader } from '../Loader'
import { NoData } from '../NoData'

export const CountryList = ({ searchName, searchRegion }) => {
  const [countries, setCountries] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    getAllCountries()
      .then(data => {
        setCountries(data)
        setLoading(false)
      })
      .catch(err => {
        console.error(err)
        setLoading(false)
      })
  }, [])

  const renderCountryCard = country => (
    <CountryCard
      key={country.cca3 + country.ccn3 + country?.cioc}
      flag={country.flags.png}
      name={country.name.common}
      population={country.population}
      region={country.region}
      capital={country.capital}
    />
  )

  const filterByCountryName = () => {
    const data = countries.filter(country => country.name.common.toLowerCase().includes(searchName.toLowerCase()))
    if (data.length < 1) return <NoData message='Unknown country name' />
    return (
      <main className='CountryList'>
        {data.map(country => renderCountryCard(country))}
      </main>
    )
  }

  const filterByRegionName = () => {
    const data = countries.filter(country => country.region.toLowerCase().includes(searchRegion.toLowerCase()))
    if (data.length < 1) return <NoData message='No data, check your internet connection' />
    return (
      <main className='CountryList'>
        {data.map(country => renderCountryCard(country))}
      </main>
    )
  }

  if (loading) {
    return <Loader />
  }

  if (searchName?.length > 0) return filterByCountryName()
  if (searchRegion?.length > 0) return filterByRegionName()
  if (countries.length < 1) return <NoData message='No data, check your internet connection' />

  return (
    <main className='CountryList'>
      {countries.map(country => renderCountryCard(country))}
    </main>
  )
}
