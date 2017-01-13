import React, { Component } from 'react'
import Sidebar from './Sidebar'
import DynamicMenu from './DynamicMenu'
import '../styles/Process.css'
import { Row, Col } from 'react-bootstrap'

class Vision extends Component {
  componentWillUnmount() {
    this.props.changeActiveVision(0)
  }
  render() {
    let { visions, activeVision, visionIndex } = this.props
    return (
      <Row>
        <Col xs={2} style={{paddingTop: "6%"}}>
          <Sidebar item={activeVision} itemIndex={visionIndex} itemType="VR DEMO" />
        </Col>
        <Col xs={6} xsOffset={1}>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/EC9VcJfq61I" frameBorder="0" allowFullScreen></iframe>
        </Col>
        <Col xs={2} xsOffset={1}>
          <DynamicMenu
            items={[]}
            activeItem={null}
            title="PROCESS"
            isActive={false}
            linkTo={"/process"}/>
          <DynamicMenu
            items={[]}
            activeItem={null}
            title="VR DEMO"
            isActive={true}/>
        </Col>
      </Row>
    )
  }
}

export default Vision
