import React, { useState, useEffect, useRef } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useTheme } from '@mui/material/styles';
import { Box, Fab } from '@mui/material';
import Slide from '@mui/material/Slide';
import HomeIcon from '@mui/icons-material/Home';
import BuildIcon from '@mui/icons-material/Build';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import InfoIcon from '@mui/icons-material/Info';

const Navbar = () => {
  const theme = useTheme();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollTop = useRef(0); // Use useRef to persist value between renders

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop.current) {
        setShowNavbar(false); // Hide on downscroll
      } else {
        setShowNavbar(true); // Show on upscroll
      }
      lastScrollTop.current = scrollTop <= 0 ? 0 : scrollTop; // Mobile/Negative scroll fix
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // No external dependencies required

  const navItemsLeft = [
    { text: 'Home', id: 'home', icon: <HomeIcon sx={{ fontSize: 30 }} /> },
    { text: 'Services', id: 'services', icon: <BuildIcon sx={{ fontSize: 30 }} /> },
  ];

  const navItemsRight = [
    { text: 'Contact', id: 'contact', icon: <ContactMailIcon sx={{ fontSize: 30 }} /> },
    { text: 'About', id: 'about', icon: <InfoIcon sx={{ fontSize: 30 }} /> },
  ];

  const drawerContent = (
    <Box
      sx={{
        width: 300,
        backgroundColor: theme.palette.background.paper,
        height: '100%',
        paddingTop: theme.spacing(2),
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        textAlign: 'center',
      }}
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List sx={{ padding: 0 }}>
        {[...navItemsLeft, ...navItemsRight].map((item) => (
          <ScrollLink
            key={item.text}
            to={item.id}
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
            style={{ textDecoration: 'none', cursor: 'pointer' }}
          >
            <ListItem button sx={{ padding: theme.spacing(3) }}>
              <ListItemText
                primary={item.text}
                primaryTypographyProps={{
                  fontSize: '1.2rem',
                  fontWeight: 'bold',
                  color: theme.palette.primary.main,
                  textTransform: 'uppercase',
                }}
              />
            </ListItem>
          </ScrollLink>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Slide direction="up" in={showNavbar} mountOnEnter unmountOnExit>
        <AppBar position="fixed" sx={{ top: 'auto', bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.95)', boxShadow: 'none' }}>
          <Toolbar
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: theme.spacing(1, 3),
              [theme.breakpoints.down('sm')]: {
                padding: theme.spacing(1, 2),
              },
            }}
          >
            <Box sx={{ display: 'flex', gap: 4, flexGrow: 1, justifyContent: 'space-evenly' }}>
              {navItemsLeft.map((item) => (
                <ScrollLink
                  key={item.text}
                  to={item.id}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-70}
                  style={{ textDecoration: 'none', cursor: 'pointer' }}
                >
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    {item.icon}
                    <Typography
                      sx={{
                        color: theme.palette.primary.contrastText,
                        fontSize: '0.75rem',
                        textTransform: 'uppercase',
                        marginTop: theme.spacing(0.5),
                        [theme.breakpoints.down('sm')]: {
                          fontSize: '0.65rem',
                        },
                      }}
                    >
                      {item.text}
                    </Typography>
                  </Box>
                </ScrollLink>
              ))}
            </Box>

            <Box sx={{ textAlign: 'center' }}>
              <Fab
                component={RouterLink}
                to="/"
                sx={{
                  height: 80,
                  width: 80,
                  borderRadius: '50%',
                  backgroundColor: theme.palette.primary.main,
                  position: 'relative',
                  top: '0px',
                  boxShadow: theme.shadows[6],
                  '&:hover': {
                    backgroundColor: theme.palette.primary.dark,
                  },
                  [theme.breakpoints.down('sm')]: {
                    height: 60,
                    width: 60,
                  },
                }}
                aria-label="logo"
              >
                <Box
                  component="img"
                  src="/assets/images/scottselectriclogo2.png"
                  alt="Scott's Electric Logo"
                  sx={{
                    height: 100,
                    width: 'auto',
                    borderRadius: 100,
                    marginBottom: 2,
                    [theme.breakpoints.down('sm')]: {
                      height: 80,
                    },
                  }}
                />
              </Fab>
              
            </Box>

            <Box sx={{ display: 'flex', gap: 4, flexGrow: 1, justifyContent: 'space-evenly' }}>
              {navItemsRight.map((item) => (
                <ScrollLink
                  key={item.text}
                  to={item.id}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-70}
                  style={{ textDecoration: 'none', cursor: 'pointer' }}
                >
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    {item.icon}
                    <Typography
                      sx={{
                        color: theme.palette.primary.contrastText,
                        fontSize: '0.75rem',
                        textTransform: 'uppercase',
                        marginTop: theme.spacing(0.5),
                        [theme.breakpoints.down('sm')]: {
                          fontSize: '0.65rem',
                        },
                      }}
                    >
                      {item.text}
                    </Typography>
                  </Box>
                </ScrollLink>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
      </Slide>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={{
          '& .MuiDrawer-paper': {
            backgroundColor: theme.palette.background.default,
            boxShadow: '0px 0px 15px rgba(0,0,0,0.3)',
            borderTopRightRadius: theme.shape.borderRadius * 2,
            borderBottomRightRadius: theme.shape.borderRadius * 2,
            transition: 'width 0.5s ease-in-out',
            width: 300,
          },
        }}
      >
        {drawerContent}
      </Drawer>
    </>
  );
};

export default Navbar;
