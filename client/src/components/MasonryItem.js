import React from 'react'
import { Image } from 'react-bootstrap'

const imageStyles = {
  maxHeight: "100%"
}

const textStyles = {
	fontSize: ".7em",
	padding: "0 5px"
}

const MasonryItem = ({ product, imgSrc, height, isFocused, textAlign, width, maxWidth, changeActiveProduct, order }, context) => (
	<div>
		<div
			onClick={changeActiveProduct.bind(null, product, context)}
			style={{display: "flex", flexDirection: height === "200px" ? "column" : "row",backgroundColor: "#F5F5F5", height, width, border: `2px solid ${isFocused ? "#16D400" : "white"}`}}
		>
		  <Image src={imgSrc} style={{...imageStyles, maxWidth}} responsive/>
		  <div style={{display: "flex", flexDirection: "column", justifyContent: "flex-end", order, height: "100%", width: "100%", textAlign}}>
		  	<h2 style={textStyles}>{product.name}</h2>
		  	<h2 style={{...textStyles, color: "rgba(0,0,0,.3)", margin: "auto 0"}}>materials | materials</h2>
		  	<h2 style={{...textStyles, color: "rgba(0,0,0,.3)"}}>{product.category}</h2>
		  </div>
		</div>
	</div>
)

MasonryItem.contextTypes = {
	router: React.PropTypes.object.isRequired
}

export default MasonryItem
