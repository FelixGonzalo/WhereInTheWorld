import React from 'react'
import { Link } from 'react-router-dom'
import './styles.scss'
import { useNearScreen } from '../../hooks/useNearScreen'

export const CountryCard = ({ flag, name, population, region, capital }) => {
  const [show, element] = useNearScreen()

  return (
    <Link className='CountryCard__container' ref={element} to={`/${name}`}>
      {show
        ? (
          <div className='CountryCard'>
            <img src={flag} alt={name} className='CountryCard__img' />
            <p className='CountryCard__name'>{name}</p>
            <ul className='CountryCard__list'>
              <li>
                <span>Population: </span> {population}
              </li>
              <li>
                <span>Region: </span> {region}
              </li>
              <li>
                <span>Capital: </span> {capital}
              </li>
            </ul>
          </div>
          )
        : (
            ''
          )}
    </Link>
  )
}
