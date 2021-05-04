import React,{useContext} from "react"
import Image from '../components/Image'
import {Context} from '../Context'
import {getClass} from '../utils/index'

function Photos() {
  const {allPhotos} = useContext(Context) 

  const imageElements = allPhotos.map((obj,idx) => (
    <Image key={obj.id} img={obj} className={getClass(idx)} />
  ))

    return (
        <main className="photos">
            {imageElements}
        </main>
    )
}

export default Photos