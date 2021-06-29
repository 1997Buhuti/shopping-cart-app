import React from "react";
import {Col, Row} from "react-bootstrap";
import Header from "../Header/Header";

const HomePage: React.FC=()=>{
    return(
            <Row className="mx-0" style={{border:'4px solid aqua'}}>
                <Col xs={12} style={{border:'1px solid yellow'}}>
                    <Header/>
                </Col>

                <Col xs={12} style={{border:'1px solid yellow'}}>
                    <h2>Welcome</h2>
                </Col>

                <Col xs={6} style={{border:'1px solid yellow'}}>
                    <h2>ProductArea</h2>
                </Col>

                <Col xs={6} style={{border:'1px solid yellow'}}>
                    <h2>Footer</h2>
                </Col>
            </Row>
    )
}
export default HomePage;