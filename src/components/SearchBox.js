import React, { useState } from 'react'
import { useHistory } from 'react-router'

const SearchBox = () => {
  const history = useHistory()
  const [city, setCity] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    history.push(`/${city}`)
    console.log(city)
  }

  return (
    <div className='searchbox'>
      <form onSubmit={submitHandler}>
        <input
          type='text'
          placeholder='...'
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </form>
    </div>
  )
}

export default SearchBox
