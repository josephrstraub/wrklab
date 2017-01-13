import React from 'react'

const getColorBarStyles = (color, finish, isActive) => ({
  width: "20px",
  height: "40px",
  borderRadius: "6px",
  border: isActive ? "2px solid #4EDFFF" : "0",
  backgroundImage: `
    linear-gradient(
      ${color} 50%,
      ${finish || color} 50%
    )`,
  boxSizing: "content-box",
  margin: "0 5px"
})

const listStyles = {
  display: "inline-flex",
  flexWrap: "wrap",
  justifyContent: "flex-start",
  alignItems: "center",
  padding: 0,
  margin: "0 -5px",
  listStyleType: "none",
  width: "100%"
}

const textStyles = {
  textAlign: "left",
  fontSize: "10px",
  color: "rgba(0,0,0,.4)",
  marginLeft: "5px"
}

const ProductColors = ({ colorChips, activeColor, activeFinish, changeActiveColorCombo }) => {
  if (!colorChips.length) { return null }
  let colorBars = colorChips.map((chip, index) => (
    <li
      key={index}
      style={getColorBarStyles(chip.color, chip.finish, chip.color === activeColor && (chip.finish || activeFinish) === activeFinish)}
      onClick={changeActiveColorCombo.bind(null, chip)}>
    </li>
  ))
  return (
    <div>
      <h4 style={textStyles}>COLORS</h4>
      <ul style={listStyles}>{colorBars}</ul>
    </div>
  )
}

export default ProductColors
