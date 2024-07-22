import './Style2.css'
import {React,Component} from "react";
import {Nav,Navbar,Container,Button,NavDropdown} from 'react-bootstrap';
import imageSrc from './ImageP1.png'
import { Link } from 'react-router-dom';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { useTranslation} from 'react-i18next';
import Microsoft1 from './Micro1.jpg';
import { FaMapMarkerAlt,FaPhone,FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';



function Accueil(){
    const{t,i18n}=useTranslation();

    const changeLanguage=(lng) => {
        i18n.changeLanguage(lng);
    };

    const swapLanguage = () => {
        if (i18n.language === 'en') {
            changeLanguage('fr');
        } else if (i18n.language === 'fr') {
            changeLanguage('es');
        } else {
            changeLanguage('en');
        }
    };

  

    
        return(
            <div style={{fontFamily:' "Open Sans", Arial, sans-serif'}}>
                <Navbar expand="lg" className="bg-body-tertiary">
                    <Container fluid>
                        <Navbar.Brand href="#" style={{color:'whitesmoke'}}>Sky Aviation Club</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px',margin:'auto' }}
                                navbarScroll
                            >
                                <Nav.Link as={Link} to="/" className="mx-2" style={{color:'whitesmoke'}}>{t('home')}</Nav.Link>
                                <Nav.Link as={Link} to="/instructeur" className="mx-2" style={{color:'whitesmoke'}}>{t('instructors')}</Nav.Link>
                                <Nav.Link as={Link} to="/decouvrez" className="mx-2" style={{color:'whitesmoke'}}>{t('discover')}</Nav.Link>
                                <Nav.Link as={Link} to="/forum" className="mx-2" style={{color:'whitesmoke'}}>{t('forum')}</Nav.Link>
                                <Nav.Link as={Link} to="/concours" className="mx-2" style={{color:'whitesmoke'}}>{t('competition')}</Nav.Link>
                            </Nav>
                            
                            <Nav>
                                <NavDropdown title={<FontAwesomeIcon icon={faGlobe} />} id="basic-nav-dropdown">
                                    <NavDropdown.Item onClick={() => swapLanguage()}>English</NavDropdown.Item>
                                    <NavDropdown.Item onClick={() => swapLanguage()}>Français</NavDropdown.Item>
                                    <NavDropdown.Item onClick={() => swapLanguage()}>Español</NavDropdown.Item>
                                </NavDropdown>
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
                        <h4>{t('discover_sky')}</h4>
                        <h4>{t('discover_sky2')}</h4>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <h6>{t('number_1_aerodrome')}</h6>
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
                <h4>{t('3_formules')}</h4>
                <br/>
                <br/>
                <br/>
                <div className="flex-container">
                    <div className="flex-box">
                        <div className="box blue">
                            <br/>
                            <h6 className="align-center grey-text">{t('popular')}</h6>
                            <br/>
                            <h4 className="white-text">{t('skyaviation_discovery')}</h4>
                       
                            <div className="sub-box">
                                <br/>
                                <h5 className="decou">- {t('monthly_subscription')}</h5>
                                <br/>
                                <h5 className="decou">- {t('age_min_required')}: 14</h5>
                                <br/>
                                <h5 className="decou">- {t('time1')}</h5>
                                <br/>
                                <h5 className="decou">- {t('plane_used')}: Cesna 152</h5>
                                <br/>
                                <h5 className="decou">- {t('prep1')}</h5>
                                <br/>
                                <h5 className="decou">- {t('access_videos')}</h5>
                                <br/>
                                <br/>
                                <h4 className="prix">$499.99</h4>
                                <br/>
                            
                                <Button as={Link} to="/reservera" className="abobutton butbl" variant="primary">{t('reserve_button')}</Button>
                            </div>
                        </div>
                    </div>
                    <div className="flex-box">
                        <div className="box jaune">
                            <br/>
                            <h6 className="align-center">{t('premium')}</h6>
                            <br/>
                            <h4>{t('skyaviation_premium')}</h4>
                            <div className="sub-box">
                                <br/>
                                <h5 className="decou">- {t('trimestrial_subscription')}</h5>
                                <br/>
                                <h5 className="decou">- {t('age_min_required')}: 18 </h5>
                                <br/>
                                <h5 className="decou">-  {t('time2')}</h5>
                                <br/>
                                <h5 className="decou">- {t('plane_used')}: Cesna 172</h5>
                                <br/>
                                <h5 className="decou">- {t('prep2')}</h5>
                                <br/>
                                <h5 className="decou">- {t('prep2')}</h5>
                                <br/>
                                <br/>
                                <h4 className="prix">$999.99</h4>
                                <br/>
                            
                                <Button as={Link} to="/reservera" className="abobutton butcl" variant="primary">{t('reserve_button')}</Button>
                            </div>
                        </div>
                        
                    </div>
                    <div className="flex-box">
                    <div className="box rouge">
                            <br/>
                            <h6 className="align-center">{t('elite')}</h6>
                            <br/>
                            <h4>{t('skyaviation_elite')}</h4>
                            <div className="sub-box">
                                <br/>
                                <h5 className="decou">- {t('semiannual_subscription')}</h5>
                                <br/>
                                <h5 className="decou">- {t('age_min_required')}: 21 </h5>
                                <br/>
                                <h5 className="decou">-  {t('time3')}</h5>
                                <br/>
                                <h5 className="decou">- {t('plane_used')}: Cesna 182</h5>
                                <br/>
                                <h5 className="decou">- {t('prep3')}</h5>
                                <br/>
                                <h5 className="decou">- {t('prep33')}</h5>
                                <br/>
                                <br/>
                                <h4 className="prix">$1499.99</h4>
                                <br/>
                            
                                <Button as={Link} to="/reservera" className="abobutton butjn" variant="primary">{t('reserve_button')}</Button>
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
                    <h3>{t('latest_news')}</h3>
                    <br/>
                    <br/>
                    <div className="image-text-container">
                        <img src={Microsoft1} alt="Description de l'image" className="img-fluid-img2"/>
                        <div className="text-and-button">
                            <h4 style={{marginRight:'auto',marginLeft:'100px'}}>{t('titlen')}</h4>
                            <br/>
                            <br/>
                            <p>{t('news')}</p>
                            <Button as={Link} to="/actualite" className="butt-link" variant="link"> {t('see_more_news')}</Button>
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
                            <p>{t('follow_us')}</p>
                    
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
                        <h5>{t('contact_info')}</h5>
                        <br/>
                        <br/>
                        <p><FaMapMarkerAlt /> {t('location')}</p>
                        <p><FaPhone />  613-555-5555</p>
                        <p><FontAwesomeIcon icon={faEnvelope}/>  skyaviationclub@gmail.com</p>
                    
                    </div>
                    <div className="right-section">
                        <h5>{t('opening_hours')}</h5>
                        <br/>
                        <br/>
                        <br/>
                        <p>{t('open_hours')}</p>
                    </div>
                </div>


            </div>

            
        );
    }

    


export default Accueil;