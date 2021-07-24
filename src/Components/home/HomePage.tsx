import React from "react";
import {Col, Row} from "react-bootstrap";
import Header from "../Header/Header";
import WelcomeIMG from "../Welcome/WelcomeIMG";
import ProductArea from "../ProductArea/ProductArea";
import Footer from "../Footer/Footer";
import ProductLsit from "../ProductArea/ProductList/ProductList";

const HomePage: React.FC=()=>{
    return(
            <Row className="mx-0">
                <Col xs={12}>
                    <Header/>
                </Col>

                <Col xs={12}>
                    <WelcomeIMG/>
                </Col>

                <Col xs={12}  md={{ span: 10, offset:1}}>
                    <ProductArea/>
                </Col>

                <Col xs={12} className="pt-5 text-center pb-5 px-5" md={{ span: 10, offset:1}} >
                    <ProductLsit/>
                </Col>

                <Col className="px-0" xs={12}>
                    <Footer/>
                </Col>
            </Row>
    )
}
export default HomePage