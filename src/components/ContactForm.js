// src/components/ContactForm.js
import React, { useState } from 'react';
import {
  Container,
  TextField,
  Typography,
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Checkbox,
  ListItemText,
  Paper,
  Box,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

const services = [
  "Appliance Installation",
  "Electrical Panel Installation",
  "EV Charging Station Installation",
  "Heater Installation",
  "Lighting Installation",
  "Outlet Installation",
  "Residential Services",
  "Security System Repair",
  "Wiring Repair",
  "Commercial Services",
  "Electrical Panel Repair",
  "Generator Installation",
  "Home Theater Installation",
  "Lighting Repair",
  "Outlet Repair",
  "Security System Installation",
  "Smoke Detector Installation",
  "Wiring Installation",
  "Smart Home Automation",
  "Energy-Efficient Lighting",
  "Backup Power Solutions",
  "Energy Audits",
  "Surge Protection Systems",
  "CCTV and Video Surveillance",
  "Access Control Systems",
  "Electrical Safety Inspections",
  "Landscape Lighting",
  "Pool and Spa Electrical Wiring",
  "Electric Water Heater Installation",
  "Data Cabling and Networking",
  "Smart Thermostat Installation",
  "Electrical Code Updates",
  "Portable Generator Setup",
];

const ContactForm = () => {
  const theme = useTheme();
  const [selectedServices, setSelectedServices] = useState([]);

  const handleServiceChange = (event) => {
    const { target: { value } } = event;
    setSelectedServices(typeof value === 'string' ? value.split(',') : value);
  };

  return (
    <Container maxWidth="md" sx={{ paddingBottom: 5 }}>
      <Paper
        sx={{
          padding: '2rem',
          marginTop: '2rem',
          backgroundColor: theme.palette.grey[900], // Dark background
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)',
        }}
      >
        <Typography
          variant="h3"
          sx={{
            marginBottom: '2rem',
            textAlign: 'center',
            fontWeight: 'bold',
            color: theme.palette.primary.contrastText, // White text for heading
          }}
        >
          Contact Us
        </Typography>

        <Box component="form" noValidate autoComplete="off">
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {['Full Name', 'Email Address', 'Phone Number', 'Address'].map((label) => (
              <TextField
                key={label}
                fullWidth
                label={label}
                type={label === 'Email Address' ? 'email' : 'text'}
                variant="outlined"
                sx={{
                  color: "white",
                  backgroundColor: theme.palette.grey[800],
                  '& .MuiInputLabel-root': { color: theme.palette.text.secondary },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: '#555' },
                    '&:hover fieldset': { borderColor: '#888' },
                    '&.Mui-focused': { color: '#fff' }, // Keep white on focus
                  },
                  input: { color: "white" },
                }}
              />
            ))}

            <FormControl fullWidth>
              <InputLabel 
                sx={{ 
                  color: '#fff', 
                  '&.Mui-focused': { color: '#fff' }, // Keep white on focus
                }}
              >
                Select Services
              </InputLabel>
              <Select
                multiple
                value={selectedServices}
                onChange={handleServiceChange}
                renderValue={(selected) => selected.join(', ') || 'Select options'}
                sx={{
                  backgroundColor: theme.palette.grey[800],
                  color: "white",
                  '& .MuiOutlinedInput-notchedOutline': { borderColor: '#555' },
                  '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#888' },
                  
                }}
              >
                {services.map((service) => (
                  <MenuItem key={service} value={service} sx={{ backgroundColor: '#444', color: '#fff' }}>
                    <Checkbox checked={selectedServices.indexOf(service) > -1} />
                    <ListItemText primary={service} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <TextField
              fullWidth
              label="Description"
              multiline
              rows={4}
              variant="outlined"
              sx={{
                backgroundColor: theme.palette.grey[800],
                '& .MuiInputLabel-root': { color: theme.palette.text.secondary },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: '#555' },
                  '&.Mui-focused': { color: '#fff' }, // Keep white on focus
                },
                textarea: { color: "white" },
              }}
            />

            <Button
              fullWidth
              variant="contained"
              sx={{
                backgroundColor: "black",
                color: theme.palette.primary.contrastText,
                '&:hover': { backgroundColor: '#B3AD1F' },
                padding: '12px',
              }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default ContactForm;
