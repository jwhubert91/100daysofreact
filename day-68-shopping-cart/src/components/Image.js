import React,{useState,useContext} from 'react'
import PropTypes from 'prop-types'
import {Context} from '../Context'
// import useHover from '../hooks/useHover'

function Image({className,img}) {
  const [hovered,setHovered] = useState(false)
  const {url,id,isFavorite} = img;
  const {toggleFavorite,addToCart,removeFromCart,cartItems} = useContext(Context)

  const heartIcon = hovered && <i className={`ri-heart-${isFavorite ? 'fill' : 'line'} favorite`} onClick={() => toggleFavorite(id)}></i>

  function cartIcon() {
    const alreadyInCart = cartItems.some(item => item.id === img.id)
    if(alreadyInCart) {
        return <i className="ri-shopping-cart-fill cart" onClick={() => removeFromCart(img.id)}></i>
    } else if(hovered) {
        return <i className="ri-add-circle-line cart" onClick={() => addToCart(img)}></i>
    }
  }

  return (
    <div 
      className={`${className} image-container`} 
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={url} alt={`# ${id}`} className="image-grid" />
      {heartIcon}
      {cartIcon()}
    </div>
  )
}

// https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes

Image.propTypes = {
  className: PropTypes.string,
  img: PropTypes.shape({
    url: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool.isRequired
  })
}

export default Image
