import React, { useContext, useState } from 'react'
import './Navbar.css'

import logo from '../Assests/logo.png'
import cart_icon from '../Assests/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import MN_Logo from '../Assests/LogoMN123.png'


const Navbar = () => {

    const [menu, setMenu] = useState("Shop")
    const {getTotalCartItems} = useContext(ShopContext);



  return (
    <div className='navbar h-nav-resp'>
      <div className="nav-logo v-class-resp">
        <img src={MN_Logo} alt="" />
        <p>E-MART</p>
      </div>
        <ul className="nav-menu v-class-resp">
            <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration: 'none', color: 'white'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration: 'none', color: 'white'}} to='/mens'>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration: 'none', color: 'white'}} to='/womens'>Women</Link>{menu==="womens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration: 'none', color: 'white'}} to='/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
            <Link to='/Login'><button>Login</button></Link>
            <Link className='cartimg v-class-resp' to='/cart'><img src={cart_icon} alt="" /></Link>
            <div className="nav-cart-count v-class-resp">{getTotalCartItems()}</div>
        </div>
    </div>
  )
}

export default Navbar
