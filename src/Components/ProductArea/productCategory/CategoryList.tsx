import React from "react";
import {Col, Row} from "react-bootstrap";
import CategoryItem from "./CategoryItem";

const CategoryList: React.FC=()=>{
    return(
        <Row>
            <Col xs={12} className=" item demo-msg pb-4">
                <h2>Demo Products</h2>
            </Col>
            <Col xs={2} className="item mr-3">
                <CategoryItem/>
            </Col>
            <Col xs={2} className=" item mx-3">
                <CategoryItem/>
            </Col>
            <Col xs={2} className=" item mx-3">
                <CategoryItem/>
            </Col>
            <Col xs={2} className=" item mx-3">
                <CategoryItem/>
            </Col>
            <Col xs={2} className=" item ml-3">
                <CategoryItem/>
            </Col>

        </Row>
    )
}
export default CategoryList;