import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText
} from '@mui/material';

const navItems = [
  { label: 'Услуги', href: '#services' },
  { label: 'Портфолио', href: '#portfolio' },
  { label: 'Контакты', href: '#contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          bgcolor: 'rgba(250, 249, 247, 0.85)',
          backdropFilter: 'blur(12px)',
          borderBottom: '0.5px solid rgba(0,0,0,0.06)',
          color: 'text.primary',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ minHeight: 64, justifyContent: 'space-between' }}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: '"DM Serif Display", serif',
                fontWeight: 400,
                fontSize: '1.3rem',
                cursor: 'pointer',
                letterSpacing: '-0.3px',
              }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Æther
            </Typography>

            {/* Desktop nav */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1, alignItems: 'center' }}>
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  onClick={() => scrollTo(item.href)}
                  sx={{
                    color: 'text.secondary',
                    fontWeight: 400,
                    fontSize: '0.9rem',
                    '&:hover': { color: 'text.primary', bgcolor: 'transparent' },
                  }}
                >
                  {item.label}
                </Button>
              ))}
              <Button
                variant="contained"
                onClick={() => scrollTo('#contact')}
                sx={{ ml: 1 }}
              >
                Обсудить проект
              </Button>
            </Box>

            {/* Mobile hamburger */}
            <IconButton
              onClick={() => setMobileOpen(true)}
              sx={{ display: { md: 'none' }, color: 'text.primary' }}
              aria-label="Открыть меню"
            >
              <i className="ti ti-menu-2" style={{ fontSize: 22 }} />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{
          sx: { width: 280, bgcolor: '#faf9f7', p: 2 }
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
          <IconButton onClick={() => setMobileOpen(false)} aria-label="Закрыть меню">
            <i className="ti ti-x" style={{ fontSize: 20 }} />
          </IconButton>
        </Box>
        <List>
          {navItems.map((item) => (
            <ListItem key={item.label} disablePadding>
              <ListItemButton onClick={() => scrollTo(item.href)}>
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{ fontSize: '1.1rem', fontWeight: 500 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Button
          variant="contained"
          fullWidth
          onClick={() => scrollTo('#contact')}
          sx={{ mt: 2 }}
        >
          Обсудить проект
        </Button>
      </Drawer>
    </>
  );
}
