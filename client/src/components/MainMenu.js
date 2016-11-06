import React, { Component } from 'react'
import Header from './Header'
import ModalWindow from './ModalWindow'
import Content from './Content'
import ScrollArea from 'react-scrollbar'
import { Link } from 'react-router'
import { Modal, Grid, Row, Col, Button } from 'react-bootstrap'
import '../styles/MainMenu.css'

class MainMenu extends Component {
  render() {
    let scrollbarStyles = {borderRadius: 5, color: "red", backgroundColor: "red"}
    return (
      <Grid>
        <ScrollArea
          className="area"
          contentClassName="content"
          smoothScrolling= {true}
          minScrollSize={40}
          onScroll={this.handleScroll}
          style={{height: "400px"}}
          >
          <Content />
        </ScrollArea>
      </Grid>
    )
  }
}

export default MainMenu
