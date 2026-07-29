import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { Box, useTheme } from '@mui/material';

// Custom Marker Icon
const customIcon = new L.Icon({
  iconUrl: 'https://leafletjs.com/examples/custom-icons/leaf-green.png', // You can use a custom icon for your business
  iconSize: [38, 95],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76],
});

// Coordinates for the 7 cities in Virginia's 757/948 area codes
const cities = [
  { name: "Virginia Beach", lat: 36.8529, lng: -75.978 },
  { name: "Norfolk", lat: 36.8508, lng: -76.2859 },
  { name: "Chesapeake", lat: 36.7682, lng: -76.2875 },
  { name: "Hampton", lat: 37.0299, lng: -76.3452 },
  { name: "Newport News", lat: 37.0871, lng: -76.473 },
  { name: "Suffolk", lat: 36.7282, lng: -76.5836 },
  { name: "Portsmouth", lat: 36.8354, lng: -76.2983 },
];

const MapComponent = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        height: '500px',
        maxWidth: '800px',
        margin: '0 auto',
        borderRadius: theme.shape.borderRadius,
        overflow: 'hidden',
        boxShadow: theme.shadows[4], // Use theme shadows for a subtle depth effect
        border: `1px solid ${theme.palette.divider}`, // Use the theme divider color
      }}
    >
      <MapContainer
        center={[36.85, -76.3]}
        zoom={10}
        scrollWheelZoom={false}
        style={{
          height: '100%',
          width: '100%',
        }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {cities.map((city, index) => (
          <Marker key={index} position={[city.lat, city.lng]} icon={customIcon}>
            <Popup>
              <Box sx={{ color: theme.palette.text.primary }}>
                Scott's Electric provides services in <strong>{city.name}</strong>.
              </Box>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </Box>
  );
};

export default MapComponent;
