import React, {useContext,useState} from "react"
import {Context} from '../Context'
import CartItem from '../components/CartItem'

function Cart() {
  // hooks
  const {cartItems,removeFromCart} = useContext(Context)
  const [isOrdering,setIsOrdering] = useState(false)

  // functions
  function calculateTotal() {
    const baseCost = 5.99
    const totalItems = cartItems.length
    const totalCostString = baseCost * totalItems
    return (totalCostString.toLocaleString("en-US", {style: "currency", currency: "USD"}))
  }

  function handleOrderClick() {
    setIsOrdering(true)
    setTimeout(() => {
      cartItems.forEach(item => removeFromCart(item.id))
      setIsOrdering(false)
      console.log("Order placed!")
    },[3000])
  }

  // JSX variables
  const cartItemElements = cartItems.map(item => (
    <CartItem key={item.id} item={item} />
  ))

  return (
      <main className="cart-page">
          <h1>Check out</h1>
          {cartItemElements}
          <p className='total-cost'>Total: {calculateTotal()}</p>
          {cartItems.length > 0 && (
            <div className='order-button'>
              <button onClick={handleOrderClick}>
                {isOrdering ? "Ordering..." : "Place Order"}
              </button>
            </div>
          )}
      </main>
  )
}

export default Cart