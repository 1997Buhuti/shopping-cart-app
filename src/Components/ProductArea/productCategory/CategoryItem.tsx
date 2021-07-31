import React from "react";
import {Col, Image} from "react-bootstrap";
import Grocery from "../../../Assests/Images/grocery.png";

const CategoryItem:React.FC=()=>{

    return(
        <Col xs={2} className="single-category mx-xl-3 pt-xl-3 pb-xl-3"  style={{border:"1px solid blue"}}>
            <Image className="category-1" src={Grocery}  style={{border:"1px solid brown"}}/>
            <p style={{border:"1px solid brown"}}>Grocery</p>
        </Col>

    )
}
export default CategoryItem;