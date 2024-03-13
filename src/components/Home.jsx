import React, { useState } from 'react'
import data from "../assets/product.json"
import Products from './Products'
import "./Home.css"
// import { useSearchParams } from 'react-router-dom'
const Home = () => {
 console.log(data)
  const[products]=useState(data)
  return (
    <div className='product-container'>
      {products.map((product)=>(
        <Products key={product.id} product={product} />
      ))}
    
    
    </div>
  )
}

export default Home
