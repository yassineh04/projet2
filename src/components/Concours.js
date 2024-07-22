import './Style8.css'
import React, {Component} from "react";
import {Nav,Navbar,Container,Button,Form,NavDropdown,FormControl,Breadcrumb,FormRange,Dropdown,DropdownButton,ButtonGroup,Row,Col} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { FaMapMarkerAlt,FaPhone,FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default class Sujet extends Component{
    render(){
        return(
            <div style={{fontFamily:' "Open Sans", Arial, sans-serif'}}>
                <Navbar expand="lg" className="bg-body-tertiary">
                    <Container fluid>
                        <Navbar.Brand href="#" style={{color:'whitesmoke'}}>Sky Aviation Club</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px', margin:'auto' }}
                                navbarScroll
                            >
                                <Nav.Link as={Link} to="/" className="mx-2" style={{color:'whitesmoke'}}>Accueil</Nav.Link>
                                <Nav.Link as={Link} to="/instructeur" className="mx-2" style={{color:'whitesmoke'}}>Nos Instructeurs</Nav.Link>
                                <Nav.Link as={Link} to="/decouvrez" className="mx-2" style={{color:'whitesmoke'}}>Decouvrez le ciel</Nav.Link>
                                <Nav.Link as={Link} to="/forum" className="mx-2" style={{color:'whitesmoke'}}>Forum</Nav.Link>
                                <Nav.Link as={Link} to="/concours" className="mx-2" style={{color:'whitesmoke'}}>Concours</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <div>
                    <Breadcrumb>
                        <LinkContainer to="/">
                            <Breadcrumb.Item href="#">Accueil</Breadcrumb.Item>
                        </LinkContainer>
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
                    <div className="flex-box1">
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
                    <div className="flex-box1">
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
                    <div className="flex-box1">
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
                        <br/>
                        <div style={{marginLeft:'auto', display: 'flex', gap: '10px'}}>
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                <FaFacebook style={{marginLeft:'90px', gap: '10px'}} size={30} color="#4267B2" />
                            </a>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                <FaInstagram style={{marginRight:'5px', display: 'flex', gap: '10px'}} size={30} color="#C13584" />
                            </a>
                            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                                <FaTwitter size={30} color="#1DA1F2" />
                            </a>

                        </div>
                        
                    
                    </div>
                    <div className="center-section">
                        <h5>Informations de contact</h5>
                        <br/>
                        <br/>
                        <p><FaMapMarkerAlt /> Aeroport d'Ottawa, Ottawa Canada</p>
                        <p><FaPhone />  613-555-5555</p>
                        <p><FontAwesomeIcon icon={faEnvelope}/>  skyaviationclub@gmail.com</p>
                    
                    </div>
                    <div className="right-section">
                        <h5>Nos Horaires d'ouverture</h5>
                        <br/>
                        <br/>
                        <br/>
                        <p>Ouvert du Lundi au Samedi de 9h à 16h</p>
                    </div>
                </div>
            </div>

        )
    }
}