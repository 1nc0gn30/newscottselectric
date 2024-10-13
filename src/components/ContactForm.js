import React, { useState } from 'react';
import { Container, TextField, Typography, Button, MenuItem, Select, InputLabel, FormControl, Checkbox, ListItemText, Paper, Box } from '@mui/material';

const services = [
  "Appliance Installation",
  "Electrical Panel Installation",
  "EV Charging Station Installation",
  "Heater Installation",
  "Lighting Installation",
  "Outlet Installation",
  "Residential Services",
  "Security System Repair",
  "Solar Panel Installation",
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
  const [selectedServices, setSelectedServices] = useState([]);

  const handleServiceChange = (event) => {
    const { target: { value } } = event;
    setSelectedServices(
      typeof value === 'string' ? value.split(',') : value
    );
  };

  return (
    <Container maxWidth="md" sx={{ paddingBottom: 5 }}>
      <Paper
        sx={{
          padding: '2rem',
          marginTop: '2rem',
          backgroundColor: '#1e1e1e', // Dark background
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)',
        }}
      >
        <Typography
          id="contact"
          variant="h4"
          sx={{
            marginBottom: '2rem',
            textAlign: 'center',
            fontWeight: 'bold',
            color: '#fff', // White text for heading
          }}
        >
          Contact Us
        </Typography>

        <Box component="form" noValidate autoComplete="off">
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField
              fullWidth
              label="Full Name"
              variant="outlined"
              sx={{
                backgroundColor: '#333',
                color: '#fff',
                '& .MuiInputLabel-root': { color: '#aaa' },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: '#555' },
                  '&:hover fieldset': { borderColor: '#888' },
                  '&.Mui-focused fieldset': { borderColor: '#B3AD1F' },
                },
              }}
            />

            <TextField
              fullWidth
              label="Email Address"
              type="email"
              variant="outlined"
              sx={{
                backgroundColor: '#333',
                color: '#fff',
                '& .MuiInputLabel-root': { color: '#aaa' },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: '#555' },
                  '&:hover fieldset': { borderColor: '#888' },
                  '&.Mui-focused fieldset': { borderColor: '#B3AD1F' },
                },
              }}
            />

            <TextField
              fullWidth
              label="Phone Number"
              type="tel"
              variant="outlined"
              sx={{
                backgroundColor: '#333',
                color: '#fff',
                '& .MuiInputLabel-root': { color: '#aaa' },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: '#555' },
                  '&:hover fieldset': { borderColor: '#888' },
                  '&.Mui-focused fieldset': { borderColor: '#B3AD1F' },
                },
              }}
            />

            <TextField
              fullWidth
              label="Address"
              variant="outlined"
              sx={{
                backgroundColor: '#333',
                color: '#fff',
                '& .MuiInputLabel-root': { color: '#aaa' },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: '#555' },
                  '&:hover fieldset': { borderColor: '#888' },
                  '&.Mui-focused fieldset': { borderColor: '#B3AD1F' },
                },
              }}
            />

            <FormControl fullWidth sx={{ backgroundColor: '#333', '& .MuiInputLabel-root': { color: '#B3AD1F' } }}>
              <InputLabel>Select services</InputLabel>
              <Select
                multiple
                value={selectedServices}
                onChange={handleServiceChange}
                renderValue={(selected) =>
                  selected.length ? selected.join(', ') : 'Select options'
                }
                sx={{
                  backgroundColor: '#333',
                  color: '#fff',
                  '& .MuiOutlinedInput-notchedOutline': { borderColor: '#555' },
                  '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#888' },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#B3AD1F' },
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
                backgroundColor: '#333',
                color: '#fff',
                '& .MuiInputLabel-root': { color: '#aaa' },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: '#555' },
                  '&:hover fieldset': { borderColor: '#B3AD1F' },
                  '&.Mui-focused fieldset': { borderColor: '#B3AD1F' },
                },
              }}
            />

            <Button
              fullWidth
              variant="contained"
              sx={{
                backgroundColor: '#000000',
                color: '#fff',
                '&:hover': {
                  backgroundColor: '#B3AD1F',
                },
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
