import { Box, Container, Typography, Grid, Button } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Box 
      component="footer" 
      sx={{ 
        py: { xs: 8, md: 10 }, 
        bgcolor: 'background.default', 
        borderTop: '1.5px solid #252525',
        mt: 'auto',
        position: 'relative'
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={4} sx={{ borderBottom: '1.5px solid rgba(37, 37, 37, 0.08)', pb: 6 }}>
          
          {/* Column 1: Links */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontSize: '0.9rem', mb: 2.5, letterSpacing: '1.5px' }}>
              НАВИГАЦИЯ & СЕТИ
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Button 
                href="https://t.me/+375256429146" 
                target="_blank" 
                sx={{ justifySelf: 'flex-start', width: 'fit-content', border: 'none', p: 0, '&:hover': { bgcolor: 'transparent', color: '#252525', textDecoration: 'underline' } }}
              >
                — TELEGRAM
              </Button>
              <Button 
                href="https://github.com/anevskiy2025-art" 
                target="_blank" 
                sx={{ justifySelf: 'flex-start', width: 'fit-content', border: 'none', p: 0, '&:hover': { bgcolor: 'transparent', color: '#252525', textDecoration: 'underline' } }}
              >
                — GITHUB
              </Button>
            </Box>
          </Grid>

          {/* Column 2: Address / Studio Info */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontSize: '0.9rem', mb: 2.5, letterSpacing: '1.5px' }}>
              СТУДИЯ
            </Typography>
            <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', mb: 0.5, lineHeight: 1.5, fontSize: '0.8rem' }}>
              ÆTHER DIGITAL STUDIO<br />
              РАЗРАБОТКА И UI/UX ДИЗАЙН<br />
              МИНСК, БЕЛАРУСЬ
            </Typography>
          </Grid>

          {/* Column 3: Legal & Back to top */}
          <Grid item xs={12} md={4} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <Box>
              <Typography variant="h6" sx={{ fontSize: '0.9rem', mb: 2, letterSpacing: '1.5px' }}>
                КОПИРАЙТ
              </Typography>
              <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', mb: 0.5, fontSize: '0.78rem' }}>
                © {new Date().getFullYear()} Aether Digital. Все права защищены.
              </Typography>
              <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', fontSize: '0.78rem' }}>
                Разработка: Невский Александр Владимирович
              </Typography>
            </Box>

            <Button
              onClick={scrollToTop}
              startIcon={<ArrowUpwardIcon />}
              sx={{
                mt: 4,
                width: 'fit-content',
                border: 'none',
                color: 'text.primary',
                fontSize: '0.8rem',
                p: 0,
                alignSelf: 'flex-start',
                '&:hover': {
                  color: 'text.secondary',
                  backgroundColor: 'transparent',
                  transform: 'translateY(-3px)'
                }
              }}
            >
              Наверх
            </Button>
          </Grid>

        </Grid>

        {/* Giant branding text watermark matching duties.xyz logo layout */}
        <Typography 
          variant="h1" 
          sx={{ 
            fontSize: { xs: '5rem', sm: '8.5rem', md: '12.5rem' }, 
            textAlign: 'center', 
            fontWeight: 900, 
            letterSpacing: '-6px', 
            lineHeight: 0.8, 
            color: 'rgba(37, 37, 37, 0.05)', 
            userSelect: 'none', 
            mt: 8,
            fontFamily: '"Barlow Condensed", sans-serif'
          }}
        >
          ÆTHER
        </Typography>

      </Container>
    </Box>
  );
}
