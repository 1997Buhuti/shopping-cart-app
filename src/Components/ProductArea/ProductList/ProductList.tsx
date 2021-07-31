import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import Product from "../Product/Product";

const ProductLsit: React.FC=()=>{
    return(
        <Col xs={12} className="pt-5 text-center pb-5 px-0" md={{ span: 10, offset:1}} style={{border:"5px solid aqua"}}>
            <Container className="product-list-container" style={{border:"5px solid blue"}}>
                <Row className="px-xl-5" style={{border:"3px solid black"}}>
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                </Row>
            </Container>
        </Col>
    )
}
export default ProductLsit;