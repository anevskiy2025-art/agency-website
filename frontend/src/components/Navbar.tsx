import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Container
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const navItems = [
  { label: 'Услуги', id: '#services' },
  { label: 'Портфолио', id: '#portfolio' },
  { label: 'Контакты', id: '#contact' }
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  return (
    <AppBar 
      position="sticky" 
      elevation={0}
      sx={{ 
        bgcolor: '#0A0A0C', 
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        zIndex: (theme) => theme.zIndex.drawer + 1
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between', height: 70 }}>
          {/* Logo */}
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontFamily: '"Playfair Display", serif',
              fontSize: '1.5rem',
              fontWeight: 600,
              cursor: 'pointer',
              letterSpacing: '-0.5px'
            }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            ÆTHER
          </Typography>

          {/* Desktop Nav Items */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4, alignItems: 'center' }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                onClick={() => scrollToSection(item.id)}
                sx={{
                  border: 'none',
                  p: 0,
                  fontSize: '0.9rem',
                  color: 'rgba(255,255,255,0.7)',
                  '&:hover': {
                    color: '#FFFFFF',
                    transform: 'none',
                    backgroundColor: 'transparent'
                  }
                }}
              >
                {item.label}
              </Button>
            ))}
            <Button 
              variant="contained" 
              onClick={() => scrollToSection('#contact')}
              sx={{ ml: 2 }}
            >
              Обсудить проект
            </Button>
          </Box>

          {/* Mobile Menu Toggle */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { md: 'none' } }}
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </Toolbar>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: '100%', 
            bgcolor: '#0A0A0C',
            backgroundImage: 'none',
            borderLeft: 'none',
            pt: 8
          },
        }}
      >
        <Box sx={{ p: 4, display: 'flex', flexDirection: 'column', height: '100%' }}>
          <List sx={{ mb: 'auto' }}>
            {navItems.map((item) => (
              <ListItem key={item.label} disablePadding sx={{ mb: 2 }}>
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    align: 'center',
                    onClick: () => scrollToSection(item.id),
                    sx: {
                      fontFamily: '"Playfair Display", serif',
                      fontSize: '2.5rem',
                      cursor: 'pointer'
                    }
                  }}
                />
              </ListItem>
            ))}
          </List>
          <Button 
            variant="contained" 
            fullWidth
            onClick={() => scrollToSection('#contact')}
            sx={{ py: 2, fontSize: '1.1rem' }}
          >
            Обсудить проект
          </Button>
        </Box>
      </Drawer>
    </AppBar>
  );
}
