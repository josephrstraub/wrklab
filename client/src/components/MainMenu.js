import React, { Component } from 'react'
import Header from './Header'
import ModalWindow from './ModalWindow'
import Content from './Content'
import ScrollArea from 'react-scrollbar'
import { Link } from 'react-router'
import { Grid, Row, Col, Button } from 'react-bootstrap'
import '../styles/MainMenu.css'

class MainMenu extends Component {
  render() {
    let { mainMenu, activeListIndex, showModal, toggleModal, changeActiveListIndex } = this.props
    let scrollbarStyles = {borderRadius: 5, color: "red", backgroundColor: "red"}
    return (
      <Grid fluid={true} style={{height: "100%", backgroundColor: "white"}}>
        <Header
          navItems={mainMenu.map(item => item.toUpperCase())}
          activeItem={activeListIndex}
          activeColor="#F6F5F7"
          inactiveColor="#F6F5F7"
          textColor="#FF1FA9"
          showModal={showModal}
          toggleModal={toggleModal}
          changeActiveListIndex={changeActiveListIndex} />
        <ScrollArea
          className="area"
          contentClassName="content"
          smoothScrolling= {true}
          minScrollSize={40}
          onScroll={this.handleScroll}
          style={{height: "400px"}}
          >
          <Content toggleModal={toggleModal} showModal={showModal} />
        </ScrollArea>
        <ModalWindow showModal={showModal} />
      </Grid>
    )
  }
}

export default MainMenu
