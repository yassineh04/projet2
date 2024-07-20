import './Style6.css'
import React, {Component} from "react";
import {Nav,Navbar,Container,Button,Form,NavDropdown,FormControl,Breadcrumb,FormRange,Dropdown,DropdownButton,ButtonGroup,Row,Col,Card} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import imageSrc3 from './facebook.webp'
import imageSrc4 from './instagram.jpeg'
import imageSrc5 from './twitter.jpg'
import imageSrc7 from './ImageP4.webp'
import imageSrc8 from './ImageP5.webp'
import imageSrc9 from './ImageP6.avif'
import imageSrc10 from './ImageP7.avif'
import { LinkContainer } from 'react-router-bootstrap';

export default class Instructeur extends Component{
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
                                <Card.Title>Alexandre Forbes</Card.Title>
                                <Card.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore mollitia rem repudiandae officiis! Vitae, ullam? Voluptatibus itaque excepturi totam, eveniet neque repudiandae voluptas, ullam ad tempora officiis, facere ducimus pariatur!</Card.Text>
                                <Button as={Link} to="/planifier" variant="primary" style={{backgroundColor:'#003366'}}>Planifier RDV</Button>
                            </Card.Body>
                        </Card> 
                    </div>
                    <div className="row">
                        <Card style={{ width: '23rem',boxShadow:' 0 4px 8px rgba(0, 0, 0, 0.2)' }}>
                            <Card.Img variant="top" src={imageSrc8} style={{height:'17rem'}}/>
                            <Card.Body>
                                <Card.Title>David Bellamy</Card.Title>
                                <Card.Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio dolor aperiam, tempora delectus molestias alias cupiditate harum ipsum ipsa corporis voluptatibus obcaecati quos vero et nam impedit soluta doloremque hic.</Card.Text>
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
                                <Card.Title>Andrew Lewis</Card.Title>
                                <Card.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis sapiente doloremque reiciendis, ut a accusamus sint aspernatur aliquam. Laborum deleniti laboriosam libero dolorum minus rerum explicabo cupiditate neque dignissimos nisi?</Card.Text>
                                <Button as={Link} to="/planifier" variant="primary" style={{backgroundColor:'#003366'}}>Planifier RDV</Button>
                            </Card.Body>
                        </Card> 
                    </div>
                    <div className="row">
                        <Card style={{ width: '23rem',boxShadow:' 0 4px 8px rgba(0, 0, 0, 0.2)' }}>
                            <Card.Img variant="top" src={imageSrc10} style={{height:'17rem'}} />
                            <Card.Body>
                                <Card.Title>Douglas Palmer</Card.Title>
                                <Card.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate accusamus deserunt, nisi in cumque sapiente modi. Laborum ipsa sapiente nesciunt architecto, consectetur blanditiis voluptatem tempore distinctio, debitis, amet dolore. Ratione.</Card.Text>
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