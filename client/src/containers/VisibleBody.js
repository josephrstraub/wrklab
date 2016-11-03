import React, { Component } from 'react'
import Process from '../components/Process'
import Sidebar from '../components/Sidebar'
import Pager from '../components/Pager'
import MainMenu from '../components/MainMenu'
import DynamicMenu from '../components/DynamicMenu'
import Masonry from '../components/Masonry'
import { Row, Col, ButtonGroup, Button } from 'react-bootstrap'
import { Link } from 'react-router'

class VisibleBody extends Component {
  componentWillMount() {
    console.log(this.props)
  }
  render() {
    // let { filter, activeList, activeListIndex, activeSubIndex, changeActiveList, changeActiveListIndex, changeActiveSubIndex } = this.props
    // switch(filter) {
    //   case 'main-menu':
    //     return <MainMenu />
    //   case 'process':
    //     return (
    //       <Row>
    //         <Col xs={2} style={{paddingTop: "6%"}}>
    //           <Sidebar items={activeList} activeItem={activeListIndex} itemType="PROCESS" />
    //         </Col>
    //         <Col xs={6} xsOffset={1}>
    //           <Pager
    //             imageUrl={activeList[activeListIndex] ? images[activeListIndex] : null}
    //             activeListIndex={activeListIndex}
    //             changeActiveListIndex={changeActiveListIndex} />
    //         </Col>
    //         <Col xs={2} xsOffset={1}>
    //           <DynamicMenu filter={filter} items={activeList} activeItem={activeListIndex} changeActiveList={changeActiveList}/>
    //         </Col>
    //       </Row>
    //     )
    //   case 'vision':
    //     return (
    //       <Row>
    //         <Col xs={2} style={{paddingTop: "6%"}}>
    //           <Sidebar items={activeList} activeItem={activeListIndex} itemType="VR DEMO" />
    //         </Col>
    //         <Col xs={6} xsOffset={1}>
    //           <iframe width="560" height="315" src="https://www.youtube.com/embed/EC9VcJfq61I" frameBorder="0" allowFullScreen></iframe>
    //         </Col>
    //         <Col xs={2} xsOffset={1}>
    //           <DynamicMenu items={[]} changeActiveList={changeActiveList}/>
    //         </Col>
    //       </Row>
    //     )
    //   case 'products':
    //     return <Masonry />
    //   case 'featured':
    //     let imagesList = activeList[activeListIndex] ? activeList[activeListIndex].images : []
    //     return (
    //       <Row>
    //         <Col xs={2} style={{paddingTop: "6%"}}>
    //           <Sidebar items={activeList} activeItem={activeListIndex} itemType="FEATURED" />
    //         </Col>
    //         <Col xs={4} xsOffset={2}>
    //           <Pager
    //             imageUrl={imagesList ? imagesList[activeSubIndex] : null}
    //             changeActiveListIndex={changeActiveListIndex}
    //             changeActiveSubIndex={changeActiveSubIndex} />
    //         </Col>
    //         <Col xs={2} xsOffset={2}>
    //           <DynamicMenu items={activeList} activeItem={activeListIndex} changeActiveList={changeActiveList}/>
    //         </Col>
    //       </Row>
    //     )
    //   default:
    //     return (
    //       <Row>
    //         <Col xs={12}>
    //         </Col>
    //       </Row>
    //     )
    // }
  }
}

export default VisibleBody
