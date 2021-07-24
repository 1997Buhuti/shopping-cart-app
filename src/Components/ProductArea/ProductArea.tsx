import React from "react";
import {CloseButton, Col, Row} from "react-bootstrap";
import SearchBar from "./SearchBar/SearchBar";
import CategoryList from "./productCategory/CategoryList";

const ProductArea: React.FC=()=>{
    return(
        <Row className="ProductArea text-center">
          <Col xs={12} md={{ span: 8, offset: 2 }} lg={{ span: 4, offset: 4 }}>
              <SearchBar/>
          </Col>
            <Col xs={12} className=" demo-msg-container mt-3 pt-3" md={{ span: 10, offset: 1 }}>
                <p className="demo-msg">*Products listed here are demo purpose only.
                    They are not available for sale. <CloseButton/></p>
            </Col>
            <Col xs={12} className="products-category-container mt-3 pt-3">
                <CategoryList/>
            </Col>
        </Row>
    )
}
export default ProductArea;