import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Actualite from './components/Actualite';
import { BrowserRouter} from 'react-router-dom';
import {Routes,Route} from 'react-router';
import Accueil from './components/Accueil';
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
import 'bootstrap/dist/css/bootstrap.min.css';
import './i18n'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

