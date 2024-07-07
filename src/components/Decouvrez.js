import './Style5.css'
import React, {Component} from "react";
import {Nav,Navbar,Container,Button,Form,NavDropdown,FormControl,Breadcrumb,FormRange,Dropdown,DropdownButton,ButtonGroup,Row,Col,Card} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import imageSrc3 from './facebook.webp'
import imageSrc4 from './instagram.jpeg'
import imageSrc5 from './twitter.jpg'
import imageSrc11 from './ImageP8.png'
import imageSrc12 from './ImageP9.jpg'
import imageSrc13 from './ImageP10.jpg'
import imageSrc14 from './ImageP11.avif'
import imageSrc15 from './ImageP12.jpeg'
import imageSrc16 from './ImageP13.jpg'

export default class Decouvrez extends Component{
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
                                style={{ maxHeight: '100px',margin:'auto' }}
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
                        <Breadcrumb.Item href="#">Accueil</Breadcrumb.Item>
                        <Breadcrumb.Item active>Decouvrez le ciel</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <br/>
                <br/>
                <h3>Decouvrez le ciel sous un nouveau angle</h3>
                <br/>
                <div>
                    <hr className="horizantal-line" />
                </div>
                <br/>
                <br/>
                <h5 className="dec">Débutez avec une immersion magique ou explorez des paysages époustouflants</h5>
                <br/>
                <br/>
                <div className="container-in">
                    <div className="row">
                        <Card style={{ width: '20rem' }}>
                            <Card.Img variant="top" src={imageSrc11} style={{height:'13rem'}} />
                            <Card.Body>
                                <Card.Title>Pack Decouverte</Card.Title>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias dolore temporibus libero!</p>
                                <Button as={Link} to="/reserver" className="card-btn"variant="primary">Reserver</Button>
                            </Card.Body>
                        </Card> 

                    </div>
                    <div className="row">
                        <Card style={{ width: '20rem' }}>
                            <Card.Img variant="top" src={imageSrc12} style={{height:'13rem'}}/>
                            <Card.Body>
                                <Card.Title>Pack Aventure</Card.Title>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias dolore temporibus libero!</p>
                                <Button as={Link} to="/reserver" className="card-btn"variant="primary">Reserver</Button>
                            </Card.Body>
                        </Card> 

                    </div>
                </div>
                <br/>
                <br/>
                <br/>
                <h5 className="dec">Partagez des moments en famille ou célébrez l'amour avec une vue enchanteresse</h5>
                <br/>
                <br/>
                <div className="container-in">
                <div className="row">
                        <Card style={{ width: '20rem' }}>
                            <Card.Img variant="top" src={imageSrc13} style={{height:'13rem'}}/>
                            <Card.Body>
                                <Card.Title>Pack Famille</Card.Title>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias dolore temporibus libero!</p>
                                <Button as={Link} to="/reserver" className="card-btn"variant="primary">Reserver</Button>
                            </Card.Body>
                        </Card> 

                    </div>
                    <div className="row">
                        <Card style={{ width: '20rem' }}>
                            <Card.Img variant="top" src={imageSrc14} style={{height:'13rem'}}/>
                            <Card.Body>
                                <Card.Title>Pack Romantique</Card.Title>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias dolore temporibus libero!</p>
                                <Button as={Link} to="/reserver" className="card-btn"variant="primary">Reserver</Button>
                            </Card.Body>
                        </Card> 

                    </div>
                </div>
                <br/>
                <br/>
                <br/>
                <h5 className="dec">Découvrez des sites historiques et naturels captivants ou profitez d'une expérience de luxe exclusive</h5>
                <br/>
                <br/>
                <div className="container-in">
                <div className="row">
                        <Card style={{ width: '20rem' }}>
                            <Card.Img variant="top" src={imageSrc15} style={{height:'13rem'}}/>
                            <Card.Body>
                                <Card.Title>Pack Exploration</Card.Title>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias dolore temporibus libero!</p>
                                <Button as={Link} to="/reserver" className="card-btn"variant="primary">Reserver</Button>
                            </Card.Body>
                        </Card> 

                    </div>
                    <div className="row">
                        <Card style={{ width: '20rem' }}>
                            <Card.Img variant="top" src={imageSrc16} style={{height:'13rem'}}/>
                            <Card.Body>
                                <Card.Title>Pack Premium</Card.Title>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias dolore temporibus libero!</p>
                                <Button as={Link} to="/reserver" className="card-btn"variant="primary">Reserver</Button>
                            </Card.Body>
                        </Card> 

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