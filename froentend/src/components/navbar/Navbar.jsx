import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { useCart } from './../context/CartContext'
import logo from '../../assets/images/logo.png'

function Navbar() {
  const { getCartCount } = useCart();

  return (
    <div className='navbar'>
     <div className="brand">
        <img src={logo} alt="logo" className='logo'/>
        <h1 className="site-name">Luxury Rentals</h1>
      </div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li>About</li>
        <li>Products</li>
        <li>Search</li>
        <li>
          <Link to="/cart" className="cart-link">
            Cart
            {getCartCount() > 0 && (
              <span className="cart-count">{getCartCount()}</span>
            )}
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar