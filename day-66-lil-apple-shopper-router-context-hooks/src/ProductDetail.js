import React,{useContext} from 'react'
import {useParams,useHistory} from 'react-router-dom'
import productsData from './data/productsData'
import {CartContext} from "./cartContext"


function ProductDetail() {
  const {id} = useParams()
  const history = useHistory();
  const {cart,addToCart} = useContext(CartContext) 

  const currentProduct = productsData.find(obj => obj.productId == id)

  const handleBackClick = () => {
    history.go(-1);
  }

  const handleAddToCart = () => {
    addToCart(currentProduct.productId)
  }

  return (
    <div className='page__innerContainer'>
      <button onClick={handleBackClick}>Go back</button>
      <h1>{currentProduct.title}</h1>
      <small>Product ID: {currentProduct.productId}</small>
      <img 
        src={currentProduct.imageUrl} 
        alt={currentProduct.title} 
        className='productDetail__image'
      />
      <h2>Price: ${currentProduct.price}</h2>
      <button 
        className='productDetail__addToCartButton'
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
      {cart.includes(currentProduct.productId) && 
        <p className='productDetail__cartWarning'>This item is in your cart!</p>
      }
      <p>Description: {currentProduct.description}</p>
    </div>
  )
}

export default ProductDetail
