import React from "react";
import {Button, Col, Row} from "react-bootstrap";
import {ShoppingCart} from 'react-feather';
const MidNav: React.FC=()=>{
    return(
        <Row className="mid-nav-container mx-0 pt-2 pb-2" style={{width:'100%'}}>
            <Col  xs={6} className="px-0 mid-nav-Logo" style={{border:'1px solid brown'}}>
                <h1>Logo</h1>
            </Col>
            <Col  xs={6} className="checkout-tab px-0 pt-2 top-nav-button" style={{border:'1px solid brown'}}>
                <Row className="mx-0" style={{border:'1px solid brown'}}>
                    <Col className="cart-button text-right pt-1 xs={6} md={{ span: 6, offset: 4}}" style={{border:'1px solid brown'}}>
                        <ShoppingCart className="cart-icon"/>
                    </Col>
                    <Col className="checkout-button text-left" xs={6} md={4} style={{border:'1px solid brown'}}>
                        <Button variant="success">Checkout</Button>
                    </Col>
                </Row>

            </Col>
        </Row>
    )
}
export default MidNav;