import './Style4.css'
import React, {Component} from "react";
import {Nav,Navbar,Container,Button,Form,NavDropdown,FormControl,Breadcrumb,FormRange,Dropdown,DropdownButton,ButtonGroup} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import imageSrc3 from './facebook.webp'
import imageSrc4 from './instagram.jpeg'
import imageSrc5 from './twitter.jpg'
import { LinkContainer } from 'react-router-bootstrap';

export default class Sujet1 extends Component{
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
                        <Breadcrumb.Item active>Forum</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <br/>
                <br/>
                <br/>
                <h3 className="for">Forum de discussion</h3>
                <br/>
                <br/>
                <DropdownButton  className="drop" id="dropdown-basic-button" title="Trier">
                    <Dropdown.Item href="#/action-1">Le plus de commentaires</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Les plus recents</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Les moins recents</Dropdown.Item>
                </DropdownButton>
                <br/>
                <br/>
                <div className="box-forum">
                    <div className="container-forum">
                        <div> 
                            <h4 className="forum">Sujet 6</h4>
                            
                            <p className="forum">14 Juin 2024, 10:14 -Cree par Personnage </p>
                        </div>
                        <div className="mess">
                            <h4 className="forum">100</h4>
                            <p className="forum">Messages</p>
                        </div>
                        <div>
                            <h4 className="forum">200</h4>
                            <p className="forum">Vues</p>
                        </div>
                        <div className="forum">
                            <Button as={Link} to="/sujet" className="forum" variant="primary">Discuter</Button>
                        </div>


                    </div>
                    <br/>
                    
                </div>
                <br/>
                <br/>
                <div className="box-forum">
                    <div className="container-forum">
                        <div> 
                            <h4 className="forum">Sujet 7</h4>
                            
                            <p className="forum">14 Juin 2024, 10:14 -Cree par Personnage </p>
                        </div>
                        <div className="mess">
                            <h4 className="forum">100</h4>
                            <p className="forum">Messages</p>
                        </div>
                        <div>
                            <h4 className="forum">200</h4>
                            <p className="forum">Vues</p>
                        </div>
                        <div className="forum">
                            <Button as={Link} to="/sujet" className="forum" variant="primary">Discuter</Button>
                        </div>


                    </div>
                    <br/>
                    
                </div>
                <br/>
                <br/>
                <div className="box-forum">
                    <div className="container-forum">
                        <div> 
                            <h4 className="forum">Sujet 8</h4>
                            
                            <p className="forum">14 Juin 2024, 10:14 -Cree par Personnage </p>
                        </div>
                        <div className="mess">
                            <h4 className="forum">100</h4>
                            <p className="forum">Messages</p>
                        </div>
                        <div>
                            <h4 className="forum">200</h4>
                            <p className="forum">Vues</p>
                        </div>
                        <div className="forum">
                            <Button as={Link} to="/sujet" className="forum" variant="primary">Discuter</Button>
                        </div>


                    </div>
                    <br/>
                    
                </div>
                <br/>
                <br/>
                <div className="box-forum">
                    <div className="container-forum">
                        <div> 
                            <h4 className="forum">Sujet 9</h4>
                            
                            <p className="forum">14 Juin 2024, 10:14 -Cree par Personnage </p>
                        </div>
                        <div className="mess">
                            <h4 className="forum">100</h4>
                            <p className="forum">Messages</p>
                        </div>
                        <div>
                            <h4 className="forum">200</h4>
                            <p className="forum">Vues</p>
                        </div>
                        <div className="forum">
                            <Button as={Link} to="/sujet"  className="forum" variant="primary">Discuter</Button>
                        </div>


                    </div>
                    <br/>
                    
                </div>
                <br/>
                <br/>
                <div className="box-forum">
                    <div className="container-forum">
                        <div> 
                            <h4 className="forum">Sujet 10</h4>
                            
                            <p className="forum">14 Juin 2024, 10:14 -Cree par Personnage </p>
                        </div>
                        <div className="mess">
                            <h4 className="forum">100</h4>
                            <p className="forum">Messages</p>
                        </div>
                        <div>
                            <h4 className="forum">200</h4>
                            <p className="forum">Vues</p>
                        </div>
                        <div className="forum">
                            <Button as={Link} to="/sujet" className="forum" variant="primary">Discuter</Button>
                        </div>


                    </div>
                    <br/>
                    
                </div>
                <br/>
                <br/>
                <div className="button-group">
                    <ButtonGroup className="me-2" aria-label="First group">
                        <Button as={Link} to="/forum" variant="secondary">Previous</Button>{' '}
                        <Button as={Link} to="/forum" variant="secondary">1</Button>{' '}
                        <Button as={Link} to="/sujet1" variant="secondary">2</Button>{' '}
                        <Button as={Link} to="/sujet2" variant="secondary">3</Button>
                        <Button as={Link} to="/sujet2" variant="secondary">Next</Button>
                    </ButtonGroup>
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