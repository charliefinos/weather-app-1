import React from 'react'
import data from '../../data'
import '../../styles/components/Card.scss'
import Heading from './Heading'
import Temperature from './Temperature'
import Info from './Info'
import MapsLink from './MapsLink'


const Card = () => {
  return (
    <div className='card'>
      <Heading data={data} />
      <Temperature data={data} />
      <Info data={data} />
      <MapsLink data={data} />
    </div>
  )
}

export default Card
