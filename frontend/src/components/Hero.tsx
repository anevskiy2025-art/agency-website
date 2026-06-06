import { useState, useEffect } from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';

export default function Hero() {
  const [timeStr, setTimeStr] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Europe/Minsk',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      };
      const formatter = new Intl.DateTimeFormat('ru-RU', options);
      setTimeStr(formatter.format(new Date()));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const getDutyStatus = () => {
    const minskHour = new Date(new Date().toLocaleString("en-US", {timeZone: "Europe/Minsk"})).getHours();
    if (minskHour >= 9 && minskHour < 19) {
      return 'ON-DUTY';
    }
    return 'OFF-DUTY';
  };

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
        pt: { xs: 8, md: 12 },
        pb: { xs: 8, md: 12 },
        overflow: 'hidden'
      }}
    >
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={4} sx={{ borderBottom: '1.5px solid #252525', pb: { xs: 6, md: 10 } }}>
          
          {/* Left Column: Studio Meta */}
          <Grid item xs={12} md={3}>
            <Box sx={{ borderTop: '1.5px solid #252525', pt: 3 }}>
              <Typography variant="h6" sx={{ fontSize: '0.9rem', mb: 2, letterSpacing: '1.5px' }}>
                ÆTHER (STUDIO)
              </Typography>
              <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', mb: 0.5, fontSize: '0.8rem' }}>
                ЦИФРОВАЯ СТУДИЯ И
              </Typography>
              <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', fontSize: '0.8rem' }}>
                ПАРТНЕР ПО РАЗРАБОТКЕ
              </Typography>
            </Box>
          </Grid>

          {/* Center Column: Massive Headline & List */}
          <Grid item xs={12} md={6}>
            <Box sx={{ borderTop: '1.5px solid #252525', pt: 3 }}>
              <Typography 
                variant="h1" 
                sx={{ 
                  fontSize: { xs: '3.2rem', sm: '4.8rem', md: '5.6rem' },
                  letterSpacing: '-1.5px',
                  mb: 5,
                  fontWeight: 900
                }}
              >
                СОЗДАЕМ ВЕБ-САЙТЫ И ЦИФРОВЫЕ СИСТЕМЫ ДЛЯ СМЕЛЫХ БРЕНДОВ
              </Typography>
              
              <Box sx={{ mb: 6 }}>
                <Typography variant="h6" sx={{ fontSize: '0.9rem', mb: 2.5, letterSpacing: '1px' }}>
                  НАПРАВЛЕНИЯ РАБОТЫ:
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                  <Typography variant="caption" sx={{ fontSize: '0.85rem', color: 'text.secondary', display: 'block' }}>
                    — ОПРЕДЕЛЯЕМ СТРАТЕГИЮ И ПОЗИЦИОНИРОВАНИЕ
                  </Typography>
                  <Typography variant="caption" sx={{ fontSize: '0.85rem', color: 'text.secondary', display: 'block' }}>
                    — ПРОЕКТИРУЕМ СЛОЖНЫЙ UI/UX И ДИЗАЙН-СИСТЕМЫ
                  </Typography>
                  <Typography variant="caption" sx={{ fontSize: '0.85rem', color: 'text.secondary', display: 'block' }}>
                    — ВНЕДРЯЕМ НАДЕЖНЫЙ КОД И ОПТИМИЗИРУЕМ В СЕТИ
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button variant="contained" onClick={scrollToContact} sx={{ px: 4, py: 1.8 }}>
                  Начать проект
                </Button>
                <Button variant="outlined" onClick={scrollToPortfolio} sx={{ px: 4, py: 1.8 }}>
                  Наши кейсы
                </Button>
              </Box>
            </Box>
          </Grid>

          {/* Right Column: Live Clock Status */}
          <Grid item xs={12} md={3}>
            <Box sx={{ borderTop: '1.5px solid #252525', pt: 3, display: 'flex', flexDirection: 'column' }}>
              <Typography variant="h6" sx={{ fontSize: '0.9rem', mb: 2, letterSpacing: '1.5px' }}>
                СТАТУС СТУДИИ:
              </Typography>
              <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', mb: 0.5, fontSize: '0.8rem' }}>
                {getDutyStatus() === 'ON-DUTY' ? '● В РАБОЧЕЕ ВРЕМЯ ' : '○ ВНЕ ОФИСА '} {timeStr}
              </Typography>
              <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', fontSize: '0.8rem' }}>
                МИНСК, БЕЛАРУСЬ (UTC+3)
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Stats Grid */}
        <Grid 
          container 
          spacing={0} 
          sx={{ 
            mt: 0, 
            borderLeft: '1.5px solid #252525'
          }}
        >
          {[
            { value: '5+', label: 'ЛЕТ ОПЫТА В РАЗРАБОТКЕ' },
            { value: '40+', label: 'СДАННЫХ ПРОЕКТОВ' },
            { value: '99%', label: 'УДОВЛЕТВОРЕННЫХ КЛИЕНТОВ' },
            { value: '100%', label: 'ВНИМАНИЕ К ДЕТАЛЯМ' }
          ].map((stat, idx) => (
            <Grid 
              item 
              xs={6} 
              md={3} 
              key={idx} 
              sx={{ 
                p: { xs: 3, md: 4.5 }, 
                borderRight: '1.5px solid #252525',
                borderBottom: '1.5px solid #252525',
                transition: 'all 0.15s ease-in-out',
                '&:hover': {
                  bgcolor: 'background.paper'
                }
              }}
            >
              <Typography 
                variant="h2" 
                sx={{ 
                  fontWeight: 900, 
                  fontSize: { xs: '2.5rem', md: '3.8rem' }, 
                  color: 'primary.main', 
                  letterSpacing: '-1.5px',
                  mb: 1
                }}
              >
                {stat.value}
              </Typography>
              <Typography 
                variant="caption" 
                sx={{ 
                  color: 'text.secondary', 
                  letterSpacing: '1.5px',
                  fontWeight: 700,
                  fontSize: '0.72rem'
                }}
              >
                {stat.label}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
