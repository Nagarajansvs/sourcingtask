import React, { useEffect, useState } from 'react';
import 'react-multi-carousel/lib/styles.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import banner1 from '../images/banner1.jpeg';
import banner2 from '../images/banner2.jpeg';
import banner3 from '../images/banner3.jpeg';
import banner4 from '../images/banner4.jpeg';
import banner5 from '../images/banner5.jpeg';
import banner6 from '../images/banner6.jpeg';

import Form from 'react-bootstrap/Form';
// import styles from '../components/pages/styles.module.scss';
import { CiHeart, CiStar } from "react-icons/ci";
import { FaStar, FaChevronLeft , FaChevronRight } from "react-icons/fa";
import Button from 'react-bootstrap/Button';



function Productslider() {
 

    return (
        <>
        <div className="product_slider">
            <Container>
                <Row>
                    <Col sm={3}>
                    <Form.Select aria-label="Default select example">
                      <option>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                    </Col>
                </Row>
                <Row className="mainproduct">
                  <Col  xs={12} sm={3}>
                    <div className="cardproduct">
                      <div className="card-media">
                        <a href="/details">
                          <img src={banner1} className="" alt="Image"/>
                        </a>
                        <button className="wishlist-button heart"><span class="number-like"> <CiHeart /></span></button>
                      </div>
                      <div className="card-title">
                        <h5 className="style2"><a href="#">Travel Monkey</a></h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <h6> 4.89 ETH</h6>
                        <div className="starrating">
                        <ul>
                          <li><FaStar/></li>
                          <li><FaStar/></li>
                          <li><FaStar/></li>
                          <li><FaStar/></li>
                          <li><CiStar/></li>
                        </ul>
                      </div>
                      </div>
                    </div>
                  </Col>
                  <Col xs={12} sm={3}>
                    <div className="cardproduct">
                      <div className="card-media">
                        <a href="/details">
                          <img src={banner2} className="" alt="Image"/>
                        </a>
                        <button className="wishlist-button heart"><span class="number-like"> <CiHeart /></span></button>
                      </div>
                      <div className="card-title">
                        <h5 className="style2"><a href="#">Travel Monkey</a></h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <h6> 4.89 ETH</h6>
                        <div className="starrating">
                        <ul>
                          <li><FaStar/></li>
                          <li><FaStar/></li>
                          <li><FaStar/></li>
                          <li><FaStar/></li>
                          <li><CiStar/></li>
                        </ul>
                      </div>
                      </div>
                    </div>
                  </Col>
                  <Col xs={12} sm={3}>
                    <div className="cardproduct">
                      <div className="card-media">
                        <a href="/details">
                          <img src={banner3} className="" alt="Image"/>
                        </a>
                        <button className="wishlist-button heart"><span class="number-like"> <CiHeart /></span></button>
                      </div>
                      <div className="card-title">
                        <h5 className="style2"><a href="#">Travel Monkey</a></h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <h6> 4.89 ETH</h6>
                        <div className="starrating">
                        <ul>
                          <li><FaStar/></li>
                          <li><FaStar/></li>
                          <li><FaStar/></li>
                          <li><FaStar/></li>
                          <li><CiStar/></li>
                        </ul>
                      </div>
                      </div>
                    </div>
                  </Col>
                  <Col xs={12} sm={3}>
                    <div className="cardproduct">
                      <div className="card-media">
                        <a href="/details">
                          <img src={banner4} className="" alt="Image"/>
                        </a>
                        <button className="wishlist-button heart"><span class="number-like"> <CiHeart /></span></button>
                      </div>
                      <div className="card-title">
                        <h5 className="style2"><a href="#">Travel Monkey</a></h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <h6> 4.89 ETH</h6>
                        <div className="starrating">
                        <ul>
                          <li><FaStar/></li>
                          <li><FaStar/></li>
                          <li><FaStar/></li>
                          <li><FaStar/></li>
                          <li><CiStar/></li>
                        </ul>
                      </div>
                      </div>
                    </div>
                  </Col>
                  <Col xs={12} sm={3}>
                    <div className="cardproduct">
                      <div className="card-media">
                        <a href="/details">
                          <img src={banner5} className="" alt="Image"/>
                        </a>
                        <button className="wishlist-button heart"><span class="number-like"> <CiHeart /></span></button>
                      </div>
                      <div className="card-title">
                        <h5 className="style2"><a href="#">Travel Monkey</a></h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <h6> 4.89 ETH</h6>
                        <div className="starrating">
                        <ul>
                          <li><FaStar/></li>
                          <li><FaStar/></li>
                          <li><FaStar/></li>
                          <li><FaStar/></li>
                          <li><CiStar/></li>
                        </ul>
                      </div>
                      </div>
                    </div>
                  </Col>
                  <Col xs={12} sm={3}>
                    <div className="cardproduct">
                      <div className="card-media">
                        <a href="/details">
                          <img src={banner6} className="" alt="Image"/>
                        </a>
                        <button className="wishlist-button heart"><span class="number-like"> <CiHeart /></span></button>
                      </div>
                      <div className="card-title">
                        <h5 className="style2"><a href="#">Travel Monkey</a></h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <h6> 4.89 ETH</h6>
                        <div className="starrating">
                        <ul>
                          <li><FaStar/></li>
                          <li><FaStar/></li>
                          <li><FaStar/></li>
                          <li><FaStar/></li>
                          <li><CiStar/></li>
                        </ul>
                      </div>
                      </div>
                    </div>
                  </Col>
                  <Col xs={12} sm={3}>
                    <div className="cardproduct">
                      <div className="card-media">
                        <a href="/details">
                          <img src={banner1} className="" alt="Image"/>
                        </a>
                        <button className="wishlist-button heart"><span class="number-like"> <CiHeart /></span></button>
                      </div>
                      <div className="card-title">
                        <h5 className="style2"><a href="#">Travel Monkey</a></h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <h6> 4.89 ETH</h6>
                        <div className="starrating">
                        <ul>
                          <li><FaStar/></li>
                          <li><FaStar/></li>
                          <li><FaStar/></li>
                          <li><FaStar/></li>
                          <li><CiStar/></li>
                        </ul>
                      </div>
                      </div>
                    </div>
                  </Col>
                  <Col xs={12} sm={3}>
                    <div className="cardproduct">
                      <div className="card-media">
                        <a href="/details">
                          <img src={banner2} className="" alt="Image"/>
                        </a>
                        <button className="wishlist-button heart"><span class="number-like"> <CiHeart /></span></button>
                      </div>
                      <div className="card-title">
                        <h5 className="style2"><a href="#">Travel Monkey</a></h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <h6> 4.89 ETH</h6>
                        <div className="starrating">
                        <ul>
                          <li><FaStar/></li>
                          <li><FaStar/></li>
                          <li><FaStar/></li>
                          <li><FaStar/></li>
                          <li><CiStar/></li>
                        </ul>
                      </div>
                      </div>
                    </div>
                  </Col>


                </Row>
                <div ClassName="">
                  <Row className="paginationSection">
                    <Col>
                      <Button variant="outline-dark"><FaChevronLeft /></Button>
                      <Button variant="outline-secondary">1</Button>
                      <Button variant="outline-secondary">2</Button>
                      <Button variant="outline-secondary">...</Button>
                      <Button variant="outline-secondary">13</Button>
                      <Button variant="outline-dark"><FaChevronRight /></Button>
                    </Col>
                  </Row>
                </div>
                
            </Container>
        </div>
        </>
    );
}

export default Productslider;
