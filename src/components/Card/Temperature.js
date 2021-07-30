import React from 'react'

const CardTemp = ({ data }) => {
  return (
    <div className='card__temp'>
      <p className='main__temp'>{data.main.temp}C</p>
      <div>
        <p>{data.main.temp_max}</p>
        <p>{data.main.temp_min}</p>
      </div>
    </div>
  )
}

export default CardTemp