import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Divider,
} from '@mui/material';
import {
  Facebook,
  LinkedIn,
  GitHub,
  Twitter,
  Instagram,
  YouTube,
  Email,
} from '@mui/icons-material';

const Footer = () => {
  const socialLinks = [
    { name: 'Facebook', icon: <Facebook />, url: 'https://facebook.com' },
    { name: 'LinkedIn', icon: <LinkedIn />, url: 'https://linkedin.com' },
    { name: 'GitHub', icon: <GitHub />, url: 'https://github.com' },
    { name: 'Twitter', icon: <Twitter />, url: 'https://twitter.com' },
    { name: 'Instagram', icon: <Instagram />, url: 'https://instagram.com' },
    { name: 'YouTube', icon: <YouTube />, url: 'https://youtube.com' },
  ];

  const quickLinks = [
    { name: 'À propos', url: '/about' },
    { name: 'Stages', url: '/matching' },
    { name: 'Mentorat', url: '/mentors' },
    { name: 'Ressources', url: '/resources' },
    { name: 'Blog', url: '/blog' },
    { name: 'Contact', url: '/contact' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'background.paper',
        mt: 'auto',
        py: 6,
        className: 'glass-effect'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Logo et Description */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" className="gradient-text" gutterBottom>
              StageMatch
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Votre plateforme de référence pour trouver le stage parfait 
              et développer votre carrière professionnelle.
            </Typography>
            <Box className="social-links-container">
              {socialLinks.map((social) => (
                <IconButton
                  key={social.name}
                  component="a"
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon hover-scale"
                  aria-label={social.name}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </Grid>

          {/* Liens Rapides */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Liens Rapides
            </Typography>
            <Grid container>
              {quickLinks.map((link) => (
                <Grid item xs={6} key={link.name}>
                  <Link
                    href={link.url}
                    color="inherit"
                    className="footer-link hover-scale"
                    sx={{ display: 'block', mb: 1 }}
                  >
                    {link.name}
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* Contact */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Contactez-nous
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Email sx={{ mr: 1 }} />
              <Link
                href="mailto:contact@stagematch.com"
                color="inherit"
                className="footer-link"
              >
                contact@stagematch.com
              </Link>
            </Box>
            <Typography variant="body2" color="text.secondary">
              Abonnez-vous à notre newsletter pour recevoir les dernières opportunités
              de stages et conseils de carrière.
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />

        {/* Copyright */}
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} StageMatch. Tous droits réservés.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
