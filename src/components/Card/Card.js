import React from 'react'

import Heading from './Heading'
import Temperature from './Temperature'
import Info from './Info'
import MapsLink from './MapsLink'


const Card = ({ appState }) => {
  return (
    <div className='card'>
      <Heading data={appState} />
      <Temperature data={appState} />
      <Info data={appState} />
      <MapsLink data={appState} />
    </div>
  )
}

export default Card
