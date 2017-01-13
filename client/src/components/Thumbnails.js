import React from 'react'
import { Image } from 'react-bootstrap'

const getImageStyles = (isActive) => ({
  width: "100px",
  height: "100px",
  boxSizing: "content-box",
  border: isActive ? "3px solid #4edfff" : "none",
  margin: 0
})

const Thumbnails = ({ images, activeImage, handleClick }) => {
  let listItems = images.map((image, index) => (
    <li key={index} style={{margin: "7px"}}>
      <Image
        alt="171x180"
        src={process.env.PUBLIC_URL + image}
        style={getImageStyles(index === activeImage)}
        onClick={handleClick.bind(null, index, false)}
        responsive/>
    </li>
  ))
  return (
    <ul style={{listStyleType: "none", display: "flex", justifyContent: "center", padding: "0"}}>
      {listItems}
    </ul>
  )
}

export default Thumbnails
