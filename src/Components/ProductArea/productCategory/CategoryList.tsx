import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import CategoryItem from "./CategoryItem";

const CategoryList: React.FC=()=>{
    return(
        <Col xs={12} className="products-category mt-3 pt-3 px-0" style={{border:"1px solid black"}}>
            <Container className="products-category-container px-0">
                <Row className="mx-0">
                    <Col xs={12} className=" item demo-msg pb-4">
                        <h2>Demo Products</h2>
                    </Col>
                    <Col xs={12} className="text-center pl-5" style={{border:"5px solid brown"}}>
                        <Row>
                            <CategoryItem/>
                            <CategoryItem/>
                            <CategoryItem/>
                            <CategoryItem/>
                            <CategoryItem/>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Col>
    )
}
export default CategoryList;