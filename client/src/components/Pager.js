import React from 'react'
import { Image } from 'react-bootstrap'
import '../styles/Pager.css'

const arrowStyles = {
  position: "absolute",
  top: "50%"
}

const Pager = ({imageUrl, leftArrowVisible, rightArrowVisible, handleClick}) => (
  <div className="pager" style={{lineHeight: "400px"}}>
    <div
      style={{...arrowStyles, visibility: leftArrowVisible ? "visible" : "hidden", left: 0}}
      className="circle circle-one"
      onClick={handleClick.bind(null, -1)}
      >
      <i className="fa fa-long-arrow-left" aria-hidden="true"></i>
    </div>
    <Image src={imageUrl} role="presentation" style={{display: "inline-block", margin: "auto", maxWidth: "75%"}} responsive/>
    <div
      style={{...arrowStyles, visibility: rightArrowVisible ? "visible" : "hidden", right: 0}}
      className="circle circle-two"
      onClick={handleClick.bind(null, 1)}
      >
      <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
    </div>
  </div>
)

export default Pager
