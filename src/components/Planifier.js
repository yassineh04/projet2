import './Style5.css'
import React, {Component} from "react";
import {Nav,Navbar,Container,Button,Form,Alert,NavDropdown,FormControl,Breadcrumb,FormRange,Dropdown,DropdownButton,ButtonGroup,Row,Col,FormSelect} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt,FaPhone,FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { LinkContainer } from 'react-router-bootstrap';


export default class Planifier extends Component{
    constructor(props){
        super(props);
        this.state = {
            prenom:'',
            nom:'',
            email:'',
            date:'',
            errors:{},
            showAlert:false,
            showAlertError:false,
        };

        this.handleSubmit=this.handleSubmit.bind(this);
    }

    componentDidMount(){
        const today=new Date();
        const day=String(today.getDate()).padStart(2,'0');
        const month=String(today.getMonth()+1).padStart(2,'0');
        const year=String(today.getFullYear());
        const todayString='${year}-${month}-${day}';
        this.setState({date:todayString});
    }

    validateForm=() =>{
        const {prenom,nom,email}=this.state;
        let errors={};
        let formIsValid = true;

        if (!prenom){
            formIsValid=false;
            errors['prenom'] = 'Le prénom est requis';
        }

        if (!nom){
            formIsValid=false;
            errors['nom'] = 'Le nom est requis';
        }

        if (!email){
            formIsValid=false;
            errors['email'] = 'L\'email est requis';
        }

      

        this.setState({errors});
        return formIsValid;


    };

    handleSubmit=(event) =>{
        event.preventDefault();
        if(this.validateForm()){
            console.log('Reservation effectue avec succes');
            this.setState({showAlert:true,showAlertError:false});
        } else{
            this.setState({showAlertError:true,showAlert:false});
        }
    };

    



    render(){
        const {prenom,nom,email,date,errors,showAlert,showAlertError}=this.state;


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
                    <LinkContainer to="/instructeur">
                        <Breadcrumb.Item href="#">Instructeur</Breadcrumb.Item>
                    </LinkContainer>
                        <Breadcrumb.Item active>Planifier</Breadcrumb.Item>
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
                {showAlert && (
                    <Alert style={{textAlign:'center',fontSize:'15px',fontWeight:'bold',margin:'auto', width:'700px'}} variant="success" onClose={() => this.setState({showAlert:false})} dismissible>Votre Reservation a ete effectue avec succes!</Alert>
                )}

                {showAlertError && (
                    <Alert style={{textAlign:'center',fontSize:'15px',fontWeight:'bold',margin:'auto', width:'700px'}} variant="danger" onClose={() => this.setState({ showAlertError: false })} dismissible>
                        Il y a des erreurs dans le formulaire. Veuillez corriger les erreurs et réessayer.
                    </Alert>
                )}
                <br/>
                <div className="box-res">
    
                    <Form onSubmit={this.handleSubmit}>
                        <Row>
                            <Col>
                                
                                <Form.Control name="prenom" onChange={(e) => this.setState({prenom: e.target.value})} value={prenom }placeholder="Prenom" className="custom-margin" />
                                {errors.prenom && <p className="error-text">{errors.prenom}</p>}
                            </Col>
                            <Col>
                                <Form.Control name="nom" value={nom} onChange={(e) => this.setState({nom: e.target.value})} placeholder="Nom" className="custom-margin" />
                                {errors.nom && <p className="error-text">{errors.nom}</p>}
                            </Col>
                        </Row>
                    </Form>
                    
                    <Form>
                        <Row>
                            <Col>
                                <Form.Group controlId="formDate">
                                    
                                    <Form.Control
                                        type="date"
                                        value={date}
                                        onChange={(e) => this.setState(e.target.value)}
                                        className="custom-margin"
                                    />
                                </Form.Group>
                                
                            </Col>
                            <Col>
                                <Form.Control type="time" className="custom-margin"/>
                            </Col>
                        </Row>
                    </Form>
                    
                    <Form>
                        <Row>
                            <Col>
                                <Form.Group as={Col} controlId="formGridState">
                                    <Form.Control  as="select" defaultValue="Choose..." className="custom-margin">
                                        <option>Choisissez votre instructeur</option>
                                        <option>David Bellamy</option>
                                        <option>Alexandre Forbes</option>
                                        <option>Douglas Palmer</option>
                                        <option>Andrew Lewis</option>
                                    </Form.Control>
                                    
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Control name="email" value={email} onChange={(e) => this.setState({email: e.target.value})} placeholder="Email" className="custom-margin" />
                                {errors.email && <p className="error-text">{errors.email}</p>}
                            </Col>
                        </Row>
                    </Form>
                    <br/>
                    <div className="res">
                            <Button onClick={this.handleSubmit} className="forum" variant="primary">Reserver</Button>
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
    