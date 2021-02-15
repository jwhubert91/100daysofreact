import React,{useState,useEffect} from 'react'
import './styles/ImageCollage.css'

function ImageCollage(props) {

  const [windowWidth,setWindowWidth] = useState(0);
  const [photosArray,setPhotosArray] = useState([]);

  window.onresize = () => {
    setWindowWidth(window.innerWidth);
    console.log('window resized');
  }
  window.onload = () => {
    setWindowWidth(window.innerWidth);
  }

  useEffect(() => {
    setPhotosArray(props.photoArray.map((url,idx) => (
      <img src={url} key={'photo'+idx} className={'photo'+idx} />
    )))
  },[])

  // useEffect(() => {
  //   if (windowWidth <= 1000) {
  //     setPhotosArray(props.photoArray.map((url,idx) => { 
  //       if (idx < 2) return (<img src={url} key={'photo'+idx} />)
  //     }));
  //   } else {
  //     setPhotosArray(props.photoArray.map((url,idx) => (
  //       <img src={url} key={'photo'+idx} />
  //     )));
  //   }
  //   console.log({
  //     props: props.photoArray,
  //     photos: photosArray
  //   });
  // },[windowWidth])

  return (
    <div className='image-collage-container half-height'>
      {photosArray}
    </div>
  )
}

export default ImageCollage