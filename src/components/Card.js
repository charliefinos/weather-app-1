import React from 'react'
import data from '../data'
import '../styles/components/Card.scss'
import { GiWaterDrop } from 'react-icons/gi'
import { FaWind } from 'react-icons/fa'
import { FiSun } from 'react-icons/fi'

const Card = () => {
  return (
    <div className='card'>
      <div className='card__heading'>
        <h2>{data.name}</h2>
        <span>{data.sys.country}</span>
      </div>
      <div className='card__temp'>
        <p className='main__temp'>{data.main.temp}C</p>
        <div>
          <p>{data.main.temp_max}</p>
          <p>{data.main.temp_min}</p>
        </div>
      </div>
      <div className='card__add'>
        <div className='card__add__left'>
          <div className='icon'>
            <div><GiWaterDrop className='icon humidity' /></div>
            <div><p>{data.main.humidity}%</p></div>
          </div>
          <div className='icon'>
            <div><FaWind className='icon wind' /></div>
            <div><p>{data.wind.speed}m/s</p></div>
          </div>
        </div>
        <div className='card__add__line'></div>
        <div className='sun__icon'><FiSun /></div>
      </div>

      <div className='maps__link'>
        <svg xmlns="http://www.w3.org/2000/svg" className="maps__icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        <a href={`https://www.google.com/maps/search/?api=1&query=${data.coord.lat},${data.coord.lon}`} target='_blank' rel='noreferrer'>Watch on google maps</a>
      </div>
    </div>
  )
}

export default Card
