import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Home from './components/Home/Home'
import ProductDetail from './components/ProductDetail/ProductDetail'

import { CartProvider } from './components/context/CartContext'

import './index.css'
import Cart from './components/CarT/Cart'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/Products" element={<ProductDetail />} />


        </Routes>
      </Router>
    </CartProvider>
  </StrictMode>
)
