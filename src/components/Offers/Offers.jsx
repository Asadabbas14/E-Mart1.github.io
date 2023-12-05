import React from 'react'
import './Offers.css'
import exclusive_image from '../Assests/exclusive_image.png'

const Offers = () => {
  return (
    <div className='Offers'>
      <div className="offer-left">
        <h1>Primary</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BEST SELLER PRODUCTS</p>
        <button>Check Now</button>
      </div>
      <div className="offer-right">
        <img src={exclusive_image} alt="" />
      </div>
    </div>
  )
}

export default Offers
