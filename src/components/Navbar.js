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
import { Box } from '@mui/material';
import Slide from '@mui/material/Slide';

const Navbar = () => {
  const theme = useTheme();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollTop = useRef(0);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setShowNavbar(scrollTop < lastScrollTop.current);
      lastScrollTop.current = scrollTop <= 0 ? 0 : scrollTop;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItemsLeft = [
    { text: 'Home', id: '#home', icon: (
      <Box
        component="img"
        src="/assets/images/HomeIcon.png" // Replace with the path to your PNG
        alt="Home Icon"
        sx={{
          width: 35, // Adjust the size accordingly
          height: 35,
        }}
      />
    ), },
    { text: 'Services', id: 'services', icon: (
      <Box
        component="img"
        src="/assets/images/ServicesIcon.png" // Replace with the path to your PNG
        alt="Home Icon"
        sx={{
          width: 35, // Adjust the size accordingly
          height: 35,
        }}
      />
    ), },
  ];

  const navItemsRight = [
    { text: 'Contact', id: 'contact', icon: (
      <Box
        component="img"
        src="/assets/images/ContactIcon.png" // Replace with the path to your PNG
        alt="Home Icon"
        sx={{
          width: 35, // Adjust the size accordingly
          height: 35,
        }}
      />
    ), },
    { text: 'About', id: 'about', icon: (
      <Box
        component="img"
        src="/assets/images/AboutIcon.png" // Replace with the path to your PNG
        alt="Home Icon"
        sx={{
          width: 35, // Adjust the size accordingly
          height: 35,
        }}
      />
    ), },
  ];

  const drawerContent = (
    <Box
      sx={{
        width: 300,
        backgroundColor: theme.palette.background.paper,
        height: '100%',
        paddingTop: theme.spacing(2),
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
        <AppBar
          position="fixed"
          sx={{
            top: 'auto',
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.95)',
            boxShadow: 'none',
            height: '120px',
          }}
        >
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
            <Box
              sx={{
                display: 'flex',
                gap: 4,
                justifyContent: 'space-evenly',
                width: '100%',
                alignItems: 'center',
              }}
            >
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
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                    }}
                  >
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

              <RouterLink to="/" style={{ textDecoration: 'none' }}>
                <Box
                  component="img"
                  src="/assets/images/scottselectriclogo2.png"
                  alt="Scott's Electric Logo"
                  sx={{
                    height: 100,
                    width: 100,
                    borderRadius: '100%',
                    cursor: 'pointer',
                    [theme.breakpoints.down('sm')]: {
                      height: 90,
                      width: 90,
                    },
                  }}
                />
              </RouterLink>

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
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                    }}
                  >
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