import React from 'react'

const getChipStyles = (isActive, isAvailable) => ({
  width: "40px",
  height: "20px",
  borderRadius: "6px",
  border: !isAvailable ? "1px solid rgba(0,0,0,.3)" : isActive ? "2px solid #4EDFFF" : "1px solid black",
  color: isAvailable ? "black" : "rgba(0,0,0,.3)",
  boxSizing: "content-box",
  margin: "0 5px",
  fontSize: "10px",
  lineHeight: "20px",
  textAlign: "center"
})

const listStyles = {
  display: "inline-flex",
  flexWrap: "wrap",
  justifyContent: "flex-start",
  alignItems: "center",
  padding: 0,
  margin: 0,
  listStyleType: "none",
  width: "60%"
}

const textStyles = {
  textAlign: "left",
  fontSize: "10px",
  color: "rgba(0,0,0,.4)",
  marginLeft: "5px"
}

const ProductSizes = ({ sizes, activeSize, changeActiveSize }) => {
  if (!sizes.length) { return null }
  let sizeItems = sizes.map((size, index) => (
    <li
      key={index}
      style={getChipStyles(size.value === activeSize, size.isAvailable)}
      onClick={changeActiveSize.bind(null, size.value)}
    >
      {size.value}
    </li>
  ))
  return (
    <div style={{textAlign: "left"}}>
      <h4 style={textStyles}>SIZES</h4>
      <ul style={listStyles}>{sizeItems}</ul>
    </div>
  )
}

export default ProductSizes
