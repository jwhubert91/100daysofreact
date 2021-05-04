import React,{useContext} from "react"
import {Link} from "react-router-dom"
import {Context} from '../Context'

function Header() {
  const {cartItems} = useContext(Context)

  const cartClass = cartItems.length === 0 ? "line" : "fill";

  return (
      <header>
          <Link to="/"><h2>Pic Some</h2></Link>
          <Link to="/cart"><i className={`ri-shopping-cart-${cartClass} ri-fw ri-2x`}></i></Link>
      </header>
  )
}

export default Header