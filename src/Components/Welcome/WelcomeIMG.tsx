import React from "react";
import {Button, Figure, Image, Row} from "react-bootstrap";
import welocmeImg  from '../../Assests/Images/welocmeImg.webp';
import LeaveImg from "../../Assests/Images/leavesLogo.png";
const WelcomeIMG: React.FC=()=>{
    return(
        <Row className="img-container">
            <Figure className="position-relative">
                <Image src={welocmeImg} fluid/>
                <figcaption className="image-caption">
                    <Image src={LeaveImg} alt='leave image' className='img-leaves'/>
                    <br/>
                    <span className='m-0 p-0'>100% Healthy & Affordable</span>
                    <h3>Organic Vegetables</h3>
                    <span className='m-0 p-0'>Small Changes Big Difference</span>
                    <br/>
                    <Button className='shop-now-btn' variant="light">Shop Now</Button>
                </figcaption>
            </Figure>

        </Row>
    )
}
export default WelcomeIMG;