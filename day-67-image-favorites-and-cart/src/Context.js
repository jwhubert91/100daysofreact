import React,{useState,useEffect} from 'react'

const Context = React.createContext()

function ContextProvider({children}) {
  const [allPhotos,setAllPhotos] = useState([])
  const [cartItems,setCartItems] = useState([])

  const PHOTOS_URL = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"

  function toggleFavorite(id) {
    setAllPhotos(prevPhotos => {
      const photosArr = [...prevPhotos]
      const thisPhotoIdx = photosArr.findIndex(photo => photo.id === id)
      const thisPhoto = photosArr[thisPhotoIdx]
      thisPhoto.isFavorite === true ? thisPhoto.isFavorite = false : thisPhoto.isFavorite = true;
      return (photosArr)
    })
    console.log(`Image with ID ${id} favorite toggled.`)
  }

  function addToCart(newItem) {
    setCartItems(prevItems => [...prevItems, newItem])
  }

  function removeFromCart(id) {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id))
  }

  useEffect(() => {
    fetch(PHOTOS_URL)
      .then((res) => res.json())
      .then((data) => setAllPhotos(data))
  },[])

  return (
    <Context.Provider value={{allPhotos,toggleFavorite,cartItems,addToCart,removeFromCart}}>
      {children}
    </Context.Provider>
  )
}

export {Context,ContextProvider}