import React from 'react'

const Button = ({ children, fetchHandler, x }) => {

  return (
    <div className='button'>
      <button onClick={() => {
        fetchHandler(x)
      }}>{children}</button>
    </div>
  )
}

export default Button
