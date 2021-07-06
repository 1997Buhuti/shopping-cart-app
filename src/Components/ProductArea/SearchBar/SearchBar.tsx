import React from "react";
import {FormControl, InputGroup, Row} from "react-bootstrap";
import {Search} from "react-feather";

const SearchBar: React.FC=()=>{
    return(
        <Row className="mx-0 search-bar-container">
            <InputGroup className="search-bar-input">
                <InputGroup.Prepend className="search-bar-input-group">
                    <InputGroup.Text className="basic-addon1"><Search/></InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    placeholder=""
                />
            </InputGroup>
        </Row>
    )
}
export default  SearchBar;