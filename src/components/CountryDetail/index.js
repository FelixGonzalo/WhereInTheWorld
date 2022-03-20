import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Loader } from '../Loader'
import { MdKeyboardBackspace } from 'react-icons/md'
import { getCountryByName } from '../../services/Countries/getCountryByName'
import { getCountriesByCodes } from '../../services/Countries/getCountriesByCodes'

import './styles.scss'

export const CountryDetail = () => {
  const params = useParams()
  const { country } = params

  const [loading, setLoading] = useState(true)
  const [countryDetail, setCountryDetail] = useState(null)
  const [bordersCountries, setBordersCountries] = useState([])

  useEffect(() => {
    setLoading(true)
    getCountryByName(country)
      .then(data => {
        setCountryDetail(data[0])
        if (data[0].borders) {
          getCountriesByCodes(data[0].borders)
            .then(data => {
              const borders = data.map(border => border.name.common)
              setBordersCountries(borders)
              setLoading(false)
            })
            .catch(error => {
              console.log(error)
              setLoading(false)
            })
        } else {
          setLoading(false)
        }
      })
      .catch(error => {
        console.log(error)
        setLoading(false)
      })
  }, [useParams()])

  const getNativeName = () => {
    const nativeNames = Object.entries(countryDetail.name.nativeName)
    return nativeNames[nativeNames.length - 1][1].common
  }

  const getCurrencies = () => {
    const currencies = Object.entries(countryDetail.currencies)
    return currencies.map((currency, index) => (
      <span key={index + currency}>
        {currency[1].name}
        {currencies.length - 1 !== index ? ', ' : ''}
      </span>
    ))
  }

  const getLanguages = () => {
    const languages = Object.entries(countryDetail.languages)
    return languages.map((language, index) => (
      <span key={index + language}>
        {language[1]}
        {languages.length - 1 !== index ? ', ' : ''}
      </span>
    ))
  }

  if (loading) {
    return <Loader />
  }

  return (
    <main className='wrapper'>
      <Link to='/' className='btn-back'>
        <MdKeyboardBackspace /> Back
      </Link>
      {countryDetail
        ? (
          <article className='CountryDetail'>
            <img
              src={countryDetail.flags.png}
              alt={countryDetail.name.common}
              className='CountryDetail__flag'
            />
            <section className='CountryDetail__information'>
              <h2 className='CountryDetail__name'>{countryDetail.name.common}</h2>
              <div className='CountryDetail__lists'>
                <ul className='CountryDetail__list'>
                  <li>
                    <span>Native Name: </span> {getNativeName()}
                  </li>
                  <li>
                    <span>Population:</span> {countryDetail.population}
                  </li>
                  <li>
                    <span>Region:</span> {countryDetail.region}
                  </li>
                  <li>
                    <span>Sub Region:</span> {countryDetail.subregion}
                  </li>
                  <li>
                    <span>Capital:</span> {countryDetail.capital}
                  </li>
                </ul>
                <ul className='CountryDetail__list'>
                  <li>
                    <span>Top Level Domain:</span> {countryDetail.tld}
                  </li>
                  <li>
                    <span>Currencies: </span> {getCurrencies()}
                  </li>
                  <li>
                    <span>Languages: </span> {getLanguages()}
                  </li>
                </ul>
              </div>
              <div className='CountryDetail__borders'>
                <h4 className='CountryDetail__borders__title'>
                  Border Countries:{' '}
                </h4>
                {bordersCountries.length > 0
                  ? (
                      bordersCountries.map(border => (
                        <Link key={border} className='CountryDetail__border' to={`/${border}`}>
                          {border}
                        </Link>
                      ))
                    )
                  : (
                    <p>There is not</p>
                    )}
              </div>
            </section>{' '}
          </article>
          )
        : (
            ''
          )}
    </main>
  )
}
