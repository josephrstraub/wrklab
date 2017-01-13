import React, { Component } from 'react'
import Content from './Content'
import ScrollArea from 'react-scrollbar'
import { Row, Col } from 'react-bootstrap'
import '../styles/MainMenu.css'
import ToggleScrollChip from './ToggleScrollChip'

class MainMenu extends Component {
  constructor() {
    super()
    this.state = { scrolling: null, top: true }
    this.handleWheel = this.handleWheel.bind(this)
    this.scrollDown = this.scrollDown.bind(this)
    this.scrollUp = this.scrollUp.bind(this)
  }
  componentDidMount() {
    this.refs.scrollBody1.scrollTop = 60
    this.refs.scrollBody2.scrollTop = 60
    this.refs.scrollBody3.scrollTop = 60
  }
  scrollDown() {
    if (this.state.scrolling !== "up") {
      this.setState({ scrolling: "down" })
      let currentPosition = this.refs.scrollBody1.scrollTop
      if (currentPosition < 440) {
          this.refs.scrollBody1.scrollTop = Math.min(currentPosition + 15, 440)
          this.refs.scrollBody2.scrollTop = Math.min(currentPosition + 15, 440)
          this.refs.scrollBody3.scrollTop = Math.min(currentPosition + 15, 440)
          setTimeout(this.scrollDown, 10)
      } else {
        this.setState({ scrolling: null, top: false })
      }
    }
  }  
  scrollUp() {
    console.log(this.refs.scrollBody1.scrollTop)
    if (this.state.scrolling !== "down") {
      this.setState({ scrolling: "up" })
      let currentPosition = this.refs.scrollBody1.scrollTop
      if (currentPosition > 60) {
          this.refs.scrollBody1.scrollTop = Math.max(currentPosition - 15, 60)
          this.refs.scrollBody2.scrollTop = Math.max(currentPosition - 15, 60)
          this.refs.scrollBody3.scrollTop = Math.max(currentPosition - 15, 60)
          setTimeout(this.scrollUp, 10)
      } else {
        this.setState({ scrolling: null, top: true })
      }
    }
  }
  handleWheel(event) {
    if (event.deltaY > 0) {
      this.scrollDown()
    } else if (event.deltaY < 0) {
      this.scrollUp()
    }
  }
  render() {
    return (
      <Row className="main-menu" onWheel={this.handleWheel}>
        <Col xs={8} xsOffset={2}>
          <div style={{display: "flex", position: "relative"}}>
            <ToggleScrollChip isVisible={true} top={this.state.top} scrollDown={this.scrollDown} scrollUp={this.scrollUp} />
            <div ref="scrollBody1" className="scroll-area" style={{flex: 1, height: "400px", overflowY: "scroll"}} onWheel={(event) => event.preventDefault()}>
              <Content columnNumber="ONE" currentPath={this.props.currentPath} toggleMainMenu={this.props.toggleMainMenu} />
            </div>        
            <div ref="scrollBody2" className="scroll-area" style={{flex: 1, height: "400px", overflowY: "scroll"}} onWheel={(event) => event.preventDefault()}>
              <Content columnNumber="TWO" currentPath={this.props.currentPath} toggleMainMenu={this.props.toggleMainMenu} />
            </div>        
            <div ref="scrollBody3" className="scroll-area" style={{flex: 1, height: "400px", overflowY: "hidden"}}>
              <Content columnNumber="THREE" currentPath={this.props.currentPath} toggleMainMenu={this.props.toggleMainMenu} />
            </div>
          </div>
        </Col>
      </Row>
    )
  }
}

export default MainMenu
