import React, { Component } from 'react'
import '../styles/Pager.css'

const Pager = ({imageUrl, items, activeListIndex, changeActiveListIndex}) => (
  <div className="pager">
    <div
      style={{visibility: activeListIndex === 0 ? "hidden" : "visible"}}
      className="circle circle-one"
      onClick={changeActiveListIndex.bind(null, activeListIndex-1)}
      >
      <i className="fa fa-long-arrow-left" aria-hidden="true"></i>
    </div>
    <img src={imageUrl} />
    <div
      style={{visibility: activeListIndex+1 === items.length ? "hidden" : "visible"}}
      className="circle circle-two"
      onClick={changeActiveListIndex.bind(null, activeListIndex+1)}
      >
      <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
    </div>
  </div>
)

export default Pager
