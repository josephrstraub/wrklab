import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import DynamicMenu from '../DynamicMenu'
import Pager from '../Pager'
import Modules from './Modules'
import Colors from './Colors'
import Sizes from './Sizes'
import SideBar from './SideBar'

const Product = ({ product, images, activeImage, colorChips, activeColor, activeFinish, modules, activeModule, sizes, activeSize, changeActiveImage, changeActiveModule, changeActiveColorCombo, changeActiveSize, resetProducts }) => {
    let showMasterView = activeModule ? false : true
    return (
      <div>
        <Row>
          <Col xs={2} xsOffset={10}>
            <DynamicMenu
              items={[]}
              title="PRODUCTS"
              isActive={true}
              linkTo="/products"
              handleReset={resetProducts} />
          </Col>
        </Row>
        <Row>
          <Col xs={2}>
            <Modules
              modules={modules}
              activeModule={activeModule}
              changeActiveModule={changeActiveModule} />
            <Colors
              colorChips={colorChips}
              activeColor={activeColor}
              activeFinish={activeFinish}
              changeActiveColorCombo={changeActiveColorCombo} />
            <Sizes
              sizes={sizes}
              activeSize={activeSize}
              changeActiveSize={changeActiveSize} />
          </Col>
          <Col xs={6} xsOffset={1}>
            <Pager
              imageUrl={images[activeImage]}
              leftArrowVisible={activeImage !== 0}
              rightArrowVisible={activeImage + 1 < images.length}
              handleClick={changeActiveImage}/>
          </Col>
          <Col xs={2}>
            <SideBar name={product ? product.name : null} description={product ? product.description : null} />
          </Col>
        </Row>
      </div>
    )
}

export default Product
