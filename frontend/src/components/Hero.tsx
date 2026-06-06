import { Box, Container, Typography, Button, Grid } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPortfolio = () => {
    const element = document.querySelector('#portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box 
      sx={{ 
        position: 'relative',
        pt: { xs: 8, md: 15 },
        pb: { xs: 8, md: 12 },
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        overflow: 'hidden'
      }}
    >
      {/* Structural layout lines (blueprint style) */}
      <Box sx={{
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: '25%',
        width: '1px',
        bgcolor: 'rgba(255, 255, 255, 0.03)',
        display: { xs: 'none', md: 'block' },
        zIndex: 0
      }} />
      <Box sx={{
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: '75%',
        width: '1px',
        bgcolor: 'rgba(255, 255, 255, 0.03)',
        display: { xs: 'none', md: 'block' },
        zIndex: 0
      }} />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={9}>
            {/* Tagline / Subtitle */}
            <Typography 
              variant="subtitle2" 
              sx={{ 
                color: 'text.secondary', 
                textTransform: 'uppercase', 
                letterSpacing: '3px',
                mb: 3,
                fontSize: '0.85rem'
              }}
            >
              / ЦИФРОВОЕ АГЕНТСТВО ÆTHER
            </Typography>

            {/* Main Title (Playfair Display) */}
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '3rem', sm: '4.5rem', md: '5.5rem' },
                lineHeight: 1.05,
                mb: 4,
                letterSpacing: '-2px'
              }}
            >
              Создаем веб-сайты и цифровые системы, которые <i>запоминаются</i>.
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={4} sx={{ mt: { xs: 2, md: 6 } }}>
          <Grid item xs={12} md={4}>
            <Typography 
              variant="body1" 
              sx={{ 
                color: 'text.secondary', 
                lineHeight: 1.7,
                fontSize: '1.1rem',
                pr: { md: 4 }
              }}
            >
              Мы специализируемся на разработке уникальных веб-решений высокого уровня. Сочетаем строгую швейцарскую типографику, интерактивный дизайн и передовые технологии для вашего бизнеса.
            </Typography>
          </Grid>
          
          <Grid item xs={12} md={8} sx={{ display: 'flex', alignItems: 'flex-end', gap: 2, flexWrap: 'wrap', mt: { xs: 2, md: 0 } }}>
            <Button 
              variant="contained" 
              size="large" 
              onClick={scrollToContact}
              sx={{ py: 2, px: 4, fontSize: '1rem' }}
            >
              Начать сотрудничество
            </Button>
            <Button 
              variant="outlined" 
              size="large" 
              onClick={scrollToPortfolio}
              sx={{ py: 2, px: 4, fontSize: '1rem' }}
            >
              Посмотреть кейсы
            </Button>
          </Grid>
        </Grid>

        {/* Scroll down indicator */}
        <Box 
          onClick={scrollToContact}
          sx={{ 
            display: 'inline-flex',
            alignItems: 'center', 
            gap: 1.5, 
            mt: { xs: 8, md: 12 }, 
            cursor: 'pointer',
            color: 'text.secondary',
            '&:hover': {
              color: '#FFFFFF',
              '& svg': {
                transform: 'translateY(5px)'
              }
            }
          }}
        >
          <ArrowDownwardIcon sx={{ transition: 'transform 0.3s ease', fontSize: '1.2rem' }} />
          <Typography variant="caption" sx={{ letterSpacing: '1px', textTransform: 'uppercase' }}>
            Листайте ниже
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
