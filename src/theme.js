import { createTheme } from '@mui/material/styles';

// Custom theme for the app matching Scott's Electric color scheme
const theme = createTheme({
  palette: {
    primary: {
      main: '#0077B6', // Primary color: Electric Blue
      contrastText: '#fff', // White text on primary buttons
    },
    secondary: {
      main: '#B3AD1F', // Secondary color: Sunlight Yellow
      contrastText: '#333', // Dark grey text on secondary buttons
    },
    background: {
      default: '#000000', // Soft White background for pages
      paper: '#fff', // White background for Paper components (cards, modals, etc.)
    },
    text: {
      primary: '#333333', // Dark grey text for headings and body text
      secondary: '#fff', // Seafoam Green for accent text or links
    },
  },
  typography: {
    fontFamily: `'Roboto', 'Helvetica', 'Arial', sans-serif`, // Standard Material-UI font
    h1: {
      fontWeight: 700,
      color: '#333333', // Dark grey for large headers
      fontFamily: 'Lilita One',

    },
    h2: {
      fontWeight: 600,
      color: '#333333', // Dark grey for medium headers
      fontFamily: 'Lilita One',

    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 500,
      color: '#333333',
      fontFamily: 'Lilita One',

    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 500,
      color: '#333333',
      fontFamily: 'Lilita One',

    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 400,
      color: '#333333',
      fontFamily: 'Lilita One',

    },
    h6: {
      fontSize: '1rem',
      fontWeight: 400,
      color: '#333333',
      fontFamily: 'Lilita One',

    },
    body1: {
      fontSize: '1rem',
      color: '#666', // Lighter grey for body text
      fontFamily: 'Baskervville SC',
    },
    button: {
      textTransform: 'none', // Disable uppercase for buttons
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px', // Rounded buttons for a modern look
          padding: '0.75rem 1.5rem', // Consistent button padding
          fontFamily: 'Lilita One',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
        containedPrimary: {
          color: '#fff', // White text on primary buttons
        },
        outlinedPrimary: {
          borderColor: '#0077B6', // Electric Blue border for outlined primary buttons
          color: '#0077B6', // Electric Blue text for outlined primary buttons
        },
      },
    },
   
 
  },
});

export default theme;
