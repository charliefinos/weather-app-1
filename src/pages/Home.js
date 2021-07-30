import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import Card from '../components/Card/Card'
import { getWeather } from '../utils/api'
import Button from '../components/Button'
import SearchBox from '../components/SearchBox'
import cities from '../citys'

const Home = ({ data }) => {
  const history = useHistory()

  const [weather, setWeather] = useState({})
  const [city, setCity] = useState('')

  const apiHandler = (x) => {
    getWeather(x).then(setWeather).catch('Not found')
  }
  const clickHandler = (x) => {
    console.log(x)
    setCity(x)
  }

  useEffect(() => {
    if (city !== '') {
      history.push(`/${city}`)
    }
  })

  return (
    <div className='container home'>
      <h1>Welcome to Weather App !</h1>

      <h3>Please Search for a City:</h3>
      <SearchBox />

      <h3>Or choose one:</h3>
      {cities.map(x => (
        <Button key={x} x={x} clickHandler={clickHandler}>{x}</Button>
      ))}
      <Card data={data} />
    </div>
  )
}

export default Home