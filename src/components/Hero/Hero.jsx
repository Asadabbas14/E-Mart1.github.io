import React from 'react'
import './Hero.css'
import hand_icon from '../Assests/hand_icon.png'
import arrow_icon from '../Assests/arrow.png'
import hero_image from '../Assests/hero_image.png'
import shopping_girl from '../Assests/Shopping girl.png'

const Hero = () => {
  return (
    <div className='Hero'>
      <div className="hero-left">
        <h2>SHOP BY CATEGORY</h2>
        <div>
            <div className="hero-hand-icon">
                <p>Huge Savings</p>
                <img src={hand_icon} alt="" />
            </div>
            <p>On Holiday</p>
            <p>Gifts for the home</p>
        </div>
        <div className="hero-btn">
            <div>Letest Collections</div>
            <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="hero-right">
        <img src={shopping_girl} alt="" />
      </div>
    </div>
  )
}

export default Hero
