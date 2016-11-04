import React, { Component } from 'react'
import { Link } from 'react-router'

class DynamicMenu extends Component {
  render() {
    let { items, activeItem, header1, header2, changeActiveListIndex } = this.props
    let lines = items.map((item, index) => (
      <li key={index}>
        <div
          className={`line ${index === activeItem ? "long" : "short"}`}
          onClick={this.props.changeActiveListIndex.bind(this, index)}>
        </div>
      </li>
    ))
    return (
      <div className="dynamic-menu">
        <Link to={`/${header1.toLowerCase()}`}><h3>{header1}</h3></Link>
        <ul>{lines}</ul>
        <Link to={header2 === "VR DEMO" ? "/vision" : `/${header2.toLowerCase()}`}><h3>{header2}</h3></Link>
      </div>
    )
  }
}

export default DynamicMenu
