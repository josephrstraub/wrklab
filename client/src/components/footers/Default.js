import React from 'react'
import { Row, Col, ButtonGroup } from 'react-bootstrap'
import ModalButton from '../ModalButton'

const DefaultFooter = () => (
  <Row className="footer">
    <Col xs={2} mdOffset={10}>
      <ButtonGroup>
        <ModalButton />
      </ButtonGroup>
    </Col>
  </Row>
)

export default DefaultFooter
