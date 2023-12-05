import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Primary Offers on your mail</h1>
        <p>Subscribe to our newletter to stay updated</p>
        <div>
            <input type="email" placeholder='Your E-mail here' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter
