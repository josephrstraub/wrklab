import React from 'react'

const headingStyles = {
  textAlign: "left",
  fontSize: "10px",
  color: "rgba(0,0,0,.4)",
  marginLeft: "5px"
}

const priceStyles = {
  textAlign: "left",
  fontSize: "30px",
  marginLeft: "5px"
}

const ProductPrice = ({ price }) => (
  <div style={ !price ? {visibility: "hidden"} : {} }>
    <h4 style={headingStyles}>PRICE</h4>
    <h4 style={priceStyles}>{price}</h4>
  </div>
)

export default ProductPrice
