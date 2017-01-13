import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { toggleMainMenu, toggleModal } from '../../actions'
import { ButtonGroup, Button } from 'react-bootstrap'

const MainMenuNavBar = ({ currentPath, handleClick }) => ( 
	<ButtonGroup justified style={{backgroundColor: "#F5F5F5"}}>
		<ButtonGroup><Button className="hoverable" onClick={handleClick.bind(null, true)}>CONTACT</Button></ButtonGroup>
		<ButtonGroup>
			<Link to="/vision">
				<Button className={`nav-btn ${currentPath !== "/vision" ? "hoverable" : "active-nav-btn"}`} onClick={handleClick.bind(null, false)}>VISION</Button>
			</Link>
		</ButtonGroup>
		<ButtonGroup>
			<Link to="/featured">
				<Button className={`nav-btn ${currentPath !== "/featured" && currentPath !== "/products" ? "hoverable" : "active-nav-btn"}`} onClick={handleClick.bind(null, false)}>WORKS</Button>
			</Link>
		</ButtonGroup>
	</ButtonGroup>
)

const mapStateToProps = (state) => ({
	currentPath: state.routing.locationBeforeTransitions.pathname
})

const mapDispatchToProps = (dispatch) => ({
	handleClick: (isContact = false) => {
		if (isContact) {
			dispatch(toggleModal())
		} else {
			dispatch(toggleMainMenu())
		}
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(MainMenuNavBar)
