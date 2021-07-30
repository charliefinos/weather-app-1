import React from 'react'

const Button = ({ children, clickHandler, x }) => {

  return (
    <div className='button'>
      <button onClick={() => {
        clickHandler(x)
      }}>{children}</button>
    </div>
  )
}

export default Button
