import React from 'react'
import './styles.scss'

export const Loader = () => {
  return (
    <div className='Loader'>
      <div className='lds-ring'>
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  )
}
