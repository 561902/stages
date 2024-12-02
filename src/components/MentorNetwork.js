import React, { useState } from 'react';
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Avatar,
  Chip,
  Button,
  TextField,
  MenuItem
} from '@mui/material';
import { FaLinkedin, FaGraduationCap, FaBriefcase, FaMapMarkerAlt } from 'react-icons/fa';

const mentors = [
  {
    id: 1,
    name: "Dr. Fatima El Mansouri",
    title: "Directrice Innovation",
    company: "TechMaghreb",
    location: "Casablanca, Maroc",
    expertise: ["Innovation", "Tech Leadership", "Startups"],
    bio: "15 ans d'expérience dans l'innovation technologique en Afrique",
    education: "Doctorat en Informatique",
    image: "https://randomuser.me/api/portraits/women/1.jpg"
  },
  {
    id: 2,
    name: "Ibrahim Diallo",
    title: "Entrepreneur & Investisseur",
    company: "WestAfrica Ventures",
    location: "Dakar, Sénégal",
    expertise: ["Entrepreneuriat", "Finance", "Tech"],
    bio: "Fondateur de plusieurs startups tech en Afrique de l'Ouest",
    education: "MBA HEC Paris",
    image: "https://randomuser.me/api/portraits/men/2.jpg"
  },
  {
    id: 3,
    name: "Amina Kone",
    title: "Directrice Marketing",
    company: "Digital Africa",
    location: "Abidjan, Côte d'Ivoire",
    expertise: ["Marketing Digital", "Stratégie", "Communication"],
    bio: "Experte en stratégies marketing pour le marché africain",
    education: "Master Marketing Digital",
    image: "https://randomuser.me/api/portraits/women/3.jpg"
  },
  {
    id: 4,
    name: "Dr. Omar Ndongo",
    title: "Chercheur & Consultant",
    company: "AfricaAI Institute",
    location: "Tunis, Tunisie",
    expertise: ["Intelligence Artificielle", "Data Science", "Innovation"],
    bio: "Pionnier de l'IA en Afrique du Nord",
    education: "PhD en IA",
    image: "https://randomuser.me/api/portraits/men/4.jpg"
  },
  {
    id: 5,
    name: "Sarah Mensah",
    title: "RH Senior",
    company: "PanAfrican Talent",
    location: "Accra, Ghana",
    expertise: ["RH", "Développement des talents", "Leadership"],
    bio: "Spécialiste du développement des talents en Afrique",
    education: "Master RH",
    image: "https://randomuser.me/api/portraits/women/5.jpg"
  },
  {
    id: 6,
    name: "Youssef Berrada",
    title: "CTO",
    company: "MoroccoTech",
    location: "Rabat, Maroc",
    expertise: ["Architecture Logicielle", "Cloud", "DevOps"],
    bio: "Expert en transformation digitale au Maghreb",
    education: "Ingénieur Informatique",
    image: "https://randomuser.me/api/portraits/men/6.jpg"
  }
];

const expertiseAreas = [
  "Innovation",
  "Tech Leadership",
  "Entrepreneuriat",
  "Marketing Digital",
  "Intelligence Artificielle",
  "RH",
  "Architecture Logicielle",
  "Finance",
  "Communication",
  "Data Science"
];

const locations = [
  "Maroc",
  "Sénégal",
  "Côte d'Ivoire",
  "Tunisie",
  "Ghana",
  "Nigeria",
  "Kenya",
  "Égypte"
];

function MentorNetwork() {
  const [selectedExpertise, setSelectedExpertise] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center" sx={{ mb: 4 }}>
        Réseau de Mentors Africains
      </Typography>

      {/* Filtres */}
      <Box sx={{ mb: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              select
              fullWidth
              label="Domaine d'expertise"
              value={selectedExpertise}
              onChange={(e) => setSelectedExpertise(e.target.value)}
              variant="outlined"
            >
              <MenuItem value="">Tous les domaines</MenuItem>
              {expertiseAreas.map((area) => (
                <MenuItem key={area} value={area}>
                  {area}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              select
              fullWidth
              label="Pays"
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              variant="outlined"
            >
              <MenuItem value="">Tous les pays</MenuItem>
              {locations.map((location) => (
                <MenuItem key={location} value={location}>
                  {location}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>
      </Box>

      {/* Liste des mentors */}
      <Grid container spacing={3}>
        {mentors.map((mentor) => (
          <Grid item xs={12} md={4} key={mentor.id}>
            <Card className="mentor-card">
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Avatar
                    src={mentor.image}
                    sx={{ width: 80, height: 80, mr: 2 }}
                  />
                  <Box>
                    <Typography variant="h6" component="div">
                      {mentor.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {mentor.title}
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <FaBriefcase style={{ marginRight: '8px', color: '#666' }} />
                  <Typography variant="body2" color="text.secondary">
                    {mentor.company}
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <FaMapMarkerAlt style={{ marginRight: '8px', color: '#666' }} />
                  <Typography variant="body2" color="text.secondary">
                    {mentor.location}
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <FaGraduationCap style={{ marginRight: '8px', color: '#666' }} />
                  <Typography variant="body2" color="text.secondary">
                    {mentor.education}
                  </Typography>
                </Box>

                <Typography variant="body2" paragraph>
                  {mentor.bio}
                </Typography>

                <Box sx={{ mb: 2 }}>
                  {mentor.expertise.map((exp, index) => (
                    <Chip
                      key={index}
                      label={exp}
                      size="small"
                      sx={{ mr: 1, mb: 1 }}
                    />
                  ))}
                </Box>

                <Box sx={{ display: 'flex', gap: 1 }}>
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
                    Contacter
                  </Button>
                  <Button
                    variant="outlined"
                    sx={{ minWidth: 'auto' }}
                    href="#"
                    target="_blank"
                  >
                    <FaLinkedin />
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default MentorNetwork;
