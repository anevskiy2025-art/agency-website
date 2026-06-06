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
        bgcolor: 'background.default', 
        borderBottom: '1.5px solid #252525',
        zIndex: (theme) => theme.zIndex.drawer + 1,
        color: 'text.primary'
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between', height: 80 }}>
          {/* Logo */}
          <Typography
            variant="h4"
            component="div"
            sx={{
              fontFamily: '"Barlow Condensed", sans-serif',
              fontWeight: 900,
              fontSize: '2rem',
              cursor: 'pointer',
              letterSpacing: '-0.5px',
              color: 'primary.main',
              display: 'flex',
              alignItems: 'center',
              gap: 1
            }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            ÆTHER
          </Typography>

          {/* Desktop Nav Items */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 5, alignItems: 'center' }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                onClick={() => scrollToSection(item.id)}
                sx={{
                  border: 'none',
                  p: 0,
                  fontSize: '0.85rem',
                  fontFamily: '"Space Mono", monospace',
                  fontWeight: 700,
                  color: 'rgba(37,37,37,0.7)',
                  '&:hover': {
                    color: '#252525',
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
            sx={{ display: { md: 'none' }, color: '#252525' }}
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
            bgcolor: 'background.default',
            backgroundImage: 'none',
            borderLeft: 'none',
            pt: 10
          },
        }}
      >
        <Box sx={{ p: 4, display: 'flex', flexDirection: 'column', height: '100%' }}>
          <List sx={{ mb: 'auto' }}>
            {navItems.map((item) => (
              <ListItem key={item.label} disablePadding sx={{ mb: 3 }}>
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    align: 'center',
                    onClick: () => scrollToSection(item.id),
                    sx: {
                      fontFamily: '"Barlow Condensed", sans-serif',
                      fontSize: '3rem',
                      fontWeight: 900,
                      cursor: 'pointer',
                      color: 'primary.main',
                      textTransform: 'uppercase'
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
            sx={{ py: 2, fontSize: '1rem' }}
          >
            Обсудить проект
          </Button>
        </Box>
      </Drawer>
    </AppBar>
  );
}
