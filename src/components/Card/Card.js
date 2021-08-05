import React, { useEffect, useState } from 'react'
import Heading from './Heading'
import Temperature from './Temperature'
import Info from './Info'
import MapsLink from './MapsLink'


const Card = ({ appState }) => {
  const [isDay, setIsDay] = useState(null)

  const checkIsDay = () => {
    const sunriseTime = new Date(appState.sys.sunrise * 1000).getHours()
    const sunsetTime = new Date(appState.sys.sunset * 1000).getHours()
    const nowTime = new Date().getHours()

    console.log(sunriseTime, sunsetTime)
    const dayTime = nowTime > sunriseTime && nowTime < sunsetTime

    return dayTime
  }

  useEffect(() => {
    setIsDay(checkIsDay())
  }, [])

  return (
    <div className='card'>
      <Heading data={appState} />
      <Temperature data={appState} />
      <Info data={appState} isDay={isDay} />
      <MapsLink data={appState} />
    </div>
  )
}

export default Card
