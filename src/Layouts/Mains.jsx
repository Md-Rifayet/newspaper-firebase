import React from 'react'
import Header from '../Pages/Shared/Header/Header'
import Footer from '../Pages/Shared/Footer/Footer'
import { Col, Container, Row } from 'react-bootstrap'
import LeftNav from '../Pages/Shared/LeftNav/LeftNav'
import RightNav from '../Pages/Shared/RightNav/RightNav'
import { Outlet } from 'react-router-dom'
import NavigationBar from '../Pages/Shared/NavigationBar/NavigationBar'

const Mains = () => {
  return (
    <div>
        <Header></Header>
        <NavigationBar></NavigationBar>
        <Container>
      <Row>
        <Col lg={3} sm>
          <LeftNav></LeftNav>
        </Col>

        <Col lg={6} sm>
          <Outlet></Outlet>
        </Col>

        <Col lg={3} sm>
          <RightNav></RightNav>
        </Col>
      </Row>
    </Container>
        <Footer></Footer>
    </div>
  )
}

export default Mains