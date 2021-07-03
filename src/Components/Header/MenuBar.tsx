import React from "react";
import {Col, Nav, Navbar, NavDropdown, Row} from "react-bootstrap";
const MenuBar: React.FC= ()=>{
    return(
        <Row>
            <Col>
                <Navbar collapseOnSelect expand="lg" className='menu-bar py-3 mx-0 px-lg-5 px-md-4 px-sm-3'>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="menu-items">
                        <Nav>
                            <NavDropdown title="Categories" id="collapsible-nav-dropdown" className='category-drop-down'>
                                <NavDropdown.Item href="">Grocery</NavDropdown.Item>
                                <NavDropdown.Item href="">Pharmacy</NavDropdown.Item>
                                <NavDropdown.Item href="">Food</NavDropdown.Item>
                                <NavDropdown.Item href="">Electronic</NavDropdown.Item>
                                <NavDropdown.Divider />
                            </NavDropdown>
                            <Nav.Link href="">Home</Nav.Link>
                            <Nav.Link href="">FAQ</Nav.Link>
                            <Nav.Link href="">About Us</Nav.Link>
                            <Nav.Link href="">Contact Us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Col>
        </Row>
    )
}
export default MenuBar;