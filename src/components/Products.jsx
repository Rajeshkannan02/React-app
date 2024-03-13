import React from 'react'
import "./Product.css";
const Products = ({product}) => {
  return (
    <div className='product'>
        <div className="img">
            <img src={product.image} alt={product.name} />
        </div>
        <div className="detail">
      <h3>{product.name}</h3>
      <p>Amount: {product.amt}</p>
      <button className='btn'>Add to Cart</button>
      </div>
    </div>
  )
}

export default Products
