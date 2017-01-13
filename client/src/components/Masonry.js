import React from 'react'
let Packery = require('react-packery-component')(React)
import MasonryItem from './MasonryItem'

const sizes = [
  {width: "400px", height: "100px"},
  {width: "200px", height: "200px"},
  {width: "200px", height: "200px"},
  {width: "200px", height: "100px"},
  {width: "400px", height: "100px"}
]

const Masonry = ({ products, hoveredProductId, changeActiveProduct }) => (
  <Packery className={"packery"}>
    { products.map((product, index) => (
      <MasonryItem
      	product={product}
        imgSrc={product.images[0]}
        isFocused={product._id === hoveredProductId}
        order={(index + sizes.length) % sizes.length === 4 ? -1 : 1}
        { ...sizes[ (index + sizes.length) % sizes.length ] }
        textAlign={(index + sizes.length) % sizes.length === 4 ? "left" : "right"}
        maxWidth={(index + sizes.length) % sizes.length === 3 ? "60%" : "100%"}
        changeActiveProduct={changeActiveProduct} />
    )) }
  </Packery>
)

export default Masonry
