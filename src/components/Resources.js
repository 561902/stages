import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  TextField,
  Tabs,
  Tab,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
} from '@mui/material';
import {
  Description,
  VideoLibrary,
  Assignment,
  QuestionAnswer,
  PlayArrow,
  Article,
  Download,
} from '@mui/icons-material';

const resources = {
  templates: [
    {
      id: 1,
      title: "CV Template - Tech",
      type: "PDF",
      downloads: 1200,
      description: "Template de CV optimisé pour les métiers de la tech"
    },
    {
      id: 2,
      title: "Lettre de Motivation - Marketing",
      type: "DOCX",
      downloads: 850,
      description: "Modèle de lettre de motivation pour le marketing"
    },
    {
      id: 3,
      title: "Portfolio - Design",
      type: "PDF",
      downloads: 650,
      description: "Template de portfolio pour les designers"
    }
  ],
  guides: [
    {
      id: 1,
      title: "Guide de l'Entretien Tech",
      duration: "15 min",
      views: 2500,
      description: "Préparez-vous aux questions techniques"
    },
    {
      id: 2,
      title: "Réussir son Stage",
      duration: "20 min",
      views: 1800,
      description: "Conseils pour maximiser votre expérience de stage"
    },
    {
      id: 3,
      title: "Networking Efficace",
      duration: "12 min",
      views: 2100,
      description: "Développez votre réseau professionnel"
    }
  ],
  faq: [
    {
      question: "Comment choisir le bon stage ?",
      answer: "Considérez vos objectifs de carrière, les compétences que vous souhaitez développer et la culture de l'entreprise."
    },
    {
      question: "Quand commencer à chercher un stage ?",
      answer: "Idéalement, commencez 4-6 mois avant la date souhaitée de début de stage."
    },
    {
      question: "Comment négocier une offre de stage ?",
      answer: "Renseignez-vous sur les standards du marché et mettez en avant vos compétences uniques."
    }
  ]
};

const Resources = () => {
  const [tabValue, setTabValue] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Header Section */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Ressources pour Stagiaires
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
          Tout ce dont vous avez besoin pour réussir votre recherche et votre expérience de stage
        </Typography>
      </Box>

      {/* Search Bar */}
      <TextField
        fullWidth
        label="Rechercher des ressources"
        variant="outlined"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        sx={{ mb: 4 }}
      />

      {/* Tabs Section */}
      <Box sx={{ width: '100%', mb: 4 }}>
        <Tabs value={tabValue} onChange={handleTabChange} centered>
          <Tab icon={<Description />} label="Templates" />
          <Tab icon={<VideoLibrary />} label="Guides" />
          <Tab icon={<QuestionAnswer />} label="FAQ" />
        </Tabs>
      </Box>

      {/* Templates Tab */}
      {tabValue === 0 && (
        <Grid container spacing={3}>
          {resources.templates.map((template) => (
            <Grid item xs={12} md={4} key={template.id}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {template.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {template.description}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Typography variant="caption" color="text.secondary">
                      {template.downloads} téléchargements
                    </Typography>
                    <Button
                      variant="contained"
                      startIcon={<Download />}
                      size="small"
                    >
                      Télécharger
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}

      {/* Guides Tab */}
      {tabValue === 1 && (
        <Grid container spacing={3}>
          {resources.guides.map((guide) => (
            <Grid item xs={12} md={4} key={guide.id}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {guide.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {guide.description}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Typography variant="caption" color="text.secondary">
                      {guide.duration} • {guide.views} vues
                    </Typography>
                    <Button
                      variant="contained"
                      startIcon={<PlayArrow />}
                      size="small"
                    >
                      Regarder
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}

      {/* FAQ Tab */}
      {tabValue === 2 && (
        <Paper elevation={1} sx={{ p: 3 }}>
          <List>
            {resources.faq.map((item, index) => (
              <ListItem key={index} sx={{ flexDirection: 'column', alignItems: 'flex-start', py: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <ListItemIcon sx={{ minWidth: 40 }}>
                    <QuestionAnswer color="primary" />
                  </ListItemIcon>
                  <Typography variant="h6">
                    {item.question}
                  </Typography>
                </Box>
                <Typography variant="body1" sx={{ pl: 5 }}>
                  {item.answer}
                </Typography>
              </ListItem>
            ))}
          </List>
        </Paper>
      )}
    </Container>
  );
};

export default Resources;
