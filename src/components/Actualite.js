import './Style3.css';
import React, { Component } from "react";
import { Nav, Navbar, Container, Button, Form, Breadcrumb, Dropdown, DropdownButton } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Actu1 from './Actu1.jpeg';
import imageSrc6 from './ImageP3.jpeg';
import imageSrc7 from './Actu2.jpg';
import imageSrc8 from './Actu3.jpg';
import imageSrc9 from './Actu4.png';
import imageSrc10 from './Actu5.webp';
import { FaMapMarkerAlt,FaPhone,FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { LinkContainer } from 'react-router-bootstrap';

class Actualite extends Component {
  constructor(props) {
    super(props);
    this.state = {
        selectedFilters:{
            category:[],
            aviationType:[],
            region:[],
            innovation:[],
            popularity:"Plus"

        },

        actualites:[
            {id:1,title:"L'Airbus A321 XLR desormais certifie",category:"Securite Aerienne",type:"Aviation commerciale",region:"Europe",popularity:7,imageSrc:Actu1,innovation:"Projets de developpement futur", text:"Ce modèle est une version allongée du A321neo, conçue pour offrir une plus grande autonomie et une capacité accrue, ce qui en fait une excellente option pour les itinéraires long-courriers tout en restant efficace en termes de consommation de carburant."},
            {id:1,title:"La très longue conversion de l’aéronautique à l’avion du futur",category:"Nouveautes technologiques",type:"Aviation generale",region:"Europe",popularity:5,imageSrc:imageSrc7,innovation:"Concepts d'avions du futur",text:"Les nouveaux avions intègrent des technologies avancées telles que l'optimisation aérodynamique, les matériaux composites pour réduire le poids, et des moteurs plus efficaces et moins polluants."},
            {id:1,title:"Les 10 transporteurs aériens les plus fiables",category:"Compagnie aerienne",type:"Aviation commerciale",region:"Amerique du Nord",popularity:4,imageSrc:imageSrc8,text:"Voici une liste des 10 transporteurs aériens souvent cités comme les plus fiables, en se basant sur divers classements et évaluations récents"},
            {id:1,title:"AéroSalon Édition 2024",category:"Evenements et Salons",region:"Europe",popularity:3,imageSrc:imageSrc9,text:"L'AéroSalon est un événement majeur dans le secteur de l'aviation, où les professionnels, les passionnés et les acteurs de l'industrie se rencontrent pour découvrir les dernières innovations, discuter des tendances du marché et explorer de nouvelles opportunités."},
            {id:1,title:"Tout ce qui monte redescend",type:"Aviation d'affaires",region:"Amerique du Nord",popularity:2,imageSrc:imageSrc10,text:"Les cycles économiques peuvent influencer l'aviation d'affaires. L’aviation d’affaires redescend sur terre après l’envolée pandémique ayant permis aux constructeurs de jets privés comme Bombardier et Gulfstream d’engraisser leurs carnets de commandes."},
            
        ],
        displayedActualites:[]
    };
  }

  componentDidMount(){
    this.filterActualites();
  }

  handleFilterChange=(filterType,value) =>{
    this.setState(prevState => {
        const selectedFilters= { ...prevState.selectedFilters };
        if (selectedFilters[filterType].includes(value)){
            selectedFilters[filterType]=selectedFilters[filterType].filter(item=>item !==value);
        } else{
            selectedFilters[filterType].push(value);
        }
        return {selectedFilters};
    }, this.filterActualites);
  };

  handlePopularityChange=(event) =>{
    this.setState(prevState => ({
        selectedFilters:{
            ...prevState.selectedFilters,
            popularity:event.target.value
        }
    }), this.filterActualites);
  };

  filterActualites=() =>{
    const {selectedFilters,actualites}=this.state;

    const filtered=actualites.filter(act =>{
        const matchesCategory = selectedFilters.category.length === 0 || selectedFilters.category.includes(act.category);
        const matchesAviationType = selectedFilters.aviationType.length === 0 || selectedFilters.aviationType.includes(act.type);
        const matchesRegion = selectedFilters.region.length === 0 || selectedFilters.region.includes(act.region);
        const matchesPopularity = selectedFilters.popularity === "Plus" || act.popularity >= parseInt(selectedFilters.popularity, 10);
        const matchesInnovation=selectedFilters.innovation.length===0 || selectedFilters.innovation.includes(act.innovation)
        return matchesCategory && matchesAviationType && matchesRegion && matchesPopularity;
    });
    this.setState({displayedActualites:filtered});
  };

  

  render() {
    const { displayedActualites} = this.state;

    return (
      <div style={{fontFamily:' "Open Sans", Arial, sans-serif'}}>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container fluid>
            <Navbar.Brand href="#" style={{ color: 'whitesmoke' }}>Sky Aviation Club</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px', margin: 'auto' }} navbarScroll>
                <Nav.Link as={Link} to="/" className="mx-2" style={{ color: 'whitesmoke' }}>Accueil</Nav.Link>
                <Nav.Link as={Link} to="/instructeur" className="mx-2" style={{ color: 'whitesmoke' }}>Nos Instructeurs</Nav.Link>
                <Nav.Link as={Link} to="/decouvrez" className="mx-2" style={{ color: 'whitesmoke' }}>Decouvrez le ciel</Nav.Link>
                <Nav.Link as={Link} to="/forum/" className="mx-2" style={{ color: 'whitesmoke' }}>Forum</Nav.Link>
                <Nav.Link as={Link} to="/concours" className="mx-2" style={{ color: 'whitesmoke' }}>Concours</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div>
          <Breadcrumb>
          <LinkContainer to="/">
            <Breadcrumb.Item href="#">Accueil</Breadcrumb.Item>
          </LinkContainer>
            <Breadcrumb.Item active>Actualite</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <br />
        <br />
        <br />
        <h3>Nos dernieres actualites dans l'aviation</h3>
        <br />
        <br />
        <div>
          <hr className="horizantal-line" />
        </div>
        <br />
        <br />
        <div className="container-actu">
          <div className="box-actu">
            <div className="box-filtre">
              <br />
              <h5 className="filtre">Filtrez vos recherches</h5>
              <br />
              <hr className="horizantal-line" />
              <br />
              <h5 className="filtre">Categorie:</h5>
              <br />
              <Form.Check 
                type="checkbox" 
                value="Securite Aerienne" 
                label="Securite Aerienne" 
                onChange={() => this.handleFilterChange('category', 'Securite Aerienne')} 
              />
              <Form.Check 
                type="checkbox" 
                value="Evenements et Salons" 
                label="Evenements et Salons" 
                onChange={() => this.handleFilterChange('category', 'Evenements et Salons')}
              />
              <Form.Check 
                type="checkbox" 
                value="Nouveautes technologiques" 
                label="Nouveautes technologiques" 
                onChange={() => this.handleFilterChange('category', 'Nouveautes technologiques')}
              />
              <Form.Check 
                type="checkbox" 
                value="Compagnie aeriennes" 
                label="Compagnie aeriennes" 
                onChange={() => this.handleFilterChange('category', 'Compagnie aerienne')} 
              />
              <br />
              <hr className="horizantal-line" />
              <br />
              <h5 className="filtre">Type d'aviation:</h5>
              <br />
              <Form.Check 
                type="checkbox" 
                value="Aviation d'affaires" 
                label="Aviation d'affaires" 
                onChange={() => this.handleFilterChange('aviationType', 'Aviation d\'affaires')}
              />
              <Form.Check 
                type="checkbox" 
                value="Aviation generale" 
                label="Aviation generale" 
                onChange={() => this.handleFilterChange('aviationType', 'Aviation generale')}
              />
              <Form.Check 
                type="checkbox" 
                value="Aviation commerciale" 
                label="Aviation commerciale" 
                onChange={() => this.handleFilterChange('aviationType', 'Aviation commerciale')}
              />
              <Form.Check 
                type="checkbox" 
                value="Aviation militaire" 
                label="Aviation militaire" 
                onChange={() => this.handleFilterChange('aviationType', 'Aviation militaire')}
              />
              <br />
              <hr className="horizantal-line" />
              <br />
              <h5 className="filtre">Region geographique:</h5>
              <br />
              <Form.Check 
                type="checkbox" 
                value="Europe" 
                label="Europe" 
                onChange={() => this.handleFilterChange('region', 'Europe')}
              />
              <Form.Check 
                type="checkbox" 
                value="Afrique" 
                label="Afrique" 
                onChange={() => this.handleFilterChange('region', 'Afrique')} 
              />
              <Form.Check 
                type="checkbox" 
                value="Amerique du Nord" 
                label="Amerique du Nord" 
                onChange={() => this.handleFilterChange('region', 'Amerique du Nord')}
              />
              <Form.Check 
                type="checkbox" 
                value="Asie" 
                label="Asie" 
                onChange={() => this.handleFilterChange('region', 'Asie')} 
              />
              <br />
              <hr className="horizantal-line" />
              <br />
              <h5 className="filtre">Popularite:</h5>
              <br />
              <input 
                type="range" 
                min="1" 
                max="10"
                step="1" 
                value={this.state.selectedFilters.popularity} 
                onChange={this.handlePopularityChange}
              />
              <br />
              <hr className="horizantal-line" />
              <br />
              <h5 className="filtre">Innovation et futur:</h5>
              <br />
              <Form.Check 
                type="checkbox" 
                value="Projets de developpement futur" 
                label="Projets de developpement futur" 
                onChange={() => this.handleFilterChange('innovation', 'Projets de developpement futur')}
              />
              <Form.Check 
                type="checkbox" 
                value="Concepts d'avions du futur" 
                label="Concepts d'avions du futur" 
                onChange={() => this.handleFilterChange('innovation', 'Concepts d\'avions du futur')} 
              />
              <Form.Check 
                type="checkbox" 
                value="Aviation Spatiale" 
                label="Aviation spatiale" 
                onChange={() => this.handleFilterChange('innovation', 'Aviation Spatiale')} 
              />
            </div>
          </div>
        <div className="box-act">
            {displayedActualites.length>0 ? displayedActualites.map(act =>(
                <div key={act.id} className="box-actsa">
                    <div className="container-actu">
                        <div>
                            <img alt={act.imageSrc} src={act.imageSrc}  className="act"/>
                        </div>
                        <div className="act">
                            <h5 className="act">{act.title}</h5>
                            <br />
                            <p style={{fontStyle:'initial'}}>{act.text}</p>
                            <Button as={Link} to="/actualitep" className="act" variant="primary">Voir plus</Button>
                        </div>
                        <br/>
                    </div>
                    <br/>
                </div>
                
            )):(
                <p style={{fontWeight:'bold',color:'red'}}>Aucune actualite ne correspond a vos criteres de filtrage.</p>
            )}
            <br/>
            </div>
        </div>
        <br />
        <br />  
        <br />
        <br />        
          <br />
          <br />
          <br />
          <br />
          <br />
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
      
      
    );
  }
}

export default Actualite;

           
