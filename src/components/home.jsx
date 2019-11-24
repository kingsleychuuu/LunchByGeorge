
import React, { Component } from 'react';

import Carousel from "react-bootstrap/Carousel";

import "../scss/home.scss"

import CarouselItem from "react-bootstrap/CarouselItem";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


class Home extends Component {
    render() {
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

            </main>
        );
    }
}

export default Home;