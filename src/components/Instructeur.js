import './Style6.css'
import React, {Component} from "react";
import {Nav,Navbar,Container,Button,Form,NavDropdown,FormControl,Breadcrumb,FormRange,Dropdown,DropdownButton,ButtonGroup,Row,Col,Card} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import imageSrc7 from './ImageP4.webp'
import imageSrc8 from './ImageP5.webp'
import imageSrc9 from './ImageP6.avif'
import imageSrc10 from './ImageP7.avif'
import { LinkContainer } from 'react-router-bootstrap';
import { FaMapMarkerAlt,FaPhone,FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default class Instructeur extends Component{
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
                        <Breadcrumb.Item>Accueil</Breadcrumb.Item>
                    </LinkContainer>
                        <Breadcrumb.Item active>Instructeur</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <br/>
                <br/>
                <h3>Decouvrez nos instructeurs en pilotage</h3>
                <br/>
                <div>
                    <hr className="horizantal-line" />
                </div>
                <br/>
                <br/>
                <div className="container-in">
                    <div className="row">
                        <Card style={{ width: '23rem',boxShadow:' 0 4px 8px rgba(0, 0, 0, 0.2)' }}>
                            <Card.Img variant="top" src={imageSrc7} style={{height:'17rem'}}/>
                            <Card.Body>
                                <Card.Title style={{fontWeight:'bolder'}}>Alexandre Forbes</Card.Title>
                                <Card.Text>Alexandre Forbes est un instructeur pilote dévoué avec plus de quinze années d'expérience dans l'aviation civile. Alexandre croit en une formation rigoureuse et en une pratique répétitive pour perfectionner les compétences de pilotage de ses élèves. Alexandre Forbes apporte une richesse d'expérience et une passion inébranlable pour l'aviation au SkyAviation Club, où il continue d'inspirer et de former les pilotes de demain avec compétence et dévouement.</Card.Text>
                                <Button as={Link} to="/planifier" variant="primary" style={{backgroundColor:'#003366'}}>Planifier RDV</Button>
                            </Card.Body>
                        </Card> 
                    </div>
                    <div className="row">
                        <Card style={{ width: '23rem',boxShadow:' 0 4px 8px rgba(0, 0, 0, 0.2)' }}>
                            <Card.Img variant="top" src={imageSrc8} style={{height:'17rem'}}/>
                            <Card.Body>
                                <Card.Title style={{fontWeight:'bolder'}}>David Bellamy</Card.Title>
                                <Card.Text>Titulaire de plusieurs certifications, y compris la Licence de Pilote de Ligne (ATPL), et diverses qualifications de type pour des aéronefs à voilure fixe et à voilure tournante, David Bellamy est un pilote et instructeur chevronné avec plus de deux décennies d'expérience dans l'aviation civile et commerciale. David adopte une approche centrée sur l'élève, en adaptant ses techniques d'enseignement aux besoins et aux styles d'apprentissage individuels de ses étudiants.</Card.Text>
                                <Button as={Link} to="/planifier" variant="primary" style={{backgroundColor:'#003366'}}>Planifier RDV</Button>
                            </Card.Body>
                        </Card> 
                    </div>
                </div>
                <br/>
                <br/>
                <div className="container-in">
                    <div className="row">
                        <Card style={{ width: '23rem' ,boxShadow:' 0 4px 8px rgba(0, 0, 0, 0.2)'}}>
                            <Card.Img variant="top" src={imageSrc9} style={{height:'17rem'}}/>
                            <Card.Body>
                                <Card.Title style={{fontWeight:'bolder'}}>Andrew Lewis</Card.Title>
                                <Card.Text>Andrew Lewis est un instructeur pilote hautement qualifié avec plus de dix années d'expérience dans le domaine de l'aviation. Andrew est connu pour sa rigueur et sa capacité à transmettre ses connaissances de manière claire et concise. Andrew Lewis apporte une combinaison unique de compétences techniques et de passion pour l'enseignement au SkyAviation Club.</Card.Text>
                                <Button as={Link} to="/planifier" variant="primary" style={{backgroundColor:'#003366'}}>Planifier RDV</Button>
                            </Card.Body>
                        </Card> 
                    </div>
                    <div className="row">
                        <Card style={{ width: '23rem',boxShadow:' 0 4px 8px rgba(0, 0, 0, 0.2)' }}>
                            <Card.Img variant="top" src={imageSrc10} style={{height:'17rem'}} />
                            <Card.Body>
                                <Card.Title style={{fontWeight:'bolder'}}>Douglas Palmer</Card.Title>
                                <Card.Text>Douglas Palmer est un instructeur pilote de renommée avec plus de quinze années d'expérience dans l'aviation. Douglas est reconnu pour son approche pédagogique innovante et engageante. Douglas Palmer apporte une richesse de connaissances et une passion contagieuse pour le vol au SkyAviation Club. </Card.Text>
                                <Button as={Link} to="/planifier" variant="primary" style={{backgroundColor:'#003366'}}>Planifier RDV</Button>
                            </Card.Body>
                        </Card> 
                    </div>
                </div>
                <br/>
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