import React from 'react'
import { connect } from 'react-redux'
import { resetModals } from '../actions'
import logo from '../img/logo.png'
import logoText from '../img/logo-text.png'

const Logo = ({ handleClick }, context) => (
  <div style={{display: "flex", justifyContent: "flex-end"}} onClick={handleClick.bind(null, context)}>
    <img src={logo} alt="logo" />
    <div className="logo-text">
      <img src={logoText} alt="logo text" />
      <div style={{width: "37px", height: "2px", backgroundColor: "#4EDFFF", marginTop: "4px"}}></div>
    </div>
  </div>
)

Logo.contextTypes = {
	router: React.PropTypes.object.isRequired
}

const mapDispatchToProps = (dispatch) => ({
	handleClick: (context) => {
		context.router.push("/")
		dispatch(resetModals())
	}
})

export default connect(null, mapDispatchToProps)(Logo)
