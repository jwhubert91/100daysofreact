import React, {useState} from 'react'
const CartContext = React.createContext();

function CartContextProvider(props) {
  const [cart,setCart] = useState([])

  function addToCart(productId) {
    setCart(prevCart => [...prevCart,productId])
    setTimeout(() => {
      console.log(`Product with ID ${productId} was added to the cart and the cart now contains products # ${cart.join(", ")}`)
    }, 1000);
  }

  return (
    <CartContext.Provider value={{cart,addToCart}}>
      {props.children}
    </CartContext.Provider>
  )
}

export {CartContextProvider,CartContext}