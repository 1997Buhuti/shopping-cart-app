import React from "react";
import {Col, Row} from "react-bootstrap";
import TopNav from "./TopNav";

const Header: React.FC=()=>{
    return(
        <Row className="header" style={{border:'1px solid brown'}}>
            <Col xs={12} className="text-center" style={{border:'1px solid black'}}>
                <TopNav/>
            </Col>

            <Col lg={6} className="text-center" style={{border:'1px solid black'}}>
                <h2>mid-nav</h2>
            </Col>

            <Col lg={6} className="text-center" style={{border:'1px solid black'}}>
                <h2>bottom nav</h2>
            </Col>
        </Row>
    )
}
export default Header;