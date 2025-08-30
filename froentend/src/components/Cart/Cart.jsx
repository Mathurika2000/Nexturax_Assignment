import React from 'react'
import './Cart.css'
import { useCart } from './../context/CartContext'

function Cart() {
  const { cartItems, updateQuantity, removeItem, getTotal } = useCart();

  return (
    <div className="cart-page">
      <h2 className="cart-title">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="empty-msg">Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map(item => (
              <div className="cart-item" key={item.id}>
                <div className="item-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="item-info">
                  <h3>{item.name}</h3>
                  <p>{item.price}</p>
                </div>

                <div className="item-actions">
                  <div className="quantity-controls">
                    <label htmlFor={`qty-${item.id}`}>Qty:</label>
                    <input
                      id={`qty-${item.id}`}
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                    />
                  </div>
                  <button className="remove-btn" onClick={() => removeItem(item.id)}>
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-total">
            <h3>Total: ${getTotal().toFixed(2)}</h3>
          </div>
        </>
      )}
    </div>
  )
}

export default Cart
