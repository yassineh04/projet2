import './Style4.css'
import React, {Component} from "react";
import {Nav,Navbar,Container,Button,Form,NavDropdown,FormControl,Breadcrumb,FormRange,Dropdown,DropdownButton,ButtonGroup} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt,FaPhone,FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { LinkContainer } from 'react-router-bootstrap';

export default class Forum extends Component{
    constructor(props) {
        super(props);
        this.state = {
            sortOrder: 'mostComments', // default sort order
            subjects: [
                { id: 1, title: 'Sujet 1', date: '14 June 2024, 11:14', createdBy: 'Personnage', comments: 50, views: 75 },
                { id: 2, title: 'Sujet 2', date: '19 January 2024, 10:15', createdBy: 'Personnage', comments: 70, views: 150 },
                { id: 3, title: 'Sujet 3', date: '4 April 2024, 12:41', createdBy: 'Personnage', comments: 90, views: 120 },
                { id: 4, title: 'Sujet 4', date: '27 March 2024, 15:01', createdBy: 'Personnage', comments: 20, views: 50 },
                { id: 5, title: 'Sujet 5', date: '6 December 2023, 19:30', createdBy: 'Personnage', comments: 15, views: 40 },
            ]
        };
    }

    handleSortChange = (sortOrder) => {
        this.setState({ sortOrder });
    }

    getSortedSubjects = () => {
        const { sortOrder, subjects } = this.state;
        let sortedSubjects = [...subjects];
        if (sortOrder === 'mostComments') {
            sortedSubjects.sort((a, b) => b.comments - a.comments);
        } else if (sortOrder === 'mostViews') {
            sortedSubjects.sort((a, b) => b.views - a.views);
        } else if (sortOrder === 'mostRecent') {
            sortedSubjects.sort((a, b) => new Date(b.date) - new Date(a.date));
        } else if (sortOrder === 'leastRecent') {
            sortedSubjects.sort((a, b) => new Date(a.date) - new Date(b.date));
        }
        return sortedSubjects;
    }

    render(){
        const sortedSubjects = this.getSortedSubjects();
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
                        <Breadcrumb.Item active>Forum</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <br/>
                <br/>
                <br/>
                <h3 className="for">Forum de discussion</h3>
                <br/>
                <br/>
                <DropdownButton  className="drop" onSelect={this.handleSortChange} id="dropdown-basic-button" title="Trier">
                    <Dropdown.Item eventKey="mostComments">Le plus de commentaires</Dropdown.Item>
                    <Dropdown.Item eventKey="mostRecent">Les plus recents</Dropdown.Item>
                    <Dropdown.Item eventKey="leastRecent">Les moins recents</Dropdown.Item>
                    <Dropdown.Item eventKey="mostViews">Les plus de vues</Dropdown.Item>
                </DropdownButton>
                <br/>
                <br/>
                {sortedSubjects.map(subject => (
                    <div key={subject.id} className="box-forum">
                        <div className="container-forum">
                            <div>
                                <h4 className="forum">{subject.title}</h4>
                                <p className="forum">{new Date(subject.date).toLocaleString()} -Cree par {subject.createdBy} </p>
                            </div>
                            <div className="mess">
                                <h4 className="forum">{subject.comments}</h4>
                                <p className="forum">Messages</p>
                            </div>
                            <div>
                                <h4 className="forum">{subject.views}</h4>
                                <p className="forum">Vues</p>
                            </div>
                            <div className="forum">
                                <Button as={Link} to="/sujet" className="forum" variant="primary">Discuter</Button>
                            </div>
                        </div>
                        <br />
                    </div>
                ))}
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