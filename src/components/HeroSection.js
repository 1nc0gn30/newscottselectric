import React from 'react';
import { Container, Typography, Button, Box, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Spline from '@splinetool/react-spline';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import SolarPowerIcon from '@mui/icons-material/SolarPower';
import ConstructionIcon from '@mui/icons-material/Construction';

const HeroSection = () => {
  const theme = useTheme();

  return (
    <>
      <Box
        sx={{
          position: 'relative',
          minHeight: '90vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: theme.palette.primary.contrastText,
          textAlign: 'center',
          padding: '20px 20px',
          overflow: 'hidden',
          background: 'rgba(0, 0, 0, 1)',
          zIndex: '',
        }}
      >
        {/* Spline scene background */}
        <Spline
          scene="https://prod.spline.design/qmqQ5C2657rMWzfL/scene.splinecode"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100vh',
            zIndex: 1,
          }}
        />

      
       
      </Box>

      <Container
        sx={{
          zIndex: 1,
          backgroundColor: 'rgba(0, 0, 0, 0.9)', // Subtle transparency effect
          padding: theme.spacing(6),
          borderRadius: theme.shape.borderRadius,
          maxWidth: '800px',
          marginTop: 2,
          boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.3)',
          backdropFilter: 'blur(5px)', // Blurred background for modern feel
          position: 'relative',
        }}
      >
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          <Grid item xs={12}>
            <Typography
              variant="h3"
              component="h2"
              sx={{
                fontWeight: 'bold',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                textAlign: "center",
                color: theme.palette.primary.contrastText,
                marginBottom: theme.spacing(2),
              }}
              id="about"
            >
              Hampton Roads' Most Trusted Electricians
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="body1"
              sx={{
                fontSize: '1.25rem',
                marginBottom: theme.spacing(4),
                color: theme.palette.text.secondary,
                lineHeight: 1.7, // Improve readability
              }}
            >
              With over a decade of experience, Scott's Electric is your go-to provider for safe, reliable, and efficient electrical services. From residential and commercial installations to solar panel setup, EV charger installations, and emergency repairs, we handle it all. Our team of certified electricians is committed to delivering the highest level of service, ensuring your safety and satisfaction.
            </Typography>
          </Grid>

          <Grid item xs={12} sm={4} display="flex" justifyContent="center">
            <Box textAlign="center">
              <ElectricBoltIcon sx={{ fontSize: 40, color: theme.palette.secondary.main }} />
              <Typography variant="h6" color={theme.palette.primary.contrastText}>
                Electrical Installations
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={4} display="flex" justifyContent="center">
            <Box textAlign="center">
              <SolarPowerIcon sx={{ fontSize: 40, color: theme.palette.secondary.main }} />
              <Typography variant="h6" color={theme.palette.primary.contrastText}>
                Solar Panel Setup
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={4} display="flex" justifyContent="center">
            <Box textAlign="center">
              <ConstructionIcon sx={{ fontSize: 40, color: theme.palette.secondary.main }} />
              <Typography variant="h6" color={theme.palette.primary.contrastText}>
                Emergency Repairs
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Typography
              variant="body1"
              sx={{
                fontSize: '1.25rem',
                marginBottom: theme.spacing(4),
                color: theme.palette.text.secondary,
                lineHeight: 1.7,
              }}
            >
              Whether you're upgrading your home’s electrical system, installing energy-saving solutions, or in need of urgent repair services, we’ve got you covered. Our services are tailored to meet your specific needs and budget. Trust us for expert, fast, and professional services.
            </Typography>
          </Grid>

          <Grid item xs={12} display="flex" justifyContent="center" flexDirection="column" alignItems="center">
            <Button
              variant="contained"
              size="large"
              sx={{
                backgroundColor: theme.palette.secondary.main,
                color: theme.palette.secondary.contrastText,
                padding: '12px 36px',
                textTransform: 'none',
                borderRadius: '50px',
                transition: 'transform 0.2s ease-in-out',
                '&:hover': {
                  backgroundColor: theme.palette.secondary.dark,
                  transform: 'scale(1.05)',
                },
                mb: 2,
              }}
            >
              Request a Quote Today
            </Button>
            <Button
              variant="outlined"
              size="large"
              sx={{
                borderColor: theme.palette.primary.contrastText,
                color: theme.palette.primary.contrastText,
                padding: '12px 36px',
                textTransform: 'none',
                borderRadius: '50px',
                transition: 'transform 0.2s ease-in-out',
                '&:hover': {
                  borderColor: theme.palette.secondary.main,
                  color: theme.palette.secondary.main,
                  transform: 'scale(1.05)',
                },
              }}
            >
              Request Service Today
            </Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default HeroSection;
