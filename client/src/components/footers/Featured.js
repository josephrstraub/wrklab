import React from 'react'
import { Row, Col, ButtonGroup } from 'react-bootstrap'
import { changeActiveFeaturedProjectImage, toggleModal, submitContactForm } from '../../actions'
import { connect } from 'react-redux'
import Thumbnails from '../Thumbnails'
import ModalButton from '../ModalButton'

const FeaturedFooter = ({ images, activeImage, changeActiveImage }) => (
  <Row className="footer">
    <Col xs={6} xsOffset={3}>
      <Thumbnails
        images={images}
        activeImage={activeImage}
        handleClick={changeActiveImage}/>
    </Col>
    <Col xs={2} mdOffset={1} className="col-2">
      <ButtonGroup>
        <ModalButton customStyles={{margin: "25px 0"}} />
      </ButtonGroup>
    </Col>
  </Row>
)

const mapStateToProps = (state) => {
  let { data, activeProjectId, activeImageIndex } = state.featuredProjects
  let activeProject = data.filter(project => project._id === activeProjectId).shift()
  return {
    images: activeProject ? activeProject.images : [],
    activeImage: activeImageIndex
  }
}

const mapDispatchToProps = (dispatch) => ({
  changeActiveImage: (index) => dispatch(changeActiveFeaturedProjectImage(index))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeaturedFooter)
