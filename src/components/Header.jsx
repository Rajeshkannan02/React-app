import React from 'react'
import {Link} from "react-router-dom"
import "./Header.css";
const Header = () => {
  return (
    <div>
        <div className="header">
      <div className="logo">Foot Cart</div>
      <ul>
        <li>
            <Link to={"/"}>Home</Link>
        </li>
        <li>
            <Link to={"/Cart"}>View Cart</Link>
        </li>
      </ul>
      </div>
    </div>
  )
}

export default Header
