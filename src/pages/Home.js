import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import Card from '../components/Card/Card'
import Button from '../components/Button'
import SearchBox from '../components/SearchBox'
import cities from '../citys'

const Home = () => {
  const apiKey = process.env.REACT_APP_API_KEY

  const [appState, setAppState] = useState({ city: null })
  const [loading, setLoading] = useState(false)

  const { cod, message } = appState

  // const fetchHandler = (x) => {
  //   console.log(x)
  //   setAppState({ loading: true })
  //   const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${x}&appid=18fd28e2cb66df699c7eb92cb54b758d&units=metric`
  //   fetch(apiUrl)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setAppState({ loading: false, city: data })
  //     })
  //   console.log(appState.city)

  // }
  const fetchHandler = () => {

  }

  useEffect(() => {
    setLoading(true)
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=machagai&appid=${apiKey}&units=metric`
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false)
        setAppState(data)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  return (
    <div className='container home'>
      <h1>Welcome to Weather App !</h1>

      <h3>Please Search for a City:</h3>
      <SearchBox />
      {console.log(appState, loading)}


      <h3>Or choose one:</h3>
      {cities.map(x => (
        <Button key={x} x={x} fetchHandler={fetchHandler}>{x}</Button>
      ))}

      {loading && <p>loading...</p>}
      {cod === 200 ? <Card appState={appState} /> : <p>{message} {cod}</p>}

    </div>
  )
}

export default Home