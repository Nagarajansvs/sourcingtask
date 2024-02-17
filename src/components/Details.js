import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import banner1 from '../images/banner1.jpeg';

function Details() {
    return (
        <>
            <div className="details_section">
                <Container>
               
                <div className="details_page">
                    <Row>
                        <Col>
                            <img src={banner1} className="img-fluid" alt="Image"/>
                        </Col>
                        <Col>
                            <h3 className="wallet-title text-left">Lorem Ipsum</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <div class="row item-details">
                            <div class="col-sm-12 rarity text-center border-item-details">
                            <div class="attributes_view">
                            <h4>Lorem Ipsum</h4>
                            <p>Lorem Ipsum</p>
                            </div>
                            </div>
                            </div>
                            <div class="row item-details">
                            <div class="col-sm-12 rarity text-center border-item-details">
                            <div class="attributes_view">
                            <h4>Lorem Ipsum</h4>
                            <p>Lorem Ipsum</p>
                            </div>
                            </div>
                            </div>
                            <div className="row item-details">
                                <div className="col-sm-4 text-center border-item-details">
                                <div className="attributes_view">
                                <h4>Lorem Ipsum</h4>
                                <p>Lorem Ipsum</p>
                                </div>
                                </div>
                                <div className="col-sm-4 text-center border-item-details">
                                <div className="attributes_view">
                                <h4>Lorem Ipsum</h4>
                                <p>Lorem Ipsum</p>
                                </div>
                                </div>
                                <div className="col-sm-4 text-center border-item-details">
                                <div className="attributes_view">
                                <h4>Lorem Ipsum</h4>
                                <p>Lorem Ipsum</p></div>
                                </div>
                                <div className="col-sm-4 text-center border-item-details">
                                <div className="attributes_view">
                                <h4>Lorem Ipsum</h4>
                                <p>Lorem Ipsum</p></div>
                                </div>
                                <div className="col-sm-4 text-center border-item-details">
                                <div className="attributes_view">
                                <h4>Lorem Ipsum</h4>
                                <p>Lorem Ipsum</p></div>
                                </div>
                                <div className="col-sm-4 text-center border-item-details">
                                <div className="attributes_view">
                                <h4>Lorem Ipsum</h4>
                                <p>Lorem Ipsum</p></div>
                                </div>
                                <div className="col-sm-4 text-center border-item-details">
                                <div className="attributes_view">
                                <h4>Lorem Ipsum</h4>
                                <p>Lorem Ipsum</p></div>
                                </div>
                                <div className="col-sm-4 text-center border-item-details">
                                <div className="attributes_view">
                                <h4>Lorem Ipsum</h4>
                                <p>Lorem Ipsum</p></div>
                                </div>
                                <div className="col-sm-4 text-center border-item-details">
                                <div className="attributes_view">
                                <h4>Lorem Ipsum</h4>
                                <p>Lorem Ipsum</p></div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>

                </Container>
            </div>
        </>
    );
}

export default Details;
