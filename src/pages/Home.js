import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import Card from '../components/Card/Card'
import Button from '../components/Button'
import Message from '../components/Message'
import SearchBox from '../components/SearchBox'


const Home = () => {
  const history = useHistory()

  const apiKey = process.env.REACT_APP_API_KEY

  const defaultApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=machagai&appid=${apiKey}&units=metric`

  const [appState, setAppState] = useState({ city: null })
  const [loading, setLoading] = useState(false)
  const [cities] = useState(["london", "new york", "tokyo"])

  const { cod, message } = appState

  const fetchHandler = (city) => {
    history.push(`/${city}`)
  }

  useEffect(() => {
    setLoading(true)
    fetch(defaultApiUrl)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false)
        setAppState(data)
        console.log(data)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [defaultApiUrl])

  return (
    <div className='container home'>
      <h1>Welcome to Weather App !</h1>

      <h3>Please Search for a City:</h3>
      <SearchBox />

      <h3>Or choose one:</h3>
      <div className='buttons'>
        {cities.map(x => (
          <Button key={x} x={x} fetchHandler={fetchHandler}>{x}</Button>
        ))}
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        cod === 200 ? <Card appState={appState} /> : <Message>{message} {cod}</Message>
      )}

    </div>
  )
}

export default Home