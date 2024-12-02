import React, { useState } from 'react';
import { 
  Container, 
  Grid, 
  Card, 
  CardContent, 
  Typography, 
  Box,
  Chip,
  TextField,
  MenuItem,
  Button,
  Tabs,
  Tab
} from '@mui/material';
import { FaMapMarkerAlt, FaBuilding, FaClock, FaGraduationCap } from 'react-icons/fa';

const regions = {
  "Afrique": {
    "Afrique du Nord": ["Maroc", "Algérie", "Tunisie", "Libye", "Égypte"],
    "Afrique de l'Ouest": ["Sénégal", "Mali", "Côte d'Ivoire", "Ghana", "Nigeria"],
    "Afrique Centrale": ["Cameroun", "Gabon", "Congo", "RDC"],
    "Afrique de l'Est": ["Kenya", "Tanzanie", "Rwanda", "Éthiopie"],
    "Afrique Australe": ["Afrique du Sud", "Namibie", "Botswana", "Zimbabwe"]
  },
  "Europe": {
    "Europe de l'Ouest": ["France", "Allemagne", "Belgique", "Pays-Bas"],
    "Europe du Sud": ["Espagne", "Italie", "Portugal", "Grèce"],
    "Europe du Nord": ["Royaume-Uni", "Irlande", "Suède", "Danemark"],
    "Europe Centrale": ["Suisse", "Autriche", "Pologne", "République tchèque"]
  },
  "Amérique": {
    "Amérique du Nord": ["États-Unis", "Canada"],
    "Amérique Latine": ["Brésil", "Mexique", "Argentine", "Colombie"]
  },
  "Asie": {
    "Asie de l'Est": ["Japon", "Corée du Sud", "Chine"],
    "Asie du Sud-Est": ["Singapour", "Malaisie", "Indonésie"],
    "Moyen-Orient": ["Émirats arabes unis", "Qatar", "Arabie saoudite"]
  }
};

const internships = [
  {
    title: "Stage en Développement Web",
    company: "TechAfrica Solutions",
    location: "Casablanca, Maroc",
    duration: "6 mois",
    domain: "Technologie",
    description: "Développement d'applications web modernes avec React et Node.js",
    skills: ["React", "Node.js", "JavaScript"],
    type: "Stage"
  },
  {
    title: "Marketing Digital",
    company: "Publicis Group",
    location: "Paris, France",
    duration: "4 mois",
    domain: "Marketing",
    description: "Stratégies marketing digitales pour grands comptes internationaux",
    skills: ["Marketing Digital", "SEO", "Social Media"],
    type: "Stage"
  },
  {
    title: "Analyste Financier",
    company: "PanAfrican Bank",
    location: "Dakar, Sénégal",
    duration: "6 mois",
    domain: "Finance",
    description: "Analyse financière et reporting pour les marchés africains",
    skills: ["Finance", "Excel", "Analyse de données"],
    type: "Stage"
  },
  {
    title: "Data Science Intern",
    company: "Microsoft",
    location: "Londres, Royaume-Uni",
    duration: "5 mois",
    domain: "Data",
    description: "Machine learning et analyse de données pour produits cloud",
    skills: ["Python", "ML", "Azure"],
    type: "Stage"
  },
  {
    title: "Stage RH International",
    company: "TalentAfrica",
    location: "Abidjan, Côte d'Ivoire",
    duration: "3 mois",
    domain: "Ressources Humaines",
    description: "Recrutement et formation à l'échelle internationale",
    skills: ["Recrutement", "Formation", "SIRH"],
    type: "Stage"
  },
  {
    title: "Supply Chain Intern",
    company: "Amazon",
    location: "Berlin, Allemagne",
    duration: "6 mois",
    domain: "Logistique",
    description: "Optimisation de la chaîne logistique européenne",
    skills: ["Logistique", "Supply Chain", "SAP"],
    type: "Stage"
  },
  {
    title: "Innovation Research",
    company: "AfricaAI Lab",
    location: "Le Caire, Égypte",
    duration: "4 mois",
    domain: "Recherche",
    description: "Recherche en IA appliquée aux marchés émergents",
    skills: ["IA", "Recherche", "Python"],
    type: "Stage"
  },
  {
    title: "Business Development",
    company: "Alibaba Group",
    location: "Singapour",
    duration: "5 mois",
    domain: "Business",
    description: "Développement commercial en Asie du Sud-Est",
    skills: ["Vente", "Négociation", "Strategy"],
    type: "Stage"
  }
];

function InternshipMatching() {
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedSubRegion, setSelectedSubRegion] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedDomain, setSelectedDomain] = useState('');
  const [currentTab, setCurrentTab] = useState(0);

  const domains = [...new Set(internships.map(intern => intern.domain))];

  const handleRegionChange = (event) => {
    setSelectedRegion(event.target.value);
    setSelectedSubRegion('');
    setSelectedCountry('');
  };

  const handleSubRegionChange = (event) => {
    setSelectedSubRegion(event.target.value);
    setSelectedCountry('');
  };

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const handleDomainChange = (event) => {
    setSelectedDomain(event.target.value);
  };

  const handleTabChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center" sx={{ mb: 4 }}>
        Découvrez Nos Opportunités de Stage
      </Typography>

      <Tabs 
        value={currentTab} 
        onChange={handleTabChange} 
        centered 
        sx={{ mb: 4 }}
      >
        <Tab label="Tous les Stages" />
        <Tab label="Stages en Afrique" />
        <Tab label="Stages Internationaux" />
      </Tabs>

      {/* Filtres */}
      <Box sx={{ mb: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <TextField
              select
              fullWidth
              label="Région du monde"
              value={selectedRegion}
              onChange={handleRegionChange}
              variant="outlined"
            >
              <MenuItem value="">Toutes les régions</MenuItem>
              {Object.keys(regions).map((region) => (
                <MenuItem key={region} value={region}>
                  {region}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              select
              fullWidth
              label="Sous-région"
              value={selectedSubRegion}
              onChange={handleSubRegionChange}
              variant="outlined"
              disabled={!selectedRegion}
            >
              <MenuItem value="">Toutes les sous-régions</MenuItem>
              {selectedRegion && Object.keys(regions[selectedRegion]).map((subRegion) => (
                <MenuItem key={subRegion} value={subRegion}>
                  {subRegion}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              select
              fullWidth
              label="Pays"
              value={selectedCountry}
              onChange={handleCountryChange}
              variant="outlined"
              disabled={!selectedSubRegion}
            >
              <MenuItem value="">Tous les pays</MenuItem>
              {selectedRegion && selectedSubRegion && 
                regions[selectedRegion][selectedSubRegion].map((country) => (
                  <MenuItem key={country} value={country}>
                    {country}
                  </MenuItem>
                ))
              }
            </TextField>
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              select
              fullWidth
              label="Domaine"
              value={selectedDomain}
              onChange={handleDomainChange}
              variant="outlined"
            >
              <MenuItem value="">Tous les domaines</MenuItem>
              {domains.map((domain) => (
                <MenuItem key={domain} value={domain}>
                  {domain}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>
      </Box>

      {/* Liste des stages */}
      <Grid container spacing={3}>
        {internships
          .filter(internship => {
            if (currentTab === 1) {
              return internship.location.includes("Maroc") || 
                     internship.location.includes("Sénégal") || 
                     internship.location.includes("Égypte") ||
                     internship.location.includes("Côte d'Ivoire");
            } else if (currentTab === 2) {
              return !internship.location.includes("Maroc") && 
                     !internship.location.includes("Sénégal") && 
                     !internship.location.includes("Égypte") &&
                     !internship.location.includes("Côte d'Ivoire");
            }
            return true;
          })
          .map((internship, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card className="internship-card">
                <CardContent>
                  <Typography variant="h6" component="h2" gutterBottom>
                    {internship.title}
                  </Typography>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <FaBuilding style={{ marginRight: '8px', color: '#666' }} />
                    <Typography variant="body2" color="text.secondary">
                      {internship.company}
                    </Typography>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <FaMapMarkerAlt style={{ marginRight: '8px', color: '#666' }} />
                    <Typography variant="body2" color="text.secondary">
                      {internship.location}
                    </Typography>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <FaClock style={{ marginRight: '8px', color: '#666' }} />
                    <Typography variant="body2" color="text.secondary">
                      {internship.duration}
                    </Typography>
                  </Box>

                  <Typography variant="body2" color="text.secondary" paragraph>
                    {internship.description}
                  </Typography>

                  <Box sx={{ mb: 2 }}>
                    {internship.skills.map((skill, idx) => (
                      <Chip
                        key={idx}
                        label={skill}
                        size="small"
                        sx={{ mr: 1, mb: 1 }}
                      />
                    ))}
                  </Box>

                  <Button 
                    variant="contained" 
                    fullWidth
                    sx={{
                      background: 'var(--gradient-1)',
                      '&:hover': {
                        background: 'var(--gradient-5)',
                      }
                    }}
                  >
                    Postuler
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
      </Grid>
    </Container>
  );
}

export default InternshipMatching;
