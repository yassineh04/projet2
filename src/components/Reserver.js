import './Style7.css'
import React, {Component} from "react";
import {Nav,Navbar,Container,Button,Form,NavDropdown,FormControl,Breadcrumb,FormRange,Dropdown,DropdownButton,ButtonGroup,Row,Col,Accordion,Card} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import imageSrc3 from './facebook.webp'
import imageSrc4 from './instagram.jpeg'
import imageSrc5 from './twitter.jpg'
import { LinkContainer } from 'react-router-bootstrap';

export default class Reserver extends Component{
    render(){
        return(
            <div>
                <Navbar expand="lg" className="bg-body-tertiary">
                    <Container fluid>
                        <Navbar.Brand href="#">Sky Aviation Club</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px', margin:'auto' }}
                                navbarScroll
                            >
                                <Nav.Link as={Link} to="/" className="mx-2">Accueil</Nav.Link>
                                <Nav.Link as={Link} to="/instructeur" className="mx-2">Nos Instructeurs</Nav.Link>
                                <Nav.Link as={Link} to="/decouvrez" className="mx-2">Decouvrez le ciel</Nav.Link>
                                <Nav.Link as={Link} to="/forum" className="mx-2">Forum</Nav.Link>
                                <Nav.Link as={Link} to="/concours" className="mx-2">Concours</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <div>
                    <Breadcrumb>
                        <LinkContainer to="/">
                            <Breadcrumb.Item href="#">Accueil</Breadcrumb.Item>
                        </LinkContainer>
                        <LinkContainer to="/decouvrez">
                            <Breadcrumb.Item href="#">Pack Choisi</Breadcrumb.Item>
                        </LinkContainer>
                        <Breadcrumb.Item active>Reserver</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <br/>
                <br/>
                <div className="container">
                    <div className="resd">
                        <h3>Details du client</h3>
                        <br/>
                        <div>
                            <hr className="horizantal-line" />
                        </div>
                        <br/>
                        <br/>
                        <br/>
                    
                        <Form>
                            <Row>
                                <Col>
                                    <Form.Control placeholder="Prenom" className="cust"/>
                                </Col>
                                <Col>
                                    <Form.Control placeholder="Nom" className="cust" />
                                </Col>
                            </Row>
                        </Form>
                        <br/>
                        <br/>
                        <Form>
                            <Row>
                                <Col>
                                    <Form.Control placeholder="Email" className="cust" />
                                </Col>
                                <Col>
                                    <Form.Control placeholder="Numero de tel" className="cust" />
                                </Col>
                            </Row>
                        </Form>
                        <br/>
                        <br/>
                        <Form>
                            <Row>
                                <Col>
                                    <Form.Control placeholder="Numero de carte" className="cust" />
                                </Col>
                                <Col>
                                    <Form.Control placeholder="CVV" className="cust" />
                                </Col>
                            </Row>
                        </Form>
                    </div>
                    <div className="resp">
                        <h4>Details de la reservation</h4>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error nemo perspiciatis recusandae et magnam alias nisi excepturi labore! Incidunt vel accusamus cum autem sunt sapiente aliquam velit laboriosam nostrum mollitia!</p>
                        <br/>
                        <br/>
                        <br/>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error nemo perspiciatis recusandae et magnam alias nisi excepturi labore! Incidunt vel accusamus cum autem sunt sapiente aliquam velit laboriosam nostrum mollitia!</p>
                        <br/>
                        <br/>
                        <br/>
                        <h4>Total:$$$$</h4>
                        <br/>
                        <br/>
                        <br/>
                        <div className="btnre">
                            <Button variant="primary" type="submit">Reserver</Button>
                        </div>
                        <br/>
                        <br/>
                        <br/>
                    </div>
                    <br/>
                </div>
                <div className="bas">
                    <div className="left-section">
                        <div className="bass">
                            <h5>SkyAviation Club</h5>
                            <br/>
                            <br/>
                            <p>Suivez-nous</p>
                    
                        </div>
                            <img src={imageSrc3} alt="Description de l'image" className="face"/>
                            <br/>
                            <img src={imageSrc4} alt="Description de l'image" className="insta"/>
                            <br/>
                            <br/>
                            <img src={imageSrc5} alt="Description de l'image" className="twit"/>
                    
                    </div>
                    <div className="center-section">
                        <h5>Informations de contact</h5>
                        <br/>
                        <br/>
                        <p>Localisation: Aeroport d'Ottawa, Ottawa Canada</p>
                        <p>Telephone: 613-555-5555</p>
                        <p>Email: skyaviationclub@gmail.com</p>
                    
                    </div>
                    <div className="right-section">
                        <h5>Nos horaires d'ouvertures</h5>
                        <br/>
                        <br/>
                        <br/>
                        <p>Ouvert du Lundi a Samedi de 9h a 16h</p>
                    </div>
                </div>

            </div>

        )
    }
}