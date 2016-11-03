import React, { Component } from 'react'
import elements from '../img/elements.png'
import hexa from '../img/hexa.png'
import industry from '../img/industry.png'
import wrkr from '../img/wrkr.png'

const style = {
  padding: "0",
  listStyleType: "none",
  width: "600px",
  height: "300px",
  position: "relative"
}

class Masonry extends Component {
  render() {
    return (
        <ul style={style}>
          <li style={{position: "absolute"}}><div style={{display: "inline-block", backgroundColor: "orange", height: "100px", width: "400px"}}></div></li>
          <li style={{position: "absolute", left: "400px"}}><div style={{display: "inline-block", backgroundColor: "red", height: "200px", width: "200px"}}></div></li>
          <li style={{position: "absolute", top: "100px"}}><div style={{display: "inline-block", backgroundColor: "blue", height: "200px", width: "200px"}}></div></li>
          <li style={{position: "absolute", top: "100px", left: "200px"}}><div style={{display: "inline-block", backgroundColor: "green", height: "100px", width: "200px"}}></div></li>
          <li style={{position: "absolute", top: "200px", left: "200px"}}><div style={{display: "inline-block", backgroundColor: "pink", height: "100px", width: "400px"}}></div></li>
        </ul>
    )
  }

}

export default Masonry
