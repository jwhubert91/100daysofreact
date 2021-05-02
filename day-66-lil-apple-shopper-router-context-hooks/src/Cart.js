import React,{useState,useContext,useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import productsData from './data/productsData'
import {CartContext} from "./cartContext"


function Cart() {
  const [total,setTotal] = useState(0)
  const [itemizedBill,setItemizedBill] = useState([])
  const {cart} = useContext(CartContext)
  const history = useHistory()

  function getProduct(id) {
    return productsData.find(obj => obj.productId === id)
  }

  function handleRemoveFromCart() {
    alert("We're sorry, but we do not accept cart removals at this time. Please enter your credit card information and complete your purchase before exiting the site.")
  }

  useEffect(() => {
    cart.forEach(id => {
      const currentProduct = getProduct(id)
      setTotal(prevTotal => prevTotal + currentProduct.price)
      const currentProductObj = {
        "title": currentProduct.title,
        "price": currentProduct.price
      }
      setItemizedBill(prevBill => [...prevBill, currentProductObj])
    })
  }, [cart])

  const cartList = itemizedBill.map((obj,idx) => {
    return (
      <li key={idx}>
        <strong>{obj.title}</strong> - ${obj.price}
        <button onClick={handleRemoveFromCart}>Remove</button>
      </li>
    )
  })

  return (
    <div className='page__innerContainer'>
      <button onClick={() => history.push('/')}>Back to Shopping</button>
      <h1>Shopping Cart</h1>
      <ul>
        {cartList}
      </ul>
      <h3>Total: ${total}</h3>
    </div>
  )
}

export default Cart

