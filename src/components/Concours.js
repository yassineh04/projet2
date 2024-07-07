import './Style8.css'
import React, {Component} from "react";
import {Nav,Navbar,Container,Button,Form,NavDropdown,FormControl,Breadcrumb,FormRange,Dropdown,DropdownButton,ButtonGroup,Row,Col} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import imageSrc3 from './facebook.webp'
import imageSrc4 from './instagram.jpeg'
import imageSrc5 from './twitter.jpg'

export default class Sujet extends Component{
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
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link as={Link} to="/" className="mx-2">Accueil</Nav.Link>
                                <Nav.Link as={Link} to="/instructeur" className="mx-2">Nos Instructeurs</Nav.Link>
                                <Nav.Link as={Link} to="/decouvrez" className="mx-2">Decouvrez le ciel</Nav.Link>
                                <Nav.Link as={Link} to="/forum" className="mx-2">Forum</Nav.Link>
                                <Nav.Link as={Link} to="/concours" className="mx-2">Concours</Nav.Link>
                            </Nav>
                            <Form className="d-flex ms-auto">
                                <Form.Control
                                    type="search"
                                    placeholder="Rechercher"
                                    className="d-flex"
                                    aria-label="Search"
                                />
                                <Button variant="outline-success" className="mx-3">Rechercher</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <div>
                    <Breadcrumb>
                        <Breadcrumb.Item href="#">Accueil</Breadcrumb.Item>
                        <Breadcrumb.Item active>Concours</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <br/>
                <br/>
                <h3>Passer un concours de pilotage</h3>
                <br/>
                <div>
                    <hr className="horizantal-line" />
                </div>
                <br/>
                <br/>
                <div className="flex-container">
                    <div className="flex-box">
                        <br/>
                        <br/>
                        <h5 className="text">Brevet d'initiation au pilotage</h5>
                        <br/>
                        <br/>
                        <h6 className="text">Conditions:</h6>
                        <br/>
                        <p className="text">- Avoir au moins 14 ans</p>
                        <p className="text">- Nombre d'heure minimum: 50h</p>
                        <br/>
                        <h4 className="text">$49.99</h4>
                        <br/>
                        <div className="btnc">
                            <Button as={Link} to="/passer" variant="primary" className="btnco">Passer</Button>
                        </div>

                    </div>
                    <div className="flex-box">
                    <br/>
                        <br/>
                        <h5 className="text">Brevet de pilotage privee</h5>
                        <br/>
                        <br/>
                        <h6 className="text">Conditions:</h6>
                        <br/>
                        <p className="text">- Avoir au moins 18 ans</p>
                        <p className="text">- Nombre d'heure minimum: 175h</p>
                        <br/>
                        <h4 className="text">$79.99</h4>
                        <br/>
                        <div className="btnc">
                            <Button as={Link} to="/passer" variant="primary" className="btnco">Passer</Button>
                        </div>
                        
                    </div>
                    <div className="flex-box">
                    <br/>
                        <br/>
                        <h5 className="text">License de pilotage</h5>
                        <br/>
                        <br/>
                        <h6 className="text">Conditions:</h6>
                        <br/>
                        <p className="text">- Avoir au moins 21 ans</p>
                        <p className="text">- Nombre d'heure minimum: 400h</p>
                        <p className="text">- Avoir obtenu un baccalaureat</p>
                        
                        <h4 className="text">$99.99</h4>
                    
                        <div className="btnc">
                            <Button as={Link} to="/passer" variant="primary" className="btnco">Passer</Button>
                        </div>
                        
                    </div>
                </div>
                <br/>
                <br/>
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