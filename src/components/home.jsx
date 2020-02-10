
import React, { Component } from 'react';

import Carousel from "react-bootstrap/Carousel";

import "../scss/home.scss"
import * as Text from ".././strings.json";
import CarouselItem from "react-bootstrap/CarouselItem";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


class Home extends Component {
    render() {
        const businessHoursHeader=Text.logistics.businessHoursHeader;
        const businessHours=Text.logistics.businessHours;
        const mealSchedule=Text.logistics.mealSchedule;
        const mealOne=Text.logistics.mealOne;
        const mealTwo=Text.logistics.mealTwo;
        const mealThree=Text.logistics.mealThree;

        return (
            <main>
                <div class="carousel-wrapper">

                    <Carousel>
                        <CarouselItem>

                            <div class="carousel-item-1">

                                <Row>
                                    <Col align="center">
                                        <div class="carousel-text">

                                            <p> Sample Text for overlapping carousel items</p>

                                        </div>
                                    </Col>
                                </Row>


                            </div>
                            {/* <img
                                className="d-block w-100"
                                id="carousel-image"
                                src="https://media.wired.com/photos/5a3b06d615e73c599bf95533/master/w_2560%2Cc_limit/city-TA.jpg"
                                alt="First slide"
                            /> */}
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </CarouselItem>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                id="carousel-image"
                                src="https://www.evergreen.ca/images/made/images/banners/chris-chan-412909-unsplash_1600_1067_80.jpg"
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                id="carousel-image"

                                src="https://ihg.scene7.com/is/image/ihg/even-hotels-new-york-5829088610-2x1?wid=2880&hei=1440&fit=crop,1&qlt=85,0&resMode=sharp2&op_usm=1.75,0.9,2,0"
                                alt="Third slide"
                            />


                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>

                </div>
<<<<<<< HEAD
                <div className="container-logistics">
                    <div className="logistics">
                        <h2 className="heading-business-hours">{businessHoursHeader.toUpperCase()}</h2>
                        <p>{businessHours}</p>
                        <ul>
                        <h3 className="meal-schedule">{mealSchedule.toUpperCase()}</h3>

                        <li>{mealOne}</li>
                        <li>{mealTwo}</li>
                        <li>{mealThree}</li>
                        </ul>
                        </div>
                        <div className="google-maps">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2858.9040726652975!2d-76.48542948420614!3d44.22963332298199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cd2aafeee04ff03%3A0x6a19edc061e8708e!2s129%20Wellington%20St%2C%20Kingston%2C%20ON%20K7L%203C9!5e0!3m2!1sen!2sca!4v1578370682281!5m2!1sen!2sca" width="100%" height="100%" frameborder="0" style={{border:0}} allowfullscreen=""></iframe>
            </div>
            </div>
=======

                <Row>
                    <Col md={5}>
                        <div className="map-text">
                            <h1> Come visit us</h1>
                            <p> We are open Monday to Friday 9:00-11:30am </p>

                            <p> Coffee and goodies always available</p>

                            <p> 10 A.M we serve Soup!</p>

                            <p> 11 A.M  Hot Nutritious Meal is served!</p>

                        </div>

                    </Col>
                    <Col align="center" className="map-wrapper" md={7}>
                        <div >
                            <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2858.9042593747786!2d-76.48542948448348!3d44.22962947910571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cd2aafeee04ff03%3A0x6a19edc061e8708e!2s129%20Wellington%20St%2C%20Kingston%2C%20ON%20K7L%203C9!5e0!3m2!1sen!2sca!4v1574611991729!5m2!1sen!2sca" width="600" height="450" frameborder="0" allowfullscreen=""></iframe>
                        </div>

                    </Col>


                </Row>



>>>>>>> origin/Amean
            </main>
        );
}
}

export default Home;