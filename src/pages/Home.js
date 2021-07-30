import React from 'react'
import Card from '../components/Card/Card'

const Home = ({ data }) => {
  return (
    <div className='container'>
      <Card data={data} />
    </div>
  )
}

export default Home