import React, { useEffect, useState } from 'react'
import './styles.scss'
import { CountryCard } from '../CountryCard'
import { getAllCountries } from '../../services/Countries/getAllCountries'
import { Loader } from '../Loader'

export const CountryList = () => {
  const [countries, setCountries] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    getAllCountries()
      .then(data => {
        // data.length = 50
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

  return (
    <section className='CountryList'>
      {countries.map((country) => (
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
