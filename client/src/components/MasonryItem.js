import React from 'react'

const MasonryItem = ({ imgSrc, long }) => (
  <div style={{height: long ? "200px" : "100px"}}>
    <img src={imgSrc} />
    <div style={{display: long ? "inline-block" : "block", backgroundColor: "orange"}}></div>
  </div>
)

export default MasonryItem
