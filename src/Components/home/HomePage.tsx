import React from "react";
import {Col, Row} from "react-bootstrap";
import Header from "../Header/Header";
import WelcomeIMG from "../Welcome/WelcomeIMG";
import ProductArea from "../ProductArea/ProductArea";

const HomePage: React.FC=()=>{
    return(
            <Row className="mx-0">
                <Col xs={12}>
                    <Header/>
                </Col>

                <Col xs={12}>
                    <WelcomeIMG/>
                </Col>

                <Col xs={12}>
                    <ProductArea/>
                </Col>

                <Col xs={12} style={{border:'1px solid yellow'}}>
                    <h2>Footer</h2>
                </Col>
            </Row>
    )
}
export default HomePage;