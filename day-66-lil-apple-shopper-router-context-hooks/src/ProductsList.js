import React from 'react'
import ProductCard from './ProductCard'
import productsData from './data/productsData'

function ProductsList() {
  const products = productsData.map((obj,idx) => (
    <ProductCard
      key={idx}
      productId={obj.productId}
      title={obj.title}
      price={obj.price}
      description={obj.description}
      imageUrl={obj.imageUrl}
    />
  ))
  return (
    <div className='page__innerContainer'>
      {products}
    </div>
  )
}

export default ProductsList
