import React, { useState, useEffect, useRef } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu'; // Hamburger icon
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

  const navItems = [
    { text: 'Home', id: '#home', icon: '/assets/images/HomeIcon.png' },
    { text: 'Services', id: 'services', icon: '/assets/images/ServicesIcon.png' },
    { text: 'Contact', id: 'contact', icon: '/assets/images/ContactIcon.png' },
    { text: 'About', id: 'about', icon: '/assets/images/AboutIcon.png' },
  ];

  const drawerContent = (
    <Box
      sx={{
        width: 250,
        backgroundColor: theme.palette.background.paper,
        height: '100%',
        paddingTop: theme.spacing(2),
        textAlign: 'center',
      }}
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {navItems.map((item) => (
          <ScrollLink
            key={item.text}
            to={item.id}
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
            style={{ textDecoration: 'none', cursor: 'pointer' }}
          >
            <ListItem button>
              <Box
                component="img"
                src={item.icon}
                alt={item.text}
                sx={{ width: 35, height: 35, marginRight: theme.spacing(2) }}
              />
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
      <Slide direction="down" in={showNavbar} mountOnEnter unmountOnExit>
        <AppBar
          position="fixed"
          sx={{
            backgroundColor: 'transparent', // Make AppBar transparent
            boxShadow: 'none',
            padding: theme.spacing(1, 2),
            backdropFilter: 'blur(10px)', // Blur effect on background
            height: '120px',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.55)', // Dark background
              zIndex: -1, // Ensure it stays behind content
              backdropFilter: 'blur(10px)', // Apply blur to background only
            },
          }}
        >
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            {/* Logo on the left */}
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
                }}
              />
            </RouterLink>

            {/* Hamburger Icon on the right */}
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon sx={{ fontSize: 30 }} />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Slide>

      {/* Drawer (Sidebar) */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={{
          '& .MuiDrawer-paper': {
            backgroundColor: theme.palette.background.default,
            boxShadow: '0px 0px 15px rgba(0,0,0,0.3)',
            transition: 'width 0.5s ease-in-out',
            width: 250,
          },
        }}
      >
        {drawerContent}
      </Drawer>
    </>
  );
};

export default Navbar;
