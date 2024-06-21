import React from 'react'
import './styles.css'

type Imageprops = {
    src: string,
    alt: string
}

const handleover = () =>{
  
}

const ImageProduct = ({src, alt}: Imageprops) => {
  return (
    <div onMouseOver={handleover} className='image-container cursor-pointer'>
       <img src={src} alt={alt} />
    </div>
  )
}

export default ImageProduct
