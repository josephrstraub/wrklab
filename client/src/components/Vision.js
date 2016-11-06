import React, { Component } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Pager from './Pager'
import DynamicMenu from './DynamicMenu'
import ProgressMeter from './ProgressMeter'
import ModalWindow from './ModalWindow'
import '../styles/Process.css'
import { Grid, Row, Col, Button } from 'react-bootstrap'
import brief from '../img/processes/brief.png'
import analysis from '../img/processes/analysis.png'
import construction from '../img/processes/construction.png'
import finalDesign from '../img/processes/final-design.png'
import sketchDesign from '../img/processes/sketch-design.png'
import upkeepService from '../img/processes/upkeep-service.png'
import vr3D from '../img/processes/vr-3d.png'

class Vision extends Component {
  componentDidMount() {
    this.props.changeActiveListIndex(0)
  }
  render() {
    let { visions, activeVision, changeActiveVision } = this.props
    return (
      <Grid fluid={true} style={{height: "100%"}}>
        <Row>
          <Col xs={2} style={{paddingTop: "6%"}}>
            <Sidebar items={visions} activeItem={activeVision} itemType="VR DEMO" />
          </Col>
          <Col xs={6} xsOffset={1}>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/EC9VcJfq61I" frameBorder="0" allowFullScreen></iframe>
          </Col>
          <Col xs={2} xsOffset={1}>
            <DynamicMenu
              items={[]}
              activeItem={null}
              text="PROCESS"
              isActive={false}
              linkTo={"/process"}/>
            <DynamicMenu
              items={[]}
              activeItem={null}
              text="VR DEMO"
              isActive={true}/>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default Vision
