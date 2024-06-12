import React from 'react'
import './NewLetter.css'

export const NewLetter = () => {
  return (
    <div className='newletter'>
        <h1>Get Exclusvie Offers On Your Email</h1>
        <p>Subscribe to our newletter and stay updated</p>
        <div>
            <input type="email" placeholder='Your Email ' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}
