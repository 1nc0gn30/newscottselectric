import React from 'react';
import { Container, Typography, Box, IconButton, Link, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import GoogleIcon from '@mui/icons-material/Google'; // Replacing MapIcon with Google Icon

const useStyles = makeStyles((theme) => ({
  footer: {
    background: 'linear-gradient(45deg, #333, #111)', // Modern gradient background
    color: '#fff',
    padding: '3rem 0',
    marginTop: 'auto',
    boxShadow: '0px -4px 20px rgba(0,0,0,0.7)', // Subtle top shadow for depth
  },
  footerContent: {
    display: 'flex',
    justifyContent: 'center', // Ensure content is centered
    alignItems: 'center',
    textAlign: 'center',
    flexWrap: 'wrap',
    gap: '1.5rem',
  },
  iconLinks: {
    display: 'flex',
    justifyContent: 'center', // Center the icons
    alignItems: 'center',
    gap: '2.5rem',
    marginTop: theme.spacing(2),
  },
  iconButton: {
    color: '#fff',
    transition: 'transform 0.3s ease-in-out, color 0.3s ease-in-out',
    '&:hover': {
      color: '#00bfff', // Electric blue hover effect
      transform: 'scale(1.2)', // Slight scale effect on hover for interactivity
    },
  },
  footerText: {
    fontSize: '1rem',
    fontWeight: 500,
  },
  footerDivider: {
    height: '2px',
    backgroundColor: '#555',
    margin: theme.spacing(2, 0),
  },
  footerIconText: {
    fontSize: '0.8rem',
    color: '#aaa',
  },
  contactText: {
    fontSize: '1.1rem',
    color: '#fff',
    fontWeight: 600,
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <Box component="footer" className={classes.footer}>
      <Container>
        <Grid container className={classes.footerContent}>
          {/* Footer Text and Contact Info */}
          <Grid item xs={12}>
            <Typography variant="body2" className={classes.footerText}>
              &copy; 2024 Scott's Electric. All rights reserved.
            </Typography>
            <Box className={classes.footerDivider}></Box>
            <Typography variant="body2" className={classes.contactText}>
              info@scottselectric.com | (123) 456-7890
            </Typography>
          </Grid>

          {/* Icon Links */}
          <Grid item xs={12}>
            <Box className={classes.iconLinks}>
              <Box textAlign="center">
                <IconButton
                  component={Link}
                  href="mailto:info@scottselectric.com"
                  className={classes.iconButton}
                  aria-label="Email"
                >
                  <EmailIcon fontSize="large" />
                </IconButton>
                <Typography variant="body2" className={classes.footerIconText}>
                  Email Us
                </Typography>
              </Box>
              <Box textAlign="center">
                <IconButton
                  component={Link}
                  href="tel:1234567890"
                  className={classes.iconButton}
                  aria-label="Phone"
                >
                  <PhoneIcon fontSize="large" />
                </IconButton>
                <Typography variant="body2" className={classes.footerIconText}>
                  Call Us
                </Typography>
              </Box>
              <Box textAlign="center">
                <IconButton
                  component={Link}
                  href="https://google.com"
                  target="_blank"
                  rel="noopener"
                  className={classes.iconButton}
                  aria-label="Google"
                >
                  <GoogleIcon fontSize="large" />
                </IconButton>
                <Typography variant="body2" className={classes.footerIconText}>
                  Find Us on Google
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
