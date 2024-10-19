// src/components/HeroSection.js
import React from 'react';
import { Box, Typography, Button, Chip } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import VerifiedIcon from '@mui/icons-material/Verified';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import BusinessIcon from '@mui/icons-material/Business';
import ConstructionIcon from '@mui/icons-material/Construction';
import UpdateIcon from '@mui/icons-material/Update';
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        paddingTop: '120px',
        position: 'relative',
        minHeight: '90vh',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1,
        }}
      >
        <source src="/assets/videos/DesktopHeroVideo.mp4" media="(min-width: 768px)" type="video/mp4" />
        <source src="/assets/videos/MobileHeroVideo.mp4" media="(max-width: 767px)" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <Box
        sx={{
          zIndex: 1,
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Optional overlay to enhance text contrast
          padding: theme.spacing(4),
          textAlign: 'center',
          borderRadius: '16px',
        }}
      >
        {/* Title with Type Animation */}
        <Typography
          variant="h2"
          sx={{
            color: '#FFD700', // Gold color for a premium feel
            fontWeight: 'bold',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            marginBottom: theme.spacing(2),
          }}
        >
          <TypeAnimation
            sequence={[
              'Welcome to', // Types the text
              1000, // Waits 2s
              'Scott\'s Electric', // Replaces text
              2000, // Waits 2s
              'Hampton Roads', // Replaces text again
              1000,
              'Virginia (757)', // Replaces text again
              2000,
              'Top Tier', // Replaces text again
              2000,
              'Electrical  Services', // Replaces text again
              2000,
            ]}
            speed={50} // Types at 50ms per character
            wrapper="span"
            repeat={Infinity}
          />
        </Typography>

        {/* Subtitle */}
        <Typography
          variant="body1"
          sx={{
            color: theme.palette.text.secondary,
            maxWidth: '600px',
            margin: '0 auto',
            marginBottom: theme.spacing(4),
            fontSize: '1.2rem',
            lineHeight: 1.6,
          }}
        >
          Your trusted provider for <strong>safe</strong>, <strong>reliable</strong>, and <strong>efficient</strong> electrical services in Hampton Roads. Let us power your home and business with expertise, dedication, and a commitment to excellence.
        </Typography>

        {/* Design Chips */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: theme.spacing(2),
            marginBottom: theme.spacing(4),
            flexWrap: 'wrap',
          }}
        >
          <Chip
            icon={<ElectricBoltIcon />}
            label="Expert Electricians"
            color="secondary"
            sx={{ fontWeight: 'bold', padding: theme.spacing(1) }}
          />
          <Chip
            icon={<VerifiedIcon />}
            label="Trusted & Certified"
            color="primary"
            sx={{ fontWeight: 'bold', padding: theme.spacing(1) }}
          />
          <Chip
            icon={<HomeRepairServiceIcon />}
            label="Residential Services"
            color="success"
            sx={{ fontWeight: 'bold', padding: theme.spacing(1) }}
          />
          <Chip
            icon={<BusinessIcon />}
            label="Commercial Services"
            color="white"
            sx={{ fontWeight: 'bold', padding: theme.spacing(1), backgroundColor: 'white' }}
          />
          <Chip
            icon={<ConstructionIcon />}
            label="New Construction"
            color="warning"
            sx={{ fontWeight: 'bold', padding: theme.spacing(1) }}
          />
          <Chip
            icon={<UpdateIcon />}
            label="Old Construction"
            color="error"
            sx={{ fontWeight: 'bold', padding: theme.spacing(1) }}
          />
        </Box>

        {/* Buttons */}
        <Box display="flex" gap={2} justifyContent="center">
          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: theme.palette.secondary.main,
              color: theme.palette.secondary.contrastText,
              padding: '10px 30px',
              borderRadius: '50px',
              textTransform: 'none',
              '&:hover': {
                backgroundColor: theme.palette.secondary.dark,
              },
            }}
          >
            Request a Quote
          </Button>

          <Button
            variant="outlined"
            size="large"
            sx={{
              borderColor: theme.palette.primary.contrastText,
              color: theme.palette.primary.contrastText,
              padding: '10px 30px',
              borderRadius: '50px',
              textTransform: 'none',
              '&:hover': {
                borderColor: theme.palette.secondary.main,
                color: theme.palette.secondary.main,
              },
            }}
          >
            Request Service
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
