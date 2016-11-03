import React from 'react'

const Thumbnails = () => {
  let pictures = ["image 1", "image 2", "image 3", "image 4", "image 5", "image 6"]
  let listItems = pictures.map(picture => <li style={{backgroundColor: "orange", color: "white", textAlign: "center"}}>{picture}</li>)
  return (
    <ul style={{listStyleType: "none", display: "flex", justifyContent: "space-between", height: "55px", padding: "0"}}>
      {listItems}
    </ul>
  )
}

export default Thumbnails
