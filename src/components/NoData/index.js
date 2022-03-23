import React from 'react'
import './styles.scss'

export const NoData = ({ message }) => {
  return (
    <div className='wrapper NoData'>
      <p>{message !== '' ? message : 'No Data'}</p>
    </div>
  )
}
