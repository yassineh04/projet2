import './Style4.css'
import React, {Component} from "react";
import {Nav,Navbar,Alert,Container,Button,Form,NavDropdown,FormControl,Breadcrumb,FormRange,Dropdown,DropdownButton,ButtonGroup,Row,Col} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import imageSrc3 from './facebook.webp'
import imageSrc4 from './instagram.jpeg'
import imageSrc5 from './twitter.jpg'
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
                            <h4 className="sujh">Utilisateur 1</h4>
                            <br/>
                            <p className="sujh">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum dolores natus quidem consequatur ea at dolorum laboriosam maiores unde! Quas officia molestias suscipit totam atque at labore? Qui, iure sequi.</p>
                        </div>
                        <div className="row2-date" style={{textAlign:'right'}}>
                            <h5 className="sujh">14 Juin 2024</h5>
                        </div>
                    </div>
                    <br/>
                    
                </div>
                <br/>
                <br/>
                <div className="box-sujet">
                    <div className="container-out">
                        <div className="row2-uti">
                            <h4 className="sujh">Utilisateur 1</h4>
                            <br/>
                            <p className="sujh">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum dolores natus quidem consequatur ea at dolorum laboriosam maiores unde! Quas officia molestias suscipit totam atque at labore? Qui, iure sequi.</p>
                        </div>
                        <div className="row2-date" style={{textAlign:'right'}}>
                            <h5 className="sujh">15 Juin 2024</h5>
                        </div>
                    </div>
                    <br/>
                    
                </div>
                <br/>
                <br/> 
                <div className="box-sujet">
                    <div className="container-out">
                        <div className="row2-uti">
                            <h4 className="sujh">Utilisateur 1</h4>
                            <br/>
                            <p className="sujh">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum dolores natus quidem consequatur ea at dolorum laboriosam maiores unde! Quas officia molestias suscipit totam atque at labore? Qui, iure sequi.</p>
                        </div>
                        <div className="row2-date" style={{textAlign:'right'}}>
                            <h5 className="sujh">15 Juin 2024</h5>
                        </div>
                    </div>
                    <br/>
                    
                </div>
                <br/>
                <br/> 
                <div className="box-sujet">
                    <div className="container-out">
                        <div className="row2-uti">
                            <h4 className="sujh">Utilisateur 1</h4>
                            <br/>
                            <p className="sujh">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum dolores natus quidem consequatur ea at dolorum laboriosam maiores unde! Quas officia molestias suscipit totam atque at labore? Qui, iure sequi.</p>
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