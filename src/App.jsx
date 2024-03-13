import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import Cart from './components/Cart'

function App() {
 

  return (
    <>
     <BrowserRouter>
     <div>
      <Header />
      <div className="container"></div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Cart" element={<Cart />}/>
      </Routes>
     </div>
     </BrowserRouter>
    </>
  )
}

export default App
