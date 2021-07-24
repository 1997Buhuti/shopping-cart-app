import React from "react";
import {Col, Image, Row} from "react-bootstrap";
import Grocery from "../../../Assests/Images/grocery.png";

const CategoryItem:React.FC=()=>{

    return(
        <Row>
            <Col xs={12} className="single-category">
                <Image className="category-1" src={Grocery}/>
                <b>Grocery</b>
            </Col>
        </Row>

    )
}
export default CategoryItem;