import React, { useState } from 'react';
import { Container, TextField, Typography, Button, MenuItem, Select, InputLabel, FormControl, Checkbox, ListItemText, Grid2, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  formContainer: {
    padding: '2rem',
    marginTop: '2rem',
    backgroundColor: '#f5f5f5',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  },
  formField: {
    marginBottom: '1.5rem',
  },
  formHeading: {
    marginBottom: '2rem',
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#333',
  },
  submitButton: {
    marginTop: '2rem',
  },
}));

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
  const classes = useStyles();
  const [selectedServices, setSelectedServices] = useState([]); // Initial state is an empty array

  const handleServiceChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedServices(
      typeof value === 'string' ? value.split(',') : value
    );
  };

  return (
    <Container maxWidth="md" sx={{ paddingBottom: 5}}>
      <Paper className={classes.formContainer}>
        <Typography id="contact" variant="h4" className={classes.formHeading}>
          Contact Us
        </Typography>
        <form noValidate autoComplete="off">
          <Grid2 container spacing={2}>
            <Grid2 item size={12}>
              <TextField
                fullWidth
                label="Full Name"
                variant="outlined"
                className={classes.formField}
              />
            </Grid2>
            <Grid2 item size={12}>
              <TextField
                fullWidth
                label="Email Address"
                type="email"
                variant="outlined"
                className={classes.formField}
              />
            </Grid2>
            <Grid2 item size={12}>
              <TextField
                fullWidth
                label="Phone Number"
                type="tel"
                variant="outlined"
                className={classes.formField}
              />
            </Grid2>
            <Grid2 item size={12}>
              <TextField
                fullWidth
                label="Address"
                variant="outlined"
                className={classes.formField}
              />
            </Grid2>
            <Grid2 item size={12}>
              <FormControl fullWidth className={classes.formField}>
                <InputLabel>Select services</InputLabel> {/* Placeholder when no services are selected */}
                <Select
                  multiple
                  value={selectedServices}
                  onChange={handleServiceChange}
                  renderValue={(selected) =>
                    selected.length ? selected.join(', ') : 'Select options' // Shows placeholder if nothing is selected
                  }
                >
                  {services.map((service) => (
                    <MenuItem key={service} value={service}>
                      <Checkbox checked={selectedServices.indexOf(service) > -1} />
                      <ListItemText primary={service} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid2>
            <Grid2 item size={12}>
              <TextField
                fullWidth
                label="Description"
                multiline
                rows={4}
                variant="outlined"
                className={classes.formField}
              />
            </Grid2>
          </Grid2>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            size="large"
            className={classes.submitButton}
          >
            Submit
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default ContactForm;
