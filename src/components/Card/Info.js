import React from 'react'
import moon from '../../assets/bi_moon-stars.svg'
import { GiWaterDrop } from 'react-icons/gi'
import { FaWind } from 'react-icons/fa'

const CardInfo = ({ data }) => {
  return (
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
      <div className='sun__icon'><img alt='' src={moon}></img></div>
    </div>
  )
}

export default CardInfo
