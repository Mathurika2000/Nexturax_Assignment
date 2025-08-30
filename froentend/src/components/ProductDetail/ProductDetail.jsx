import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useCart } from './../context/CartContext'
import p1 from '../../assets/images/watch.png'
import p2 from '../../assets/images/cream.png'
import p3 from '../../assets/images/headset.png'
import p4 from '../../assets/images/bag.png'
import p5 from '../../assets/images/shoes.png'
import p6 from '../../assets/images/pens.png'
import p7 from '../../assets/images/Anarkali.png'
import p8 from '../../assets/images/Wing chair.png'
import './ProductDetail.css'

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  // Get product details from localStorage or you can pass through context
  // For now, I'll get it from the products array that was stored
  const getProductDetails = () => {
    const products = [
      { id: 1, name: "Smart Watch", price: "$25", image: p1, description: "Premium smartwatch with health monitoring features, GPS tracking, and long battery life. Perfect for fitness enthusiasts and tech lovers." },
      { id: 2, name: "Beauty Cream", price: "$40", image: p2, description: "Hydrating beauty cream with natural ingredients. Provides deep moisture and helps maintain youthful skin." },
      { id: 3, name: "Wireless Headset", price: "$15", image: p3, description: "High-quality wireless headset with noise cancellation. Perfect for gaming, music, and calls with crystal clear sound." },
      { id: 4, name: "School Bag", price: "$50", image: p4, description: "Elegant premium watch with leather strap. Classic design suitable for both casual and formal occasions." },
      { id: 5, name: "Sport shoe", price: "$30", image: p5, description: "Durable sport watch with water resistance. Features include stopwatch, timer, and backlight for outdoor activities." },
      { id: 6, name: "Cristal Pens", price: "$10", image: p6, description: "Luxury watch with premium materials and craftsmanship. A statement piece that adds elegance to any outfit." },
      { id: 7, name: "Anarkali Salwar", price: "$20", image: p7, description: "Comfortable casual watch perfect for everyday wear. Lightweight design with easy-to-read display." },
      { id: 8, name: "Wing chair", price: "$90", image: p8, description: "Exclusive designer watch with unique styling. Limited edition piece that showcases exceptional design and quality." },
    ];
    
    return products.find(product => product.id === parseInt(id));
  };

  const product = getProductDetails();

  if (!product) {
    return (
      <div className="product-detail">
        <div className="product-not-found">
          <h2>Product Not Found</h2>
          <button onClick={() => navigate('/')} className="back-btn">
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="product-detail">
      <div className="product-container">
        <div className="product-image-section">
          <img src={product.image} alt={product.name} className="product-detail-image" />
        </div>
        
        <div className="product-info-section">
          <h1 className="product-detail-title">{product.name}</h1>
          <p className="product-detail-price">{product.price}</p>
          <p className="product-detail-description">{product.description}</p>
          
          <div className="product-actions">
            <button 
              className="add-to-cart-btn" 
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
            <button 
              className="back-btn" 
              onClick={() => navigate('/')}
            >
              Back to Home
            </button>
            <button className='Order'>Order</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
