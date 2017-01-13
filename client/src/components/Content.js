import React, { Component } from 'react'
import { Link } from 'react-router'

const activeStyles = {
  color: "#FF1FA9"
}

class Content extends Component {
  render() {
    let { columnNumber, currentPath, toggleMainMenu } = this.props
    switch(columnNumber) {
      case 'ONE':
        return (
          <div style={{display: "flex", flexDirection: "column", height: "900px", padding: "60px 0"}}>
            <a href="mailto:hello@wrklab.co.in"><h3>hello@wrklab.co.in</h3></a>
            <div style={{display: "flex", justifyContent: "center"}}>
              <i className="fa fa-facebook" aria-hidden="true"></i>
              <i className="fa fa-twitter" aria-hidden="true"></i>
              <i className="fa fa-linkedin" aria-hidden="true"></i>
            </div>
            <h3 style={{marginTop: "auto"}}>+91 987 310 9889</h3>
            <h3>12/14, East Patel Nagar<br></br>New Delhi - 110008, India</h3>
          </div>
        )
      case 'TWO':
        return (
          <div style={{display: "flex", flexDirection: "column", height: "900px", padding: "60px 0"}}>
            <Link to="/process"><h3 style={currentPath === "/process" ? activeStyles : {}} onClick={toggleMainMenu}>Process</h3></Link>
            <Link to="/vision"><h3 style={currentPath === "/vision" ? activeStyles : {}} onClick={toggleMainMenu}>Virtual Reality</h3></Link>
            <h3 style={{marginTop: "auto"}}>T&C</h3>
            <h3>Privacy Policy</h3>
          </div>
        )
      case 'THREE':
        return (
          <div style={{display: "flex", flexDirection: "column", height: "900px", padding: "60px 0"}}>
            <Link to="/featured" ><h3 style={currentPath === "/featured" ? activeStyles : {}} onClick={toggleMainMenu}>Feautured Projects</h3></Link>
            <Link to="/products"><h3 style={currentPath === "/products" ? activeStyles : {}} onClick={toggleMainMenu}>Products</h3></Link>
            <h3 style={{marginTop: "auto"}}>About Us</h3>
            <h3>FAQs</h3>
          </div>
        )
      default:
        return null
    }
  }
}


export default Content
