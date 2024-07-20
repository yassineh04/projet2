import './Style5.css';
import React, { useState } from "react";
import { Nav, Navbar, Container, Modal, Button, Card, Breadcrumb, Accordion } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import imageSrc3 from './facebook.webp';
import imageSrc4 from './instagram.jpeg';
import imageSrc5 from './twitter.jpg';
import imageSrc11 from './ImageP8.png';
import imageSrc12 from './ImageP9.jpg';
import imageSrc13 from './ImageP10.jpg';
import imageSrc14 from './ImageP11.avif';
import imageSrc15 from './ImageP12.jpeg';
import imageSrc16 from './ImageP13.jpg';
import { FaChevronDown, FaChevronUp, FaShoppingCart } from 'react-icons/fa';
import { LinkContainer } from 'react-router-bootstrap';

function Decouvrez() {
    const [activeKey, setActiveKey] = useState(null);
    const [cart, setCart] = useState([]);
    const [showCart, setShowCart] = useState(false);
    const navigate = useNavigate();

    const handleSelect = (key) => {
        setActiveKey(key === activeKey ? null : key);
    };

    const addToCart = (item) => {
        setCart((prevCart) => [...prevCart, item]);
    };

    const handleShowCart = () => {
        setShowCart(true);
    };

    const handleCloseCart = () => {
        setShowCart(false);
    };

    const handleCheckout = () => {
        if (cart.length > 0) {
            navigate('/reserver');
        }
    };

    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand href="#">Sky Aviation Club</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px', margin: 'auto' }} navbarScroll>
                            <Nav.Link as={Link} to="/" className="mx-2">Accueil</Nav.Link>
                            <Nav.Link as={Link} to="/instructeur" className="mx-2">Nos Instructeurs</Nav.Link>
                            <Nav.Link as={Link} to="/decouvrez" className="mx-2">Decouvrez le ciel</Nav.Link>
                            <Nav.Link as={Link} to="/forum" className="mx-2">Forum</Nav.Link>
                            <Nav.Link as={Link} to="/concours" className="mx-2">Concours</Nav.Link>
                        </Nav>
                        <Button variant="outline-success" onClick={handleShowCart}>
                            <FaShoppingCart /> Panier ({cart.length})
                        </Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div>
                    <Breadcrumb>
                    <LinkContainer to="/">
                        <Breadcrumb.Item href="#">Accueil</Breadcrumb.Item>
                    </LinkContainer>
                        <Breadcrumb.Item active>Decouvrez</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
            <br />
            <br />
            <h3>Decouvrez le ciel sous un nouveau angle</h3>
            <br />
            <div>
                <hr className="horizantal-line" />
            </div>
            <br />
            <br />
            <h5 className="dec">Débutez avec une immersion magique ou explorez des paysages époustouflants</h5>
            <br />
            <br />
            <div className="container-in">
                <div className="row">
                    <Card style={{ width: '25rem', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
                        <Card.Img variant="top" src={imageSrc11} style={{ height: '13rem' }} />
                        <Card.Body>
                            <Card.Title>Pack Decouverte</Card.Title>
                            <Accordion activeKey={activeKey} onSelect={handleSelect}>
                                <Card>
                                    <Accordion.Toggle className="accordionT" as={Card.Header} eventKey="0">
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            Voir Plus
                                            {activeKey === '0' ? <FaChevronUp /> : <FaChevronDown />}
                                        </div>
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body>Le pack Decouverte</Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                            <br />
                            <Button className="card-btn" variant="primary" onClick={() => addToCart('Pack Decouverte')}>Ajouter au panier</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="row">
                    <Card style={{ width: '25rem', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
                        <Card.Img variant="top" src={imageSrc12} style={{ height: '13rem' }} />
                        <Card.Body>
                            <Card.Title>Pack Aventure</Card.Title>
                            <Accordion activeKey={activeKey} onSelect={handleSelect}>
                                <Card>
                                    <Accordion.Toggle className="accordionT" as={Card.Header} eventKey="1">
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            Voir Plus
                                            {activeKey === '1' ? <FaChevronUp /> : <FaChevronDown />}
                                        </div>
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="1">
                                        <Card.Body>Le pack Aventure</Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                            <br />
                            <Button className="card-btn" variant="primary" onClick={() => addToCart('Pack Aventure')}>Ajouter au panier</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <br />
            <br />
            <br />
            <h5 className="dec">Partagez des moments en famille ou célébrez l'amour avec une vue enchanteresse</h5>
            <br />
            <br />
            <div className="container-in">
                <div className="row">
                    <Card style={{ width: '25rem', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
                        <Card.Img variant="top" src={imageSrc13} style={{ height: '13rem' }} />
                        <Card.Body>
                            <Card.Title>Pack Famille</Card.Title>
                            <Accordion activeKey={activeKey} onSelect={handleSelect}>
                                <Card>
                                    <Accordion.Toggle className="accordionT" as={Card.Header} eventKey="2">
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            Voir Plus
                                            {activeKey === '2' ? <FaChevronUp /> : <FaChevronDown />}
                                        </div>
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="2">
                                        <Card.Body>Le pack Famille</Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                            <br />
                            <Button className="card-btn" variant="primary" onClick={() => addToCart('Pack Famille')}>Ajouter au panier</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="row">
                    <Card style={{ width: '25rem', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
                        <Card.Img variant="top" src={imageSrc14} style={{ height: '13rem' }} />
                        <Card.Body>
                            <Card.Title>Pack Romantique</Card.Title>
                            <Accordion activeKey={activeKey} onSelect={handleSelect}>
                                <Card>
                                    <Accordion.Toggle className="accordionT" as={Card.Header} eventKey="3">
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            Voir Plus
                                            {activeKey === '3' ? <FaChevronUp /> : <FaChevronDown />}
                                        </div>
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="3">
                                        <Card.Body>Le pack Romantique</Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                            <br />
                            <Button className="card-btn" variant="primary" onClick={() => addToCart('Pack Romantique')}>Ajouter au panier</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <br />
            <br />
            <br />
            <h5 className="dec">Découvrez des sites historiques et naturels captivants ou profitez d'une expérience de luxe exclusive</h5>
            <br />
            <br />
            <div className="container-in">
                <div className="row">
                    <Card style={{ width: '25rem', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
                        <Card.Img variant="top" src={imageSrc15} style={{ height: '13rem' }} />
                        <Card.Body>
                            <Card.Title>Pack Exploration</Card.Title>
                            <Accordion activeKey={activeKey} onSelect={handleSelect}>
                                <Card>
                                    <Accordion.Toggle className="accordionT" as={Card.Header} eventKey="4">
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            Voir Plus
                                            {activeKey === '4' ? <FaChevronUp /> : <FaChevronDown />}
                                        </div>
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="4">
                                        <Card.Body>Le pack Exploration</Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                            <br />
                            <Button className="card-btn" variant="primary" onClick={() => addToCart('Pack Exploration')}>Ajouter au panier</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="row">
                    <Card style={{ width: '25rem', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
                        <Card.Img variant="top" src={imageSrc16} style={{ height: '13rem' }} />
                        <Card.Body>
                            <Card.Title>Pack Premium</Card.Title>
                            <Accordion activeKey={activeKey} onSelect={handleSelect}>
                                <Card>
                                    <Accordion.Toggle className="accordionT" as={Card.Header} eventKey="5">
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            Voir Plus
                                            {activeKey === '5' ? <FaChevronUp /> : <FaChevronDown />}
                                        </div>
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="5">
                                        <Card.Body>Le pack Premium</Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                            <br />
                            <Button className="card-btn" variant="primary" onClick={() => addToCart('Pack Premium')}>Ajouter au panier</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <br />
            <br />
            <br />
            <div className="bas">
                <div className="left-section">
                    <div className="bass">
                        <h5>SkyAviation Club</h5>
                        <br />
                        <br />
                        <p>Suivez-nous</p>
                    </div>
                    <img src={imageSrc3} alt="Facebook" className="face" />
                    <br />
                    <img src={imageSrc4} alt="Instagram" className="insta" />
                    <br />
                    <br />
                    <img src={imageSrc5} alt="Twitter" className="twit" />
                </div>
                <div className="center-section">
                    <h5>Informations de contact</h5>
                    <br />
                    <br />
                    <p>Localisation: Aeroport d'Ottawa, Ottawa Canada</p>
                    <p>Téléphone: 613-555-5555</p>
                    <p>Email: skyaviationclub@gmail.com</p>
                </div>
                <div className="right-section">
                    <h5>Nos horaires d'ouverture</h5>
                    <br />
                    <br />
                    <br />
                    <p>Ouvert du Lundi au Samedi de 9h à 16h</p>
                </div>
            </div>
            <Modal show={showCart} onHide={handleCloseCart}>
                <Modal.Header closeButton>
                    <Modal.Title>Panier</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {cart.length === 0 ? (
                        <p>Le panier est vide.</p>
                    ) : (
                        <ul>
                            {cart.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseCart}>
                        Fermer
                    </Button>
                    <Button variant="primary" onClick={handleCheckout} disabled={cart.length === 0}>
                        Passer à la caisse
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Decouvrez;

