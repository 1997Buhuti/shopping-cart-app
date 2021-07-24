import React from "react";
import {Button, Col, Form, FormControl, Image, Row} from "react-bootstrap";
import carrots  from '../../../Assests/Images/products/carrots.png';
const Product: React.FC=()=>{
    return(
        <Row className="product-container">
            <Col className="product-img" xs={12}>
                <Image src={carrots} fluid/>
            </Col>
            <Col className="product-name">
                <h4>Carrot</h4>
            </Col>
            <Col xs={12}>
                <Row>
                    <Col xs={6}>
                        <p>striketrough text</p>
                    </Col>
                    <Col xs={6}>
                        <p>RS 350</p>
                    </Col>
                </Row>
            </Col>
            <Col xs={12} >
                <Row className="mx-0">
                    <Col className="px-0 mt-1" md={4}>
                        <Form.Group>
                            <FormControl type='number' min={1} placeholder='1' className='product-qty'/>
                        </Form.Group>
                    </Col>
                    <Col className="cart-btn mt-2 px-0" md={8}>
                        <Button variant="success">Add To Cart</Button>
                    </Col>
                </Row>
            </Col>

        </Row>
    )
}
export default Product;