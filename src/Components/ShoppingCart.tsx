import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import HomePage from "./home/HomePage";

const ShoppingCart: React.FC=()=>{
    return(
        <Container fluid>
            <Row>
               <Col className="px-0" xs={12}>
                   <HomePage/>
               </Col>
            </Row>
        </Container>
    )
}
export default ShoppingCart;