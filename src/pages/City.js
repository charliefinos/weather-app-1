import React, { useEffect, useState } from 'react'
import Card from '../components/Card/Card'
import Message from '../components/Message'

const City = ({ match }) => {
  const city = match.params.id

  const apiKey = process.env.REACT_APP_API_KEY

  const [appState, setAppState] = useState({ city: null })
  const [loading, setLoading] = useState(false)

  const { cod, message } = appState

  useEffect(() => {
    if (city !== undefined) {
      console.log(city)
      setLoading(true)
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      fetch(apiUrl)
        .then((res) => res.json())
        .then((data) => {
          setLoading(false)
          setAppState(data)
          console.log(appState)
        })
        .catch((error) => {
          console.error(error)
        })
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps


  return (
    <>
      {loading ? (
        <p>loading...</p>
      ) : (
        cod === 200 ? <Card appState={appState} /> : <Message>{message} {cod}</Message>
      )}

    </>
  )
}

export default City
