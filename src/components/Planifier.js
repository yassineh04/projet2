import './Style5.css'
import React, {Component} from "react";
import {Nav,Navbar,Container,Button,Form,NavDropdown,FormControl,Breadcrumb,FormRange,Dropdown,DropdownButton,ButtonGroup,Row,Col,FormSelect} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import imageSrc3 from './facebook.webp'
import imageSrc4 from './instagram.jpeg'
import imageSrc5 from './twitter.jpg'


export default class Planifier extends Component{
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
                        <Breadcrumb.Item href="#">Accueil</Breadcrumb.Item>
                        <Breadcrumb.Item href="#">Concours</Breadcrumb.Item>
                        <Breadcrumb.Item active>Reserver Concours</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <br/>
                <br/>
                <br/>
                <h3>Planifiez un rendez-vous</h3>
               
                <br/>
                <div>
                    <hr className="horizantal-line" />
                </div>
                <br/>
                <br/>
                <div className="box-res">
    
                    <Form>
                        <Row>
                            <Col>
                                <Form.Control placeholder="Prenom" className="custom-margin" />
                            </Col>
                            <Col>
                                <Form.Control placeholder="Nom" className="custom-margin" />
                            </Col>
                        </Row>
                    </Form>
                    
                    <Form>
                        <Row>
                            <Col>
                                <input type="date" className="custom-margin"></input>
                            </Col>
                            <Col>
                            <input type="time" className="custom-margin"></input>
                            </Col>
                        </Row>
                    </Form>
                    
                    <Form>
                        <Row>
                            <Col>
                            <select aria-label="Choisissez un instructeur" className="custom-margin" placeholder="Choisissez un instructeur">
                                <option>Choisissez un instructeur</option>
                                <option value="Alexandre Forbes">Alexandre Forbes</option>
                                <option value="David Bellamy">David Bellamy</option>
                                <option value="Andrew Lewis">Andrew Lewis</option>
                                <option value="Douglas Palmer">Douglas Palmer</option>
                            </select>
                            </Col>
                            <Col>
                                <Form.Control placeholder="Email" className="custom-margin" />
                            </Col>
                        </Row>
                    </Form>
                    <br/>
                    <div className="res">
                            <Button className="forum" variant="primary">Reserver</Button>
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
    