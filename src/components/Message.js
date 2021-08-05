import React from 'react'

const Message = ({ children }) => {
  return (
    <div className='message'>
      <p>Whoops!</p>
      <p>
        {children}
      </p>
      <button>Go Home</button>
    </div>
  )
}

export default Message
