import React from 'react'

const CardTemp = ({ data }) => {
  return (
    <div className='card__temp'>
      <p className='main__temp'>{data.main.temp}°C</p>
      <div className='min__max'>
        <p >{data.main.temp_max}°C</p>
        <p >{data.main.temp_min}°C</p>
      </div>
    </div>
  )
}

export default CardTemp