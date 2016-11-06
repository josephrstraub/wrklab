import React, { Component } from 'react'
import '../styles/Pager.css'

const Pager = ({imageUrl, items, activeItem, handleClick}) => (
  <div className="pager" style={{lineHeight: "400px"}}>
    <div
      style={{visibility: activeItem === 0 ? "hidden" : "visible"}}
      className="circle circle-one"
      onClick={handleClick.bind(null, activeItem-1)}
      >
      <i className="fa fa-long-arrow-left" aria-hidden="true"></i>
    </div>
    <img src={imageUrl} />
    <div
      style={{visibility: activeItem+1 === items.length ? "hidden" : "visible"}}
      className="circle circle-two"
      onClick={handleClick.bind(null, activeItem+1)}
      >
      <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
    </div>
  </div>
)

export default Pager
