import React, { Component } from 'react'
import '../styles/Sidebar.css'

const Sidebar = ({items, activeItem, itemType}) => (
  <div className="sidebar" style={{width: "100%"}}>
    <h3 style={{color: "#4EDFFF"}}>{items[activeItem] ? items[activeItem].name : null}</h3>
    <h4 style={{color: "#FF1FA9"}}>{itemType}</h4>
    <div style={{width: "30px", height: "2px", backgroundColor: "#4EDFFF", display: "inline-block"}}></div>
    <h4 style={{display: "inline-block", color: "#4EDFFF"}}>{activeItem < 9 ? `0${activeItem + 1}` : activeItem + 1}</h4>
    <p style={{color: "white"}}>{items[activeItem] ? items[activeItem].description : null}</p>
  </div>
)

export default Sidebar
