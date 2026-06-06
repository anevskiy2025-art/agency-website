import { Box, Container, Typography, Button } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Box 
      component="footer" 
      sx={{ 
        py: 6, 
        bgcolor: 'background.default', 
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        mt: 'auto'
      }}
    >
      <Container maxWidth="xl">
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', sm: 'row' }, 
          justifyContent: 'space-between', 
          alignItems: { xs: 'flex-start', sm: 'center' },
          gap: 3
        }}>
          {/* Logo & Copyright */}
          <Box>
            <Typography variant="h6" sx={{ fontFamily: '"Playfair Display", serif', fontSize: '1.2rem', mb: 1 }}>
              ÆTHER
            </Typography>
            <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block' }}>
              © {new Date().getFullYear()} Aether Digital Studio. Все права защищены.
            </Typography>
            <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.35)', display: 'block', mt: 0.5 }}>
              Разработка: Невский Александр Владимирович
            </Typography>
          </Box>

          {/* Scroll Up Button */}
          <Button
            onClick={scrollToTop}
            startIcon={<ArrowUpwardIcon />}
            sx={{
              border: 'none',
              color: 'text.secondary',
              fontSize: '0.85rem',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              p: 0,
              '&:hover': {
                color: '#FFFFFF',
                backgroundColor: 'transparent',
                transform: 'translateY(-3px)'
              }
            }}
          >
            Наверх
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
