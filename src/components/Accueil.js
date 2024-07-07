import './Style2.css'
import React, {Component} from "react";
import {Nav,Navbar,Container,Button,Form,NavDropdown,FormControl} from 'react-bootstrap'
import imageSrc from './ImageP1.png'
import imageSrc2 from './ImageP2.jpg'
import imageSrc3 from './facebook.webp'
import imageSrc4 from './instagram.jpeg'
import imageSrc5 from './twitter.jpg'
import { Link } from 'react-router-dom';

export default class Accueil extends Component{
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
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <div className="d-flex align-items-center mx-5">
                    <div className="me-3">
                        <h4>Découvrez le ciel sous un nouveau angle avec SkyAviationClub,</h4>
                        <h4>votre porte d'entrée vers l'aventure aérienne et la passion du vol.</h4>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <h6>N°1 Aerodrome au Canada</h6>
                    </div>
                    <div>
                        <img src={imageSrc} alt="Description de l'image" className="img-fluid"/>
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <h4>Decouvrez nos 3 formules d'abonnements incontournables!</h4>
                <br/>
                <br/>
                <br/>
                <div className="flex-container">
                    <div className="flex-box">
                        <div className="box blue">
                            <br/>
                            <h6 className="align-center grey-text">Le plus populaire</h6>
                            <br/>
                            <h4 className="white-text">SkyAviation Decouverte</h4>
                       
                            <div className="sub-box">
                                <br/>
                                <h5 className="decou">- Abonnement mensuelle</h5>
                                <br/>
                                <h5 className="decou">- Age minimum requis: 14 ans</h5>
                                <br/>
                                <h5 className="decou">- Duree d'environ 40h, repartis sur 3 sessions de 3 heures par semaine </h5>
                                <br/>
                                <h5 className="decou">- Avion utilise: Cesna 152</h5>
                                <br/>
                                <h5 className="decou">- Preparation au brevet d'initiation au pilotage</h5>
                                <br/>
                                <h5 className="decou">- Acceder aux videos pedagogiques</h5>
                                <br/>
                                <br/>
                                <h4 className="prix">$499.99</h4>
                                <br/>
                            
                                <Button as={Link} to="/reservera" className="abobutton butbl" variant="primary">Reserver</Button>
                            </div>
                        </div>
                    </div>
                    <div className="flex-box">
                        <div className="box jaune">
                            <br/>
                            <h6 className="align-center">Le plus demande</h6>
                            <br/>
                            <h4>SkyAviation Decouverte</h4>
                            <div className="sub-box">
                                <br/>
                                <h5 className="decou">- Abonnement trimestrielle</h5>
                                <br/>
                                <h5 className="decou">- Age minimum requis: 18 ans</h5>
                                <br/>
                                <h5 className="decou">- Duree d'environ 160h, repartis sur 3 sessions de 4 heures par semaine </h5>
                                <br/>
                                <h5 className="decou">- Avion utilise: Cesna 172</h5>
                                <br/>
                                <h5 className="decou">- Preparation au brevet de pilotage privee</h5>
                                <br/>
                                <h5 className="decou">- Carnet de vol numerique disponible</h5>
                                <br/>
                                <br/>
                                <h4 className="prix">$999.99</h4>
                                <br/>
                            
                                <Button as={Link} to="/reservera" className="abobutton butcl" variant="primary">Reserver</Button>
                            </div>
                        </div>
                        
                    </div>
                    <div className="flex-box">
                    <div className="box rouge">
                            <br/>
                            <h6 className="align-center">Le plus exclusif</h6>
                            <br/>
                            <h4>SkyAviation Decouverte</h4>
                            <div className="sub-box">
                                <br/>
                                <h5 className="decou">- Abonnement semestrielle</h5>
                                <br/>
                                <h5 className="decou">- Age minimum requis: 21 ans</h5>
                                <br/>
                                <h5 className="decou">- Duree d'environ 400h, repartis sur 4 sessions de 4 heures par semaine </h5>
                                <br/>
                                <h5 className="decou">- Avion utilise: Cesna 182</h5>
                                <br/>
                                <h5 className="decou">- Preparation a une license de pilotage</h5>
                                <br/>
                                <h5 className="decou">- Beneficiez d'un mentorat individuel</h5>
                                <br/>
                                <br/>
                                <h4 className="prix">$1499.99</h4>
                                <br/>
                            
                                <Button as={Link} to="/reservera" className="abobutton butjn" variant="primary">Reserver</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <div>
                    <hr className="horizantal-line" />
                </div>
                <br/>
                <br/>
                <br/>
                <div>
                    <h3>Explorer les dernieres actualites de l'aviation</h3>
                    <br/>
                    <br/>
                    <div className="image-text-container">
                        <img src={imageSrc2} alt="Description de l'image" className="img-fluid-img2"/>
                        <div className="text-and-button">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt possimus impedit cupiditate, ex vero autem aliquid culpa dolorum sed quod aut dolor repellat suscipit reiciendis, sunt omnis voluptas optio voluptatem.</p>
                            <Button as={Link} to="/actualite" className="butt-link" variant="link"> Voir d'autres actualites</Button>
                        </div>
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
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