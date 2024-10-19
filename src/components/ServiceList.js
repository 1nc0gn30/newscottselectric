import React, { useRef } from 'react';
import { Container, Typography, Paper, Box } from '@mui/material';
import Grid from '@mui/material/Grid2'; // Correct Grid import
import { useTheme } from '@mui/material/styles';
import { motion, useInView } from 'framer-motion'; // Framer Motion for animations and intersection observer

const services = [
  {
    title: "Appliance Installation",
    description: "We install appliances such as refrigerators, ovens, and washing machines with care, ensuring full compliance with safety standards.",
    caseScenario: "Installed a smart refrigerator for a family in Virginia Beach, integrating it with their home automation system for enhanced efficiency.",
    image: "/assets/images/ApplianceInstallation.jpg"
  },
  {
    title: "Electrical Panel Installation",
    description: "Upgrade your home's electrical capacity with a new panel, suitable for modern energy demands and smart home systems.",
    caseScenario: "Upgraded an outdated electrical panel for a growing family, ensuring they could power their home addition safely.",
    image: "/assets/images/ElectricalPanelInstallation.jpg"
  },
  {
    title: "EV Charging Station Installation",
    description: "Convenient and efficient installation of electric vehicle charging stations at home or work.",
    caseScenario: "Installed a Level 2 EV charger for a Tesla Model 3 owner, reducing their charging time by 50%.",
    image: "/assets/images/EvChargingStationInstallation.jpg"
  },
  {
    title: "Heater Installation",
    description: "Ensure your home is warm and energy-efficient with professional heater installations.",
    caseScenario: "Installed a high-efficiency electric heater in a newly renovated home, drastically cutting down winter energy bills.",
    image: "/assets/images/HeaterInstallation.jpeg"
  },
  {
    title: "Lighting Installation",
    description: "We provide indoor and outdoor lighting solutions to brighten up your space.",
    caseScenario: "Installed ambient lighting in a home theater for a fully immersive viewing experience.",
    image: "/assets/images/LightingInstallation.jpeg"
  },
  {
    title: "Outlet Installation",
    description: "Add new outlets or upgrade existing ones to accommodate modern devices safely.",
    caseScenario: "Upgraded all outlets to include USB ports in a tech-heavy household.",
    image: "/assets/images/OutletInstallation.jpeg"
  },
  {
    title: "Smart Home Automation",
    description: "Control your home’s lighting, climate, and security with advanced smart technologies.",
    caseScenario: "Integrated voice-controlled smart lighting and thermostat into a newly built home.",
    image: "/assets/images/SmartHomeAutomationInstallation.jpeg"
  },
  {
    title: "Energy Audits",
    description: "Reduce your energy costs by assessing your energy consumption patterns.",
    caseScenario: "Performed an energy audit for a commercial office, cutting their annual energy expenses by 25%.",
    image: "/assets/images/EnergyAuditService.jpeg"
  },
  {
    title: "Backup Power Solutions",
    description: "Never lose power during outages with our reliable backup generator solutions.",
    caseScenario: "Installed a whole-house backup generator system for a family in a storm-prone area.",
    image: "/assets/images/BackupPowerSolutionsService.jpeg"
  },
  {
    title: "Pool and Spa Electrical Wiring",
    description: "Ensure your pool and spa have safe and reliable electrical systems.",
    caseScenario: "Installed specialized wiring for a newly built outdoor pool and spa area with automatic heating and filtration controls.",
    image: "/assets/images/PoolSpaWiringService.jpeg"
  },
  {
    title: "Electrical Safety Inspections",
    description: "Keep your home safe by scheduling regular electrical safety inspections.",
    caseScenario: "Conducted an inspection in an older home, identifying and resolving several fire hazards.",
    image: "/assets/images/ElectricalInspectionService.jpeg"
  },
  {
    title: "Surge Protection Systems",
    description: "Protect your home from damaging power surges with advanced protection systems.",
    caseScenario: "Installed whole-house surge protection for a homeowner worried about frequent lightning storms.",
    image: "/assets/images/SurgeProtectionService.jpeg"
  },
  {
    title: "CCTV and Video Surveillance",
    description: "Install state-of-the-art video surveillance to keep your home or business safe.",
    caseScenario: "Set up a high-definition CCTV system for a small business, covering key entry points and parking areas.",
    image: "/assets/images/SecurityCameraService.jpeg"
  },
  {
    title: "Access Control Systems",
    description: "Manage who enters your building with customizable access control systems.",
    caseScenario: "Installed a biometric access control system for an office building, improving security.",
    image: "/assets/images/AccessControlService.jpeg"
  },
  {
    title: "Home Theater Installation",
    description: "Transform any room into a cinema with custom home theater installations.",
    caseScenario: "Installed a state-of-the-art home theater system with surround sound and a 4K projector.",
    image: "/assets/images/HomeTheatreInstallation.jpeg"
  },
  {
    title: "Smart Thermostat Installation",
    description: "Install and configure smart thermostats to save on energy costs.",
    caseScenario: "Replaced old thermostats with smart ones that sync with a mobile app for remote control.",
    image: "/assets/images/SmartThermostatInstallation.jpeg"
  },
  {
    title: "Portable Generator Setup",
    description: "Set up portable generators for emergency power solutions.",
    caseScenario: "Set up a portable generator system for a rural homeowner, ensuring they always have power during outages.",
    image: "/assets/images/PortableGeneratorService.jpeg"
  },
  {
    title: "Data Cabling and Networking",
    description: "Structured cabling solutions for homes and businesses to enhance network reliability.",
    caseScenario: "Installed advanced network cabling in a new office, ensuring fast and reliable internet connectivity throughout the building.",
    image: "/assets/images/DataCableService.jpeg"
  },
];

// Animation Variants
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  hover: { scale: 1.05, transition: { duration: 0.3 } },
};

const textVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.6 } },
};

const ServiceList = () => {
  const theme = useTheme();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { triggerOnce: false, margin: '-100px' });

  return (
    <Container
      ref={sectionRef}
      component={motion.div}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
      }}
      sx={{
        paddingY: theme.spacing(8),
        backgroundColor: theme.palette.background.default, // Set container background
      }}
    >
      <Typography
        id="services"
        variant="h3"
        align="center"
        gutterBottom
        sx={{
          marginBottom: theme.spacing(4),
          color: '#1c1c1e', // Gold color for the heading
          fontSize: '4rem',
          border: '1px solid #FFD700',
          background: '#FFD700',
          boxShadow: '10px 0px 10px #000',
          borderTopLeftRadius: 10,
          borderBottomRightRadius: 10,
        }}
      >
        Some Of Our Services
      </Typography>

      <Grid container spacing={4} sx={{ justifyContent: 'center' }}>
        {services.map((service, index) => (
          <Grid
            item
            size={{ xs: 12 }}
            key={index}
            sx={{ display: 'flex', justifyContent: 'center' }}
          >
            <motion.div
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              whileHover="hover"
            >
              <Paper
                elevation={10}
                sx={{
                  width: { md: '550px', xs: '90vw' },
                  padding: theme.spacing(4),
                  textAlign: 'center',
                  background: 'linear-gradient(145deg, #1e1e1e, #2a2a2a)', // Gradient background
                  borderRadius: theme.shape.borderRadius * 2,
                  color: '#eee',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.6)',
                  '&:hover': {
                    boxShadow: '0 16px 40px rgba(0, 0, 0, 0.8)',
                  },
                }}
              >
                <Box
                  component="img"
                  alt={service.title}
                  src={service.image}
                  sx={{
                    width: '100%',
                    height: 'auto',
                    backgroundColor: theme.palette.grey[800], // Darker grey background
                    borderRadius: theme.shape.borderRadius,
                    marginBottom: theme.spacing(2),
                  }}
                />
                <motion.div variants={textVariants} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 'bold',
                      color: '#FFD700', // Gold color for the title
                      marginBottom: theme.spacing(1),
                    }}
                  >
                    {service.title}
                  </Typography>
                </motion.div>
                <motion.div variants={textVariants} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>
                  <Typography
                    sx={{
                      fontSize: '1rem',
                      marginBottom: theme.spacing(2),
                      fontWeight: 600,
                    }}
                  >
                    {service.description}
                  </Typography>
                </motion.div>
                <motion.div variants={textVariants} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>
                  <Typography
                    sx={{
                      fontSize: '0.9rem',
                      fontStyle: 'italic',
                      color: '#ccc',
                    }}
                  >
                    {service.caseScenario}
                  </Typography>
                </motion.div>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ServiceList;
