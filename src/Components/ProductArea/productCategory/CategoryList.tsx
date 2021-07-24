import React from "react";
import {Col, Row} from "react-bootstrap";
import CategoryItem from "./CategoryItem";

const CategoryList: React.FC=()=>{
    return(
        <Row className="ml-lg-4">
            <Col xs={12} className=" item demo-msg pb-4">
                <h2>Demo Products</h2>
            </Col>
            <Col xs={12}>
                <Row>
                    <Col xs={2} className='mx-lg-3'>
                        <CategoryItem/>
                    </Col>
                    <Col xs={2}  className='mx-lg-3'>
                        <CategoryItem/>
                    </Col>
                    <Col xs={2}  className='mx-lg-3'>
                        <CategoryItem/>
                    </Col>
                    <Col xs={2}  className='mx-lg-3'>
                        <CategoryItem/>
                    </Col>
                    <Col xs={2}  className='mx-lg-3'>
                        <CategoryItem/>
                    </Col>
                </Row>

            </Col>

        </Row>
    )
}
export default CategoryList;