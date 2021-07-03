import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import HomePage from "./home/HomePage";

const ShoppingCart: React.FC=()=>{
    return(
        <Container fluid style={{border:'4px solid Red'}}>
            <Row style={{border:'4px solid pink'}}>
               <Col className="px-0" xs={12} style={{border:'4px solid green'}}>
                   <HomePage/>
               </Col>
            </Row>
        </Container>
    )
}
export default ShoppingCart;