import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../images/logo_.svg';
import { Link } from 'react-router-dom';


import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { LuShoppingBasket } from "react-icons/lu";

function Header() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <div className="header_nav">
            <div className="cotainer">
                <div className='row'>
                    <div className='col-sm-12'>
                    <Navbar bg="light" expand="lg">
                        <Container>
                            <Navbar.Brand href="/">
                                <img src={logo}></img>
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                            <Nav activeKey="/" className="navbar-nav justify-content-end">
                                <Form.Control type="search" placeholder="Search" className="me-2 searchbox" aria-label="Search" />
                                <nav><Link activeClassName="selected" className="nav-link" to="/">Docs</Link></nav>
                                <nav><Link className="nav-link" to="/about">About</Link></nav>
                                <nav><Link className="nav-link support_border" to="/contact"><b>Support Us</b> <span>
                                    {/* <LuShoppingBasket /> */}
                                </span></Link></nav>
                            </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton><Modal.Title>Login</Modal.Title></Modal.Header>
                        <Modal.Body>
                            <Form>
                                <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3" >
                                    <Form.Control type="email" placeholder="name@example.com" />
                                </FloatingLabel>
                                <FloatingLabel controlId="floatingPassword" label="Password">
                                    <Form.Control type="password" placeholder="Password" />
                                </FloatingLabel>
                                <br></br>
                                <Button variant="primary" type="submit">Submit</Button>
                                </Form>
                        </Modal.Body>
                    </Modal>

                    </div>
                </div>
            </div>
        </div></>
    );
}

export default Header;
