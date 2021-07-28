import React from "react";
import {Col, Row} from "react-bootstrap";
import Product from "../Product/Product";

const ProductLsit: React.FC=()=>{
    return(
        <Row className="product-list-container mx-0 text-center" style={{border:"1px solid black"}}>
            <Col lg="3" md="4" xs="2" className="px-lg-4">
                sdsdsdsd
            </Col>
            <Col lg="3" md="4" xs="2" className="px-lg-4">
                sdsdsdsd
            </Col>
            <Col lg="3" md="4" xs="2" className="px-lg-4">
                sdsdsdsd
            </Col>
            <Col lg="3" md="4" xs="2" className="px-lg-4">
                sdsdsdsd
            </Col>

        </Row>
    )
}
export default ProductLsit;