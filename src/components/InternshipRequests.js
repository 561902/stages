import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  Avatar,
  CardHeader,
  CardActions
} from '@mui/material';

// Données de démonstration (à remplacer par des données réelles de l'API)
const mockInternshipRequests = [
  {
    id: 1,
    studentName: "Sarah Benali",
    field: "Développement Web",
    skills: ["React", "Node.js", "MongoDB"],
    duration: "3 mois",
    startDate: "Juillet 2024",
    description: "À la recherche d'un stage en développement web fullstack. Expérience avec React et Node.js.",
    location: "Casablanca",
    education: "École d'Ingénieurs",
    avatar: "SB"
  },
  {
    id: 2,
    studentName: "Karim Alami",
    field: "Marketing Digital",
    skills: ["SEO", "Social Media", "Content Marketing"],
    duration: "6 mois",
    startDate: "Septembre 2024",
    description: "Passionné par le marketing digital, je cherche une opportunité dans une agence dynamique.",
    location: "Rabat",
    education: "Master Marketing",
    avatar: "KA"
  },
  {
    id: 3,
    studentName: "Yasmine Tazi",
    field: "Data Science",
    skills: ["Python", "Machine Learning", "SQL"],
    duration: "4 mois",
    startDate: "Juin 2024",
    description: "Étudiante en data science cherchant un stage pratique dans l'analyse de données.",
    location: "Tanger",
    education: "Master Data Science",
    avatar: "YT"
  }
];

const fields = [
  "Développement Web",
  "Marketing Digital",
  "Data Science",
  "Design",
  "Finance",
  "Ressources Humaines",
  "Communication",
  "Gestion de Projet"
];

const locations = ["Casablanca", "Rabat", "Tanger", "Marrakech", "Agadir", "Fès"];
const durations = ["2 mois", "3 mois", "4 mois", "5 mois", "6 mois"];

const InternshipRequests = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedField, setSelectedField] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedDuration, setSelectedDuration] = useState('');
  const [filteredRequests, setFilteredRequests] = useState(mockInternshipRequests);

  const handleSearch = () => {
    const filtered = mockInternshipRequests.filter(request => {
      const matchesSearch = searchTerm === '' || 
        request.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        request.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        request.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesField = selectedField === '' || request.field === selectedField;
      const matchesLocation = selectedLocation === '' || request.location === selectedLocation;
      const matchesDuration = selectedDuration === '' || request.duration === selectedDuration;

      return matchesSearch && matchesField && matchesLocation && matchesDuration;
    });

    setFilteredRequests(filtered);
  };

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedField('');
    setSelectedLocation('');
    setSelectedDuration('');
    setFilteredRequests(mockInternshipRequests);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Demandes de Stage
      </Typography>

      {/* Filtres */}
      <Box sx={{ mb: 4, p: 2, bgcolor: 'background.paper', borderRadius: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              label="Rechercher"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Nom, compétences..."
            />
          </Grid>
          <Grid item xs={12} md={2}>
            <FormControl fullWidth>
              <InputLabel>Domaine</InputLabel>
              <Select
                value={selectedField}
                label="Domaine"
                onChange={(e) => setSelectedField(e.target.value)}
              >
                <MenuItem value="">Tous</MenuItem>
                {fields.map((field) => (
                  <MenuItem key={field} value={field}>{field}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={2}>
            <FormControl fullWidth>
              <InputLabel>Ville</InputLabel>
              <Select
                value={selectedLocation}
                label="Ville"
                onChange={(e) => setSelectedLocation(e.target.value)}
              >
                <MenuItem value="">Toutes</MenuItem>
                {locations.map((location) => (
                  <MenuItem key={location} value={location}>{location}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={2}>
            <FormControl fullWidth>
              <InputLabel>Durée</InputLabel>
              <Select
                value={selectedDuration}
                label="Durée"
                onChange={(e) => setSelectedDuration(e.target.value)}
              >
                <MenuItem value="">Toutes</MenuItem>
                {durations.map((duration) => (
                  <MenuItem key={duration} value={duration}>{duration}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleSearch}
                fullWidth
              >
                Rechercher
              </Button>
              <Button
                variant="outlined"
                onClick={resetFilters}
                fullWidth
              >
                Réinitialiser
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Liste des demandes */}
      <Grid container spacing={3}>
        {filteredRequests.map((request) => (
          <Grid item xs={12} md={6} key={request.id}>
            <Card>
              <CardHeader
                avatar={
                  <Avatar>{request.avatar}</Avatar>
                }
                title={request.studentName}
                subheader={`${request.field} - ${request.education}`}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {request.description}
                </Typography>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="body2" color="text.secondary">
                    Début souhaité: {request.startDate}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Durée: {request.duration}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Ville: {request.location}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {request.skills.map((skill) => (
                    <Chip key={skill} label={skill} size="small" />
                  ))}
                </Box>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  Contacter
                </Button>
                <Button size="small" color="primary">
                  Voir le profil
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default InternshipRequests;
