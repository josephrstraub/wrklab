import React, { Component } from 'react'
import { Link } from 'react-router'

class DynamicMenu extends Component {
  render() {
    let { items, activeItem, text, isActive, handleClick, linkTo } = this.props
    let lines = items.map((item, index) => (
      <li key={index} onClick={handleClick.bind(this, index)}>
        <div className={`line ${index === activeItem ? "long" : "short"}`}></div>
      </li>
    ))
    return (
      <div className="dynamic-menu">
        <Link to={linkTo}>
          <h3 style={{color: isActive ? "#FF1FA9" : "white"}}>{text}</h3>
        </Link>
        <ul>{lines}</ul>
      </div>
    )
  }
}

export default DynamicMenu
