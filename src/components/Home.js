import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  Container,
  Button,
  Avatar,
  Paper
} from '@mui/material';
import { 
  School as SchoolIcon,
  Work as WorkIcon,
  Group as GroupIcon,
  Comment as CommentIcon 
} from '@mui/icons-material';
import { FaArrowUp, FaBuilding, FaGraduationCap } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const testimonials = [
  {
    name: "Marie Dupont",
    role: "Étudiante en informatique",
    comment: "Grâce à cette plateforme, j'ai trouvé un stage parfaitement adapté à mes compétences en développement web.",
    avatar: "MD"
  },
  {
    name: "Thomas Martin",
    role: "Mentor",
    comment: "Une excellente façon de partager mon expérience avec la nouvelle génération de professionnels.",
    avatar: "TM"
  },
  {
    name: "Sophie Laurent",
    role: "Stagiaire en marketing",
    comment: "Le système de matching m'a permis de trouver rapidement une entreprise qui correspondait exactement à mes attentes.",
    avatar: "SL"
  }
];

const features = [
  {
    icon: <SchoolIcon sx={{ fontSize: 40 }} />,
    title: "Formation Personnalisée",
    description: "Accédez à des ressources adaptées à votre parcours et vos objectifs professionnels."
  },
  {
    icon: <WorkIcon sx={{ fontSize: 40 }} />,
    title: "Matching Intelligent",
    description: "Notre algorithme trouve les stages qui correspondent le mieux à vos compétences."
  },
  {
    icon: <GroupIcon sx={{ fontSize: 40 }} />,
    title: "Mentorat Expert",
    description: "Connectez-vous avec des professionnels expérimentés dans votre domaine."
  }
];

const stats = [
  {
    number: 1500,
    label: "Stagiaires Placés",
    description: "en 2023",
    growth: 75,
    gradientStart: "#4facfe",
    gradientEnd: "#00f2fe"
  },
  {
    number: 500,
    label: "Entreprises Partenaires",
    description: "actives",
    growth: 85,
    gradientStart: "#FF6B6B",
    gradientEnd: "#FF0000"
  },
  {
    number: 92,
    label: "Taux de Satisfaction",
    description: "des stagiaires",
    growth: 92,
    gradientStart: "#45B649",
    gradientEnd: "#DCE35B"
  },
  {
    number: 250,
    label: "Offres de Stage",
    description: "ce mois-ci",
    growth: 65,
    gradientStart: "#FF3CAC",
    gradientEnd: "#784BA0"
  }
];

const cities = [
  {
    name: "Casablanca",
    country: "Maroc",
    stats: {
      stages: 450,
      entreprises: 120
    }
  },
  {
    name: "Rabat",
    country: "Maroc",
    stats: {
      stages: 320,
      entreprises: 85
    }
  },
  {
    name: "Tanger",
    country: "Maroc",
    stats: {
      stages: 280,
      entreprises: 65
    }
  },
  {
    name: "Marrakech",
    country: "Maroc",
    stats: {
      stages: 200,
      entreprises: 55
    }
  },
  {
    name: "Dakar",
    country: "Sénégal",
    stats: {
      stages: 180,
      entreprises: 45
    }
  },
  {
    name: "Tunis",
    country: "Tunisie",
    stats: {
      stages: 250,
      entreprises: 70
    }
  }
];

const Home = () => {
  const [animate, setAnimate] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <Box>
      {/* Hero Section */}
      <Paper 
        sx={{ 
          position: 'relative',
          backgroundColor: 'primary.main',
          color: 'white',
          mb: 4,
          py: 6
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography variant="h3" component="h1" gutterBottom>
                Trouvez le Stage Parfait
              </Typography>
              <Typography variant="h5" paragraph>
                Votre carrière commence ici. Découvrez des opportunités de stage personnalisées 
                et connectez-vous avec des mentors expérimentés.
              </Typography>
              <Button 
                variant="contained" 
                color="secondary" 
                size="large"
                sx={{ mt: 2 }}
                onClick={() => navigate('/login')}
              >
                Commencer Maintenant
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Paper>

      {/* Statistics Section */}
      <Box sx={{ bgcolor: 'grey.100', py: 8, mb: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12}>
              <Typography variant="h4" component="h2" align="center" gutterBottom>
                Notre Impact en Chiffres
              </Typography>
              <Grid container spacing={4} sx={{ mt: 2 }}>
                {stats.map((stat, index) => (
                  <Grid item xs={12} md={3} key={index}>
                    <Card sx={{ height: '100%' }}>
                      <CardContent>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                          <Box sx={{ width: '100%', height: 40, backgroundColor: 'primary.main', borderRadius: 1, mr: 2 }} />
                          <Box>
                            <Typography variant="h6" component="div">
                              {stat.number}{stat.label.includes('Taux') ? '%' : ''}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {stat.label}
                            </Typography>
                          </Box>
                        </Box>
                        <Typography variant="body1" color="text.secondary">
                          {stat.description}
                        </Typography>
                        <Box sx={{ width: '100%', height: 10, backgroundColor: 'primary.main', borderRadius: 1, mt: 2 }} />
                        <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                          <FaArrowUp style={{ color: '#28a745' }} />
                          <Typography variant="body1" color="text.secondary" sx={{ ml: 1 }}>
                            +{stat.growth}% de croissance
                          </Typography>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Cities Section */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Typography variant="h4" component="h2" align="center" gutterBottom>
          Nos Villes Principales
        </Typography>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {cities.map((city, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Typography variant="h6" component="div">
                      {city.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ ml: 2 }}>
                      {city.country}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box>
                      <FaGraduationCap size={24} color="#4facfe" />
                      <Typography variant="body1" color="text.secondary" sx={{ ml: 1 }}>
                        {city.stats.stages} Stages
                      </Typography>
                    </Box>
                    <Box>
                      <FaBuilding size={24} color="#FF6B6B" />
                      <Typography variant="body1" color="text.secondary" sx={{ ml: 1 }}>
                        {city.stats.entreprises} Entreprises
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Typography variant="h4" component="h2" align="center" gutterBottom>
          Pourquoi Nous Choisir ?
        </Typography>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', p: 2 }}>
                <Box sx={{ color: 'primary.main', mb: 2 }}>
                  {feature.icon}
                </Box>
                <CardContent>
                  <Typography variant="h5" component="h3" gutterBottom align="center">
                    {feature.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" align="center">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Testimonials Section */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Typography variant="h4" component="h2" align="center" gutterBottom>
          Ce que disent nos utilisateurs
        </Typography>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Avatar sx={{ bgcolor: 'primary.main', mr: 2 }}>
                      {testimonial.avatar}
                    </Avatar>
                    <Box>
                      <Typography variant="h6" component="div">
                        {testimonial.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {testimonial.role}
                      </Typography>
                    </Box>
                  </Box>
                  <Typography variant="body1" color="text.secondary">
                    "{testimonial.comment}"
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
