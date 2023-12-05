import React from 'react'
import './Footer.css'
import footer_logo from '../Assests/logo_big.png'
import innstagram_icon from '../Assests/instagram_icon.png'
import pintester_icon from '../Assests/pintester_icon.png'
import whatsapp_icon from '../Assests/whatsapp_icon.png'
import footer_logo2 from '../Assests/LogoMN12.png'


const Footer = () => {
  return (
    <div className='footer'>
      <hr />
        <div className="footer-logo">
            <img src={footer_logo2} alt="" />
            <p>E-MART</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icons">
          <div className="footer-icons-container">
            <img src={innstagram_icon} alt="" />
          </div>
          <div className="footer-icons-container">
            <img src={whatsapp_icon} alt="" />
          </div>
          <div className="footer-icons-container">
            <img src={pintester_icon} alt="" />
          </div>
        </div>
        <div className="footer-copyright">
          <hr />
          <p>Copyright @ 2023 - All Rights Reserved</p> 
        </div>
    </div>
  )
}

export default Footer
