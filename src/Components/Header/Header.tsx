import React from "react";
import {Col, Row} from "react-bootstrap";
import TopNav from "./TopNav";
import MidNav from "./MidNav";
import MenuBar from "./MenuBar";

const Header: React.FC=()=>{
    return(
        <Row className="header">
            <Col xs={12} className="px-0 text-center">
                <TopNav/>
            </Col>

            <Col lg={12} className="px-0 text-center">
                <MidNav/>
            </Col>

            <Col lg={12} className="text-center">
               <MenuBar/>
            </Col>
        </Row>
    )
}
export default Header;