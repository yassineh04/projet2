import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Accueil from './components/Accueil'
import Actualite from './components/Actualite';
import Forum from './components/Forum';
import ReserverA from './components/ReserverA';
import Instructeur from './components/Instructeur';
import Decouvrez from './components/Decouvrez';
import ActualiteP from './components/ActualiteP';
import Sujet from './components/Sujet';
import Reserver from './components/Reserver';
import Concours from './components/Concours';
import Passer from './components/Passer';
import Planifier from './components/Planifier';
import Sujet1 from './components/Sujet1';
import Sujet2 from './components/Sujet2';
import './i18n';
import { BrowserRouter as Router, Route, Switch, BrowserRouter, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter basename="/projet2">
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/actualite" element={<Actualite />} />
        <Route path="/forum" element={<Forum/>}/>
        <Route path="/reservera" element={<ReserverA/>}/>
        <Route path="/instructeur" element={<Instructeur/>}/>
        <Route path="/decouvrez" element={<Decouvrez/>}/>
        <Route path="/actualitep" element={<ActualiteP/>}/>
        <Route path="/sujet" element={<Sujet/>}/>
        <Route path="/reserver" element={<Reserver/>}/>
        <Route path="/concours" element={<Concours/>}/>
        <Route path="/passer" element={<Passer/>}/>
        <Route path="/planifier" element={<Planifier/>}/>
        <Route path="/sujet1" element={<Sujet1/>}/>
        <Route path="/sujet2" element={<Sujet2/>}/>
        <Route path="/i18n" element={<i18n/>}/>
        
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
