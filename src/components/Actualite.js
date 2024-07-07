import './Style3.css'
import React, {Component} from "react";
import {Nav,Navbar,Container,Button,Form,NavDropdown,FormControl,Breadcrumb,FormRange,Dropdown,DropdownButton} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import imageSrc6 from './ImageP3.jpeg'
import imageSrc3 from './facebook.webp'
import imageSrc4 from './instagram.jpeg'
import imageSrc5 from './twitter.jpg'

export default class Actualite extends Component{
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
                                <Nav.Link as={Link} to=".forum/" className="mx-2">Forum</Nav.Link>
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
                        <Breadcrumb.Item active>Actualite</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <br/>
                <br/>
                <br/>
                <h3>Nos dernieres actualites dans l'aviation</h3>
                <br/>
                <br/>
                <div>
                    <hr className="horizantal-line" />
                </div>
                <br/>
                <br/>
                <br/>
                <DropdownButton  className="drop" id="dropdown-basic-button" title="Trier">
                    <Dropdown.Item href="#/action-1">Le plus de commentaires</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Les plus recents</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Les moins recents</Dropdown.Item>
                </DropdownButton>
                <br/>
                <div className="container-actu">
                    <div className="box-actu">
                        <div className="box-filtre">
                            <br/>
                            <h5 className="filtre">Filtrez vos recherches</h5>
                            <br/>
                            <hr className="horizantal-line" />
                            <br/>
                            <h5 className="filtre">Categorie:</h5>
                            <br/>
                            <Form.Check aria-label="option 1" label="Securite Aerienne" />
                            <Form.Check aria-label="option 1" label="Evenements et Salons" />
                            <Form.Check aria-label="option 1" label="Nouveautes technologiques" />
                            <Form.Check aria-label="option 1" label="Compagnie aeriennes" />
                            <br/>
                            <hr className="horizantal-line" />
                            <br/>
                            <h5 className="filtre">Type d'aviation:</h5>
                            <br/>
                            <Form.Check aria-label="option 1" label="Aviation d'affaires" />
                            <Form.Check aria-label="option 1" label="Aviation generale" />
                            <Form.Check aria-label="option 1" label="Aviation commerciale" />
                            <Form.Check aria-label="option 1" label="Aviation militaire" />
                            <br/>
                            <hr className="horizantal-line" />
                            <br/>
                            <h5 className="filtre">Region geographique:</h5>
                            <br/>
                            <Form.Check aria-label="option 1" label="Europe" />
                            <Form.Check aria-label="option 1" label="Afrique" />
                            <Form.Check aria-label="option 1" label="Amerique du Nord" />
                            <Form.Check aria-label="option 1" label="Asie" />
                            <br/>
                            <hr className="horizantal-line" />
                            <br/>
                            <h5 className="filtre">Popularite:</h5>
                            <br/>
                            <div>
                                <input type="range" min="Plus"/>
                            </div>
                            <br/>
                            <hr className="horizantal-line" />
                            <br/>
                            <h5 className="filtre">Innovation et futur:</h5>
                            <br/>
                            <Form.Check aria-label="option 1" label="Projets de developpement futur" />
                            <Form.Check aria-label="option 1" label="Concepts d'avions du futur" />
                            <Form.Check aria-label="option 1" label="Aviation spatiale" />
                        </div>
                    </div>
                    <div className="box-act">
                        <div className="box-actsa">
                            <div className="container-actu">
                                <div>
                                    <img src={imageSrc6} alt="Description de l'image" className="act"/>
                                </div>
                                <div className="act">
                                    <h5 className="act">Actualite 1</h5>
                                    <br/>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo minus eveniet asperiores inventore obcaecati eos necessitatibus saepe possimus facilis atque dolor ipsa sint libero cum, hic, vero excepturi assumenda molestias.</p>
                                    <Button as={Link} to="/actualitep" className="act" variant="primary">Voir plus</Button>
                                </div>
                            </div>
                        </div>
                        <br/>
                        <br/>
                        <div className="box-actsa">
                            <div className="container-actu">
                                <div>
                                    <img src={imageSrc6} alt="Description de l'image" className="act"/>
                                </div>
                                <div className="act">
                                    <h5 className="act">Actualite 2</h5>
                                    <br/>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo minus eveniet asperiores inventore obcaecati eos necessitatibus saepe possimus facilis atque dolor ipsa sint libero cum, hic, vero excepturi assumenda molestias.</p>
                                    <Button as={Link} to="/actualitep" className="act" variant="primary">Voir plus</Button>
                                </div>
                            </div>
                        </div>
                        <br/>
                        <br/>
                        <div className="box-actsa">
                            <div className="container-actu">
                                <div>
                                    <img src={imageSrc6} alt="Description de l'image" className="act"/>
                                </div>
                                <div className="act">
                                    <h5 className="act">Actualite 3</h5>
                                    <br/>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo minus eveniet asperiores inventore obcaecati eos necessitatibus saepe possimus facilis atque dolor ipsa sint libero cum, hic, vero excepturi assumenda molestias.</p>
                                    <Button as={Link} to="/actualitep" className="act" variant="primary">Voir plus</Button>
                                </div>
                            </div>
                        </div>
                        <br/>
                        <br/>
                        <div className="box-actsa">
                            <div className="container-actu">
                                <div>
                                    <img src={imageSrc6} alt="Description de l'image" className="act"/>
                                </div>
                                <div className="act">
                                    <h5 className="act">Actualite 4</h5>
                                    <br/>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo minus eveniet asperiores inventore obcaecati eos necessitatibus saepe possimus facilis atque dolor ipsa sint libero cum, hic, vero excepturi assumenda molestias.</p>
                                    <Button as={Link} to="/actualitep" className="act" variant="primary">Voir plus</Button>
                                </div>
                            </div>
                        </div>

                        
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <div className="actp">
                    <Button className="actp" variant="primary">Afficher plus d'actualites</Button>
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