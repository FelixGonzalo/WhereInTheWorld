import React, { useEffect, useState } from 'react'
import './styles.scss'
import { CountryCard } from '../CountryCard'
import { getAllCountries } from '../../services/Countries/getAllCountries'
import { Loader } from '../Loader'

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

  if (loading) {
    return <Loader />
  }

  if (searchName?.length > 0) {
    return (
      <section className='CountryList'>
        {countries.map(country => {
          if (
            country.name.common.toLowerCase().includes(searchName.toLowerCase())
          ) {
            return (
              <CountryCard
                key={country.cca3 + country.ccn3 + country?.cioc}
                flag={country.flags.png}
                name={country.name.common}
                population={country.population}
                region={country.region}
                capital={country.capital}
              />
            )
          } else {
            return ''
          }
        })}
      </section>
    )
  }

  if (searchRegion?.length > 0) {
    return (
      <section className='CountryList'>
        {countries.map(country => {
          if (
            country.region.toLowerCase().includes(searchRegion.toLowerCase())
          ) {
            return (
              <CountryCard
                key={country.cca3 + country.ccn3 + country?.cioc}
                flag={country.flags.png}
                name={country.name.common}
                population={country.population}
                region={country.region}
                capital={country.capital}
              />
            )
          } else {
            return ''
          }
        })}
      </section>
    )
  }

  return (
    <section className='CountryList'>
      {countries.map(country => (
        <CountryCard
          key={country.cca3 + country.ccn3 + country?.cioc}
          flag={country.flags.png}
          name={country.name.common}
          population={country.population}
          region={country.region}
          capital={country.capital}
        />
      ))}
    </section>
  )
}
