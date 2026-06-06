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
        pt: { xs: 10, md: 18 },
        pb: { xs: 8, md: 12 },
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        overflow: 'hidden'
      }}
    >
      {/* Structural layout lines */}
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
        {/* Availability Badge */}
        <Box 
          sx={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: 1.5, 
            px: 2.5, 
            py: 1, 
            border: '1px solid rgba(115, 9, 243, 0.25)', 
            bgcolor: 'rgba(115, 9, 243, 0.06)', 
            mb: 5,
            backdropFilter: 'blur(10px)'
          }}
        >
          <Box 
            sx={{ 
              width: 8, 
              height: 8, 
              borderRadius: '50%', 
              bgcolor: '#8b5cf6', 
              boxShadow: '0 0 10px #8b5cf6',
              animation: 'pulse 1.8s infinite',
              '@keyframes pulse': {
                '0%': { transform: 'scale(0.9)', opacity: 0.5 },
                '50%': { transform: 'scale(1.25)', opacity: 1 },
                '100%': { transform: 'scale(0.9)', opacity: 0.5 },
              }
            }} 
          />
          <Typography 
            variant="caption" 
            sx={{ 
              color: '#E0DDF7', 
              textTransform: 'uppercase', 
              letterSpacing: '2px', 
              fontWeight: 600, 
              fontSize: '0.72rem' 
            }}
          >
            Доступны для новых проектов — Июнь 2026
          </Typography>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={10}>
            {/* Tagline / Subtitle */}
            <Typography 
              variant="subtitle2" 
              sx={{ 
                color: 'text.secondary', 
                textTransform: 'uppercase', 
                letterSpacing: '4px',
                mb: 3.5,
                fontSize: '0.8rem',
                fontWeight: 600
              }}
            >
              / ЦИФРОВОЕ АГЕНТСТВО ÆTHER
            </Typography>

            {/* Main Title (Playfair Display) */}
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.8rem', sm: '4.5rem', md: '5.8rem' },
                lineHeight: 1.05,
                mb: 4,
                letterSpacing: '-2px',
                '& i': {
                  fontFamily: '"Playfair Display", serif',
                  fontStyle: 'italic',
                  fontWeight: 400
                }
              }}
            >
              Создаем веб-сайты и цифровые системы, которые <i>запоминаются</i>.
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={4} sx={{ mt: { xs: 1, md: 5 } }}>
          <Grid item xs={12} md={5}>
            <Typography 
              variant="body1" 
              sx={{ 
                color: 'text.secondary', 
                lineHeight: 1.75,
                fontSize: '1.1rem',
                pr: { md: 4 }
              }}
            >
              Мы специализируемся на проектировании и разработке уникальных веб-решений высокого уровня. Сочетаем строгую швейцарскую типографику, интерактивный дизайн и передовые технологии для вашего бизнеса.
            </Typography>
          </Grid>
          
          <Grid item xs={12} md={7} sx={{ display: 'flex', alignItems: 'flex-end', gap: 2.5, flexWrap: 'wrap', mt: { xs: 2, md: 0 } }}>
            <Button 
              variant="contained" 
              size="large" 
              onClick={scrollToContact}
              sx={{ 
                py: 2.2, 
                px: 5, 
                fontSize: '1rem', 
                fontWeight: 600, 
                letterSpacing: '1px',
                boxShadow: '0 4px 20px rgba(255, 255, 255, 0.1)',
                '&:hover': {
                  boxShadow: '0 4px 30px rgba(255, 255, 255, 0.25)'
                }
              }}
            >
              Начать сотрудничество
            </Button>
            <Button 
              variant="outlined" 
              size="large" 
              onClick={scrollToPortfolio}
              sx={{ 
                py: 2.2, 
                px: 5, 
                fontSize: '1rem', 
                fontWeight: 600, 
                letterSpacing: '1px' 
              }}
            >
              Посмотреть кейсы
            </Button>
          </Grid>
        </Grid>

        {/* Stats Grid */}
        <Grid 
          container 
          spacing={0} 
          sx={{ 
            mt: { xs: 8, md: 15 }, 
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            borderLeft: '1px solid rgba(255, 255, 255, 0.08)'
          }}
        >
          {[
            { value: '5+', label: 'Лет опыта в разработке' },
            { value: '40+', label: 'Сданных проектов' },
            { value: '99%', label: 'Удовлетворенных клиентов' },
            { value: '100%', label: 'Внимание к деталям' }
          ].map((stat, idx) => (
            <Grid 
              item 
              xs={6} 
              md={3} 
              key={idx} 
              sx={{ 
                p: { xs: 3.5, md: 5 }, 
                borderRight: '1px solid rgba(255, 255, 255, 0.08)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  bgcolor: 'rgba(255, 255, 255, 0.01)'
                }
              }}
            >
              <Typography 
                variant="h2" 
                sx={{ 
                  fontWeight: 600, 
                  fontSize: { xs: '2.5rem', md: '3.6rem' }, 
                  color: '#FFFFFF', 
                  letterSpacing: '-2px',
                  mb: 1
                }}
              >
                {stat.value}
              </Typography>
              <Typography 
                variant="caption" 
                sx={{ 
                  color: 'text.secondary', 
                  textTransform: 'uppercase', 
                  letterSpacing: '1.5px',
                  fontWeight: 500
                }}
              >
                {stat.label}
              </Typography>
            </Grid>
          ))}
        </Grid>

        {/* Scroll down indicator */}
        <Box 
          onClick={scrollToPortfolio}
          sx={{ 
            display: 'inline-flex',
            alignItems: 'center', 
            gap: 1.5, 
            mt: { xs: 6, md: 8 }, 
            cursor: 'pointer',
            color: 'text.secondary',
            transition: 'color 0.3s ease',
            '&:hover': {
              color: '#FFFFFF',
              '& svg': {
                transform: 'translateY(4px)'
              }
            }
          }}
        >
          <ArrowDownwardIcon sx={{ transition: 'transform 0.3s ease', fontSize: '1.1rem' }} />
          <Typography variant="caption" sx={{ letterSpacing: '1.5px', textTransform: 'uppercase', fontWeight: 600 }}>
            Листайте ниже к портфолио
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
