import React from 'react'
import {useHistory} from 'react-router-dom'

function ProductCard({productId,title,price,description,imageUrl}) {
  const history = useHistory();
  const handleClick = () => {
    history.push(`/products/${productId}`)
  }
  return (
    <div className='productCard__container' onClick={handleClick}>
      <div className='productCard__textBody'>
        <h2>{title}</h2>
        <h4>${price}</h4>
        <p>{description}</p>
      </div>
      <div className='productCard__imageContainer'>
        <img src={imageUrl} alt={title} />
      </div>
    </div>
  )
}

export default ProductCard
