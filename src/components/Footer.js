import React from 'react';
import { Container, Typography, Box, IconButton, Link, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import GoogleIcon from '@mui/icons-material/Google';

const useStyles = makeStyles((theme) => ({
  footer: {
    background: 'linear-gradient(to right, #222, #000)', // Darker gradient
    color: '#eee', // Off-white text for better contrast
    padding: '4rem 0',
    marginTop: 'auto',
    boxShadow: '0px -5px 25px rgba(255, 255, 0, 0.3)', // Yellow-tinted shadow
  },
  footerContent: {
    display: 'flex',
    justifyContent: 'space-around', // Distribute content evenly
    alignItems: 'flex-start', // Align items to the top
    textAlign: 'center',
    flexWrap: 'wrap',
    gap: '2rem',
  },
  iconLinks: {
    display: 'flex',
    flexDirection: 'column', // Stack icons vertically
    alignItems: 'center',
    gap: '1rem',
  },
  iconButton: {
    color: '#eee',
    backgroundColor: 'rgba(255, 255, 0, 0.2)', // Yellow background with transparency
    padding: theme.spacing(2),
    borderRadius: '50%', // Circular buttons
    transition: 'transform 0.3s ease, background-color 0.3s ease',
    '&:hover': {
      backgroundColor: '#ff0', // Solid yellow on hover
      transform: 'scale(1.1)',
    },
  },
  footerText: {
    fontSize: '1.1rem',
    fontWeight: 600,
    marginBottom: theme.spacing(2),
  },
  footerDivider: {
    height: '2px',
    backgroundColor: '#ffc107', // Gold divider
    margin: theme.spacing(3, 0),
    width: '100%',
  },
  footerIconText: {
    fontSize: '0.9rem',
    color: '#ccc',
    marginTop: theme.spacing(1),
  },
  contactText: {
    fontSize: '2.7rem',
    color: '#fff',
    fontWeight: 700,
    marginBottom: theme.spacing(3),
  },
  copyright: {
    fontSize: '0.9rem',
    color: '#bbb',
    marginTop: theme.spacing(4),
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <Box component="footer" className={classes.footer}>
      <Container>
        <Grid container className={classes.footerContent}>
          {/* Contact Info */}
          <Grid item xs={12} md={4}>
            <Typography variant="h4" className={classes.contactText}>
              Contact Us
            </Typography>
            <Typography variant="body2" className={classes.footerText}>
              info@scottselectric.com
            </Typography>
            <Typography variant="body2" className={classes.footerText}>
              (123) 456-7890
            </Typography>
          </Grid>

          {/* Icon Links */}
          <Grid item xs={12} md={4}>
            <Box className={classes.iconLinks}>
              <IconButton
                component={Link}
                href="mailto:info@scottselectric.com"
                className={classes.iconButton}
                aria-label="Email"
              >
                <EmailIcon fontSize="large" sx={{color: 'white'}} />
              </IconButton>
              <Typography variant="body2" className={classes.footerIconText}>
                Email Us
              </Typography>

              <IconButton
                component={Link}
                href="tel:1234567890"
                className={classes.iconButton}
                aria-label="Phone"
              >
                <PhoneIcon fontSize="large" sx={{color: 'white'}} />
              </IconButton>
              <Typography variant="body2" className={classes.footerIconText}>
                Call Us
              </Typography>

              <IconButton
                component={Link}
                href="https://google.com"
                target="_blank"
                rel="noopener"
                className={classes.iconButton}
                aria-label="Google"
              >
                <GoogleIcon fontSize="large" sx={{color: 'white'}} />
              </IconButton>
              <Typography variant="body2" className={classes.footerIconText}>
                Find Us on Google
              </Typography>
            </Box>
          </Grid>

          {/* Copyright */}
          <Grid item xs={12} md={4}>
            <Typography variant="body2" className={classes.copyright}>
              &copy; 2024 Scott's Electric. All rights reserved.
            </Typography>
          </Grid>
        </Grid>
        <Box className={classes.footerDivider}></Box> {/* Divider below all content */}
      </Container>
    </Box>
  );
};

export default Footer;