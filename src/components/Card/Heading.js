import React from 'react'

const CardHeading = ({ data }) => {
  return (
    <div className='card__heading'>
      <h2>{data.name}</h2>
      <span>{data.sys.country}</span>
    </div>
  )
}

export default CardHeading
