import React from 'react'
import { Row, Col, ButtonGroup } from 'react-bootstrap'
import { getActiveProductImages, getActiveVariantPrice } from '../../reducers/products'
import { changeActiveProductImage, toggleModal, submitContactForm } from '../../actions'
import { connect } from 'react-redux'
import Thumbnails from '../Thumbnails'
import ModalButton from '../ModalButton'
import Price from '../product/Price'

const ProductFooter = ({ images, activeImage, price, changeActiveProductImage }) => (
  <Row className="footer">
    <Col xs={2}>
      <Price price={price} />
    </Col>
    <Col xs={6} xsOffset={1}>
      <Thumbnails
        images={images}
        activeImage={activeImage}
        handleClick={changeActiveProductImage}/>
    </Col>
    <Col xs={2} mdOffset={1} className="col-2">
      <ButtonGroup>
        <ModalButton customStyles={{margin: "25px 0"}} />
      </ButtonGroup>
    </Col>
  </Row>
)

const mapStateToProps = (state) => {
  return {
    images: getActiveProductImages(state),
    activeImage: state.products.activeImageIndex,
    price: getActiveVariantPrice(state)
  }
}

const mapDispatchToProps = (dispatch) => ({
  changeActiveProductImage: (productId, incremental) => dispatch(changeActiveProductImage(productId, incremental))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductFooter)
