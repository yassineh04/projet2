import './Style5.css'
import React, {Component} from "react";
import {Nav,Navbar,Container,Button,Form,NavDropdown,FormControl,Breadcrumb,FormRange,Dropdown,DropdownButton,ButtonGroup,Row,Col,Card,Carousel} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt,FaPhone,FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import imageSrc6 from './ImageP3.jpeg'
import { LinkContainer } from 'react-router-bootstrap';


export default class ActualiteP extends Component{
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
                                style={{ maxHeight: '100px',margin:'auto' }}
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
                        <LinkContainer to="/actualite">
                            <Breadcrumb.Item href="#">Actualite</Breadcrumb.Item>
                        </LinkContainer>
                        <Breadcrumb.Item active>Actualite n</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <br/>
                <br/>
                <h3>Actualite n</h3>
                <br/>
                <div>
                    <hr className="horizantal-line" />
                </div>
                <br/>
                <br/>
                <div className="container-in">
                    <div className="row">
                        <Carousel className="carou"data-bs-theme="dark">
                        <   Carousel.Item>
                                <img className="d-block w-100" src={imageSrc6} alt="First slide"/>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100" src={imageSrc6} alt="Second slide"/>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100" src={imageSrc6} alt="Third slide"/>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <div className="row">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, consectetur error suscipit sunt nisi voluptatum saepe sit similique et, sequi unde adipisci beatae quibusdam explicabo dignissimos culpa delectus autem! Deleniti.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, consectetur error suscipit sunt nisi voluptatum saepe sit similique et, sequi unde adipisci beatae quibusdam explicabo dignissimos culpa delectus autem! Deleniti.</p>
                        <div className="actp">
                            <Button as={Link} to='/actualite' variant="primary">Voir d'autres actualites</Button>
                        </div>
                    </div>
                        <br/>
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