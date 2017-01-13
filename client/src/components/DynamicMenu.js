import React, { Component } from 'react'
import { Link } from 'react-router'

class DynamicMenu extends Component {
  render() {
    let { items, activeId, title, isActive, handleClick, linkTo, handleReset } = this.props
    let lines = items.map(item => (
      <li key={item._id} onClick={handleClick.bind(null, item._id)}>
        <div className={`line ${activeId === item._id ? "long" : "short"}`}></div>
      </li>
    ))
    return (
      <div className="dynamic-menu">
        <Link to={linkTo} onClick={handleReset}>
          <h4 style={{color: isActive ? "#FF1FA9" : "white"}}>{title}</h4>
        </Link>
        <ul>{lines}</ul>
      </div>
    )
  }
}

export default DynamicMenu
