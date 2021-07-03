import React from "react";
import {Button, Col, Container, Nav, Navbar, Row} from "react-bootstrap";
import {Phone, Truck, User} from 'react-feather';
const TopNav: React.FC=()=>{
    return(
        <Row className="mx-0" style={{width:'100%'}}>
            <Col  xs={{ span: 6, offset: 6}} className="px-0 top-nav-container">
                <Navbar expand="sm" className="top-nav float-right">
                    <Container>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                            <Nav className='nav-items -lg-0 p-lg-0 pl-lg-3'>
                                <Nav.Link eventKey="1" className='Contact'>
                                    <Phone className="icons"/>
                                    <span className='header-menu pl-2'>+94779 510 260</span>
                                </Nav.Link>
                                <Nav.Link eventKey="2" className='Delivery'>
                                    <Truck className="icons"/>
                                    <span className='header-menu pl-2'>Delivery Areas</span>
                                </Nav.Link>
                                <Nav.Link eventKey="3" className='user-account pl-lg-2 '>
                                    <User className="icons"/>
                                    <span className='header-menu pl-lg-2'>My Account</span>
                                </Nav.Link>
                                <Nav.Link eventKey="4" className='pt-lg-1 p-lg-0 '>
                                    <Button className='register-btn mx-3 ' variant='outline-success'>
                                        Register</Button>
                                </Nav.Link>
                                <Nav.Link eventKey="5" className='pt-lg-2 p-lg-0 '>
                                    <Button className='login-btn p-lg-0' variant="link">Login</Button>
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Col>

        </Row>
    )
}
export default TopNav;