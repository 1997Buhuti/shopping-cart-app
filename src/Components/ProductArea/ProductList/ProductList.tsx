import React from "react";
import {Col, Row} from "react-bootstrap";
import Product from "../Product/Product";

const ProductLsit: React.FC=()=>{
    return(
        <Row className="product-list-container mx-0 text-center">
            <Col lg="3" md="4" xs="2" className="px-4">
                <Product/>
            </Col>
            <Col lg="3" md="4" xs="2" className="px-4">
                <Product/>
            </Col>
            <Col lg="3" md="4" xs="2" className="px-4">
                <Product/>
            </Col>
            <Col lg="3" md="4" xs="2" className="px-4">
                <Product/>
            </Col>

        </Row>
    )
}
export default ProductLsit;