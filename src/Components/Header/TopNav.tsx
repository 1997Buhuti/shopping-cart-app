import React from "react";
import {Button, Col, Nav, Navbar, Row} from "react-bootstrap";
import {Phone, Truck, User} from 'react-feather';
const TopNav: React.FC=()=>{
    return(
        <Row className="mx-0" style={{width:'100%', border:'1px solid red'}}>
            <Col xs={6} className="text-center" style={{border:'1px solid green'}}>
            </Col>

            <Col xs={6} className="px-0 top-nav-container" style={{border:'1px solid green'}}>
                <Navbar className="top-nav">
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav className='nav-items -lg-0 p-lg-0 pl-lg-3'>
                            <Nav.Link className='Contact'>
                                <Phone/>
                                <span className='header-menu pl-2'>+94779 510 260</span>
                            </Nav.Link>
                            <Nav.Link className='Delivery'>
                                <Truck/>
                                <span className='header-menu pl-2'>Delivery Areas</span>
                            </Nav.Link>
                            <Nav.Link className='user-account pl-lg-2 '>
                                <User/>
                                <span className='header-menu pl-lg-2'>My Account</span>
                            </Nav.Link>
                            <Nav.Link className='pt-lg-1 p-lg-0 '>
                                <Button className='register-btn mx-3 ' variant='outline-success'>
                                    Register</Button>
                            </Nav.Link>
                            <Nav.Link className='pt-lg-2 p-lg-0 '>
                                <Button className='login-btn p-lg-0' variant="link">Login</Button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Col>

        </Row>
    )
}
export default TopNav;