import React from 'react'
import { Link } from 'react-router-dom'
import './styles.scss'
import { useNearScreen } from '../../hooks/useNearScreen'
import { handleFriendlyUrl } from '../../utils/handleFriendlyUrl'

export const CountryCard = ({ flag, name, population, region, capital }) => {
  const [show, element] = useNearScreen()

  return (
    <article className='CountryCard__container' ref={element}>
      {show
        ? (
          <div className='CountryCard'>
            <Link
              to={`/${handleFriendlyUrl(name)}`}
              aria-label={`Ver más sobre ${name}`}
            >
              <img
                src={flag}
                alt={name}
                className='CountryCard__img'
                height='150'
                width='200'
              />
            </Link>
            <h2 className='CountryCard__name'>{name}</h2>
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
    </article>
  )
}
