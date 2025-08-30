import React from 'react'
import '../../components/Home/Home.css'
import { Link } from 'react-router-dom'

import { useCart } from './../context/CartContext'
import p1 from '../../assets/images/watch.png'
import p2 from '../../assets/images/cream.png'
import p3 from '../../assets/images/headset.png'
import p4 from '../../assets/images/watch.png'
import p5 from '../../assets/images/watch.png'
import p6 from '../../assets/images/watch.png'
import p7 from '../../assets/images/watch.png'
import p8 from '../../assets/images/watch.png'
import bg from '../../assets/images/bg.png'

function Home() {
  const { addToCart } = useCart();
  
  const products = [
   { id: 1, name: "Smart Watch", price: "$25", image: p1 },
    { id: 2, name: "Beauty Cream", price: "$40", image: p2 },
    { id: 3, name: "Wireless Headset", price: "$15", image: p3 },
    { id: 4, name: "Premium Watch", price: "$50", image: p4 },
    { id: 5, name: "Sport Watch", price: "$30", image: p5 },
    { id: 6, name: "Luxury Watch", price: "$60", image: p6 },
    { id: 7, name: "Casual Watch", price: "$20", image: p7 },
    { id: 8, name: "Designer Watch", price: "$70", image: p8 },
  ];

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div className="home">

      <section className="hero-section" style={{ backgroundImage: `url(${bg})` }}>
        <h1>Welcome to Premium Shopping Mall</h1>
        <p>
          Explore the latest collections of electronics, fashion, accessories, and more. 
          Find everything you need for daily shopping, special occasions, or gifting – all in one place.
        </p>
        <div className="hero-buttons">
          <button className="hero-btn">Shop Now</button>
          <button className="hero-btn">View Offers</button>
        </div>
      </section>

      <h2 className="home-title">Our Products</h2>
      <div className="product-grid">
        {products.map(product => (
          <div className="product-card" key={product.id}>
        <Link to={`/product/${product.id}`} className="product-link">
              <img src={product.image} alt={product.name} className="product-image"/>
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">{product.price}</p>
            </Link>
            <button 
              className="add-btn" 
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
