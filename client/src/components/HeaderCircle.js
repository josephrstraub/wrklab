import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleMainMenu, toggleModal } from '../actions'

class HeaderCircle extends Component {
	render() {
		return (
			<div className="circle" onClick={this.props.handleClick.bind(this, this.props.modalIsVisible)}>
		        <div
		        	ref="first"
		        	className={`hamburger-line first ${this.props.mainMenuIsVisible || this.props.modalIsVisible ? "make-x" : "make-hamburger"}`}></div>
		        <div
		        	ref="second"
		        	className={`hamburger-line second ${this.props.mainMenuIsVisible || this.props.modalIsVisible ? "make-x" : "make-hamburger"}`}></div>
		        <div
		        	ref="third"
		        	className={`hamburger-line third ${this.props.mainMenuIsVisible || this.props.modalIsVisible ? "make-x" : "make-hamburger"}`}></div>
	    	</div>
      )
	}
}

const mapStateToProps = ({mainMenuIsVisible, modalIsVisible}) => ({ mainMenuIsVisible, modalIsVisible })

const mapDispatchToProps = (dispatch) => ({
	handleClick: (modalIsVisible) => modalIsVisible ? dispatch(toggleModal()) : dispatch(toggleMainMenu())
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(HeaderCircle)