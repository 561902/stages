import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Container, Typography } from '@mui/material';
import Footer from './components/Footer';
import Home from './components/Home';
import InternshipMatching from './components/InternshipMatching';
import MentorNetwork from './components/MentorNetwork';
import Resources from './components/Resources';
import Login from './components/Login';
import InternshipRequests from './components/InternshipRequests';
import './styles/global.css';

function App() {
  return (
    <Router>
      <div className="App">
        <AppBar position="static" className="navbar">
          <Toolbar>
            <Typography variant="h6" style={{ color: '#333', fontWeight: 'bold' }}>
              StageMatch
            </Typography>
            <div className="nav-buttons-container">
              <Button 
                component={Link} 
                to="/" 
                className="nav-button"
              >
                Accueil
              </Button>
              <Button 
                component={Link} 
                to="/stages" 
                className="nav-button"
              >
                Stages
              </Button>
              <Button 
                component={Link} 
                to="/mentorat" 
                className="nav-button"
              >
                Mentorat
              </Button>
              <Button 
                component={Link} 
                to="/ressources" 
                className="nav-button"
              >
                Ressources
              </Button>
              <Button 
                component={Link} 
                to="/demandes-stage" 
                className="nav-button"
              >
                Demandes de Stage
              </Button>
              <Button 
                component={Link} 
                to="/login" 
                className="nav-button login-button"
              >
                Connexion
              </Button>
            </div>
          </Toolbar>
        </AppBar>

        <Container className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stages" element={<InternshipMatching />} />
            <Route path="/mentorat" element={<MentorNetwork />} />
            <Route path="/ressources" element={<Resources />} />
            <Route path="/login" element={<Login />} />
            <Route path="/demandes-stage" element={<InternshipRequests />} />
          </Routes>
        </Container>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
