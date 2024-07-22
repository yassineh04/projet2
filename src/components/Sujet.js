import './Style4.css'
import React, {Component} from "react";
import {Nav,Navbar,Alert,Container,Button,Form,NavDropdown,FormControl,Breadcrumb,FormRange,Dropdown,DropdownButton,ButtonGroup,Row,Col} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt,FaPhone,FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { LinkContainer } from 'react-router-bootstrap';



export default class Sujet extends Component{
    constructor(props) {
        super(props);
        this.state = {
            comment: '',
            showAlert: false,
            showAlertS:false,
        };
    }

    handleCommentChange = (event) => {
        this.setState({ comment: event.target.value });
    }

    handleSubmit = () => {
        const { comment } = this.state;
        if (comment.trim() === '') {
            this.setState({ showAlert: true,showAlertS:false });
        } else {
            this.setState({ showAlert: false,showAlertS:true });
            this.setState({comment:''});

            setTimeout(() => this.setState({showAlertS:false}),3000);
        }
    }


    render(){
        const { comment, showAlert, showAlertS } = this.state;

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
                        <LinkContainer to="/forum">
                            <Breadcrumb.Item href="#">Forum</Breadcrumb.Item>
                        </LinkContainer>
                        <Breadcrumb.Item active>Sujet 1</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <br/>
                <br/>
                <br/>
                <h3>Sujet 1</h3>
                <br/>
                <div>
                    <hr className="horizantal-line" />
                </div>
                <br/>
                <br/>
                <div className="box-sujet">
                    <div className="container-out">
                        <div className="row2-uti">
                            <h4 className="sujh">Jodie Bigman</h4>
                            <br/>
                            <p className="sujh" style={{fontStyle:'initial',fontSize:'17px'}}>Bonjour à tous, je suis étudiant en pilotage et je suis en train de préparer ma première grande navigation solo. J'ai quelques questions sur la gestion du plan de vol et les imprévus que je pourrais rencontrer. Quelqu'un pourrait-il partager ses expériences ou des conseils utiles ?</p>
                        </div>
                        <div className="row2-date" style={{textAlign:'right'}}>
                            <h5 className="sujh">14 Juin 2024</h5>
                        </div>
                    </div>
                    <br/>
                    
                </div>
                <br/>
                <br/>
                
                <br/>
                <br/> 
             
                <br/>
                <br/> 
                <div className="box-sujet">
                    <div className="container-out">
                        <div className="row2-uti">
                            <h4 className="sujh">Jodie Bigman</h4>
                            <br/>
                            <p className="sujh" style={{fontStyle:'initial',fontSize:'17px'}}>Salut Jodie, félicitations pour ta prochaine navigation solo ! C'est une étape excitante et importante. En ce qui concerne la gestion du plan de vol, je te recommande de toujours avoir un plan B. Vérifie les prévisions météorologiques avant le départ et sois prêt à ajuster ton itinéraire si les conditions changent.</p>
                        </div>
                        <div className="row2-date" style={{textAlign:'right'}}>
                            <h5 className="sujh">17 Juin 2024</h5>
                        </div>
                    </div>
                    <br/>
                    
                </div>
                <br/>
                <br/> 
                {showAlert && <Alert style={{textAlign:'center',fontSize:'15px',fontWeight:'bold',margin:'auto', width:'700px'}} variant="danger">Le champ de réponse est vide.</Alert>}
                {showAlertS && <Alert style={{textAlign:'center',fontSize:'15px',fontWeight:'bold',margin:'auto', width:'700px'}} variant="success">Votre reponse a ete envoye avec succes! Votre message sera examine par notre equipe puis sera prochainement enregistre dans le forum. </Alert>}
                <br/>
                <div className="box-uti">
                    <Row>
                        <Col>
                            <Form.Group controlId="commentTextarea" className="mb-3">
                                <Form.Label></Form.Label>
                                <Form.Control
                                    as="textarea"
                                    placeholder="Ecrivez votre reponse..."
                                    value={comment}
                                    onChange={this.handleCommentChange}
                                    style={{width:'1250px',height:'270px',margin:'auto'}}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                   
                </div>
                <br/>
                <div className="for">
                    <Button className="for" variant="primary" onClick={this.handleSubmit}>Poster votre reponse</Button>
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