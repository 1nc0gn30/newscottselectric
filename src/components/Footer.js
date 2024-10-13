import React from 'react';
import { Container, Typography, Box, IconButton, Link } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import GoogleIcon from '@mui/icons-material/Google';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        background: 'linear-gradient(135deg, #1c1c1e, #111)',
        color: '#e0e0e0',
        padding: '3rem 0',
        marginTop: 'auto',
        boxShadow: '0px -3px 15px rgba(0, 0, 0, 0.5)',
      }}
    >
      <Container sx={{ display: 'flex', flexDirection: 'column'}}>
        {/* Main Flex Container for 3 Columns */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: '2rem',
            flexWrap: 'wrap',
          }}
        >
          {/* Column 1: Logo and Contact Info */}
          <Box sx={{ flex: 1 }}>
            <img
              src="/assets/images/scottselectriclogo2.png" // Update this path to your logo
              alt="Scott's Electric Logo"
              style={{ width: '150px', marginBottom: '1rem', borderRadius: '50%' }}
            />
            <Typography variant="h4" sx={{ fontSize: '2rem', fontWeight: 700, color: '#fff' }}>
              Contact Us
            </Typography>
            <Typography variant="body2" sx={{ color: '#a8a8a8', fontSize: '1rem', fontWeight: 500, mb: 1 }}>
              info@scottselectric.com
            </Typography>
            <Typography variant="body2" sx={{ color: '#a8a8a8', fontSize: '1rem', fontWeight: 500 }}>
              (123) 456-7890
            </Typography>
          </Box>

          {/* Column 2: Social Icons */}
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 3,
            }}
          >
            <IconButton
              component={Link}
              href="mailto:info@scottselectric.com"
              sx={{
                color: '#e0e0e0',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                padding: '1.5rem',
                borderRadius: '50%',
                transition: 'transform 0.3s ease, background-color 0.3s ease',
                '&:hover': {
                  backgroundColor: '#B3AD1F',
                  transform: 'scale(0.92)',
                },
                mb: 1.5,
              }}
              aria-label="Email"
            >
              <EmailIcon fontSize="large" />
            </IconButton>
            <Typography variant="body2" sx={{ color: '#999', fontSize: '0.85rem' }}>
              Email Us
            </Typography>

            <IconButton
              component={Link}
              href="tel:1234567890"
              sx={{
                color: '#e0e0e0',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                padding: '1.5rem',
                borderRadius: '50%',
                transition: 'transform 0.3s ease, background-color 0.3s ease',
                '&:hover': {
                  backgroundColor: '#B3AD1F',
                  transform: 'scale(0.92)',
                },
                mb: 1.5,
              }}
              aria-label="Phone"
            >
              <PhoneIcon fontSize="large" />
            </IconButton>
            <Typography variant="body2" sx={{ color: '#999', fontSize: '0.85rem' }}>
              Call Us
            </Typography>

            <IconButton
              component={Link}
              href="https://google.com"
              target="_blank"
              rel="noopener"
              sx={{
                color: '#e0e0e0',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                padding: '1.5rem',
                borderRadius: '50%',
                transition: 'transform 0.3s ease, background-color 0.3s ease',
                '&:hover': {
                  backgroundColor: '#B3AD1F',
                  transform: 'scale(0.92)',
                },
                mb: 1.5,
              }}
              aria-label="Google"
            >
              <GoogleIcon fontSize="large" />
            </IconButton>
            <Typography variant="body2" sx={{ color: '#999', fontSize: '0.85rem' }}>
              Find Us on Google
            </Typography>

            {/* Divider under icons */}
            <Box
              sx={{
                height: '1px',
                backgroundColor: '#444',
                margin: '2rem 0',
                width: '100%',
              }}
            />
          </Box>

          {/* Column 3: All Rights Reserved */}
          <Box sx={{ flex: 1 }}>
            <Typography variant="body2" sx={{ fontSize: '0.9rem', color: '#777', mt: 3 }}>
              &copy; 2024 Scott's Electric. All rights reserved.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
