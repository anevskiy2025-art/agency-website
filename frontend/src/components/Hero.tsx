import { useEffect, useState } from 'react';
import { Box, Container, Typography, Button, Chip } from '@mui/material';
import heroImg from '../assets/hero_workspace.png';

export default function Hero() {
  const [time, setTime] = useState('');
  const [isWorking, setIsWorking] = useState(false);

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const fmt = new Intl.DateTimeFormat('ru-RU', {
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'Europe/Minsk',
      });
      setTime(fmt.format(now));
      const h = Number(
        new Intl.DateTimeFormat('en-US', {
          hour: 'numeric',
          hour12: false,
          timeZone: 'Europe/Minsk',
        }).format(now)
      );
      setIsWorking(h >= 9 && h < 20);
    };
    tick();
    const id = setInterval(tick, 30000);
    return () => clearInterval(id);
  }, []);

  return (
    <Box
      id="hero"
      sx={{
        pt: { xs: 8, md: 12 },
        pb: { xs: 8, md: 14 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        {/* Top meta line */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            mb: { xs: 4, md: 5 },
            flexWrap: 'wrap',
          }}
        >
          <Chip
            label={isWorking ? 'На связи' : 'Не в сети'}
            size="small"
            sx={{
              bgcolor: isWorking ? '#E1F5EE' : '#F1EFE8',
              color: isWorking ? '#0F6E56' : '#5F5E5A',
              fontWeight: 500,
              fontSize: '0.78rem',
              '& .MuiChip-label': { px: 1.5 },
            }}
            icon={
              <Box
                sx={{
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  bgcolor: isWorking ? '#1D9E75' : '#888780',
                  ml: 1,
                }}
              />
            }
          />
          <Typography variant="caption" sx={{ color: 'text.secondary' }}>
            Минск, {time}
          </Typography>
        </Box>

        {/* Main heading */}
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.2rem' },
            maxWidth: 720,
            mb: 3,
          }}
        >
          Создаём цифровые продукты, которыми хочется пользоваться
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: 'text.secondary',
            maxWidth: 520,
            fontSize: { xs: '1rem', md: '1.1rem' },
            mb: 5,
          }}
        >
          Веб-разработка, UI/UX дизайн и e-commerce решения для бизнеса,
          который ценит качество и внимание к деталям.
        </Typography>

        {/* CTA buttons */}
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: { xs: 6, md: 8 } }}>
          <Button
            variant="contained"
            size="large"
            onClick={() =>
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
            }
            sx={{ px: 4, py: 1.5 }}
          >
            Обсудить проект
          </Button>
          <Button
            variant="outlined"
            size="large"
            onClick={() =>
              document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' })
            }
            sx={{ px: 4, py: 1.5 }}
          >
            Смотреть работы
          </Button>
        </Box>

        {/* Hero image */}
        <Box
          sx={{
            borderRadius: 4,
            overflow: 'hidden',
            border: '0.5px solid rgba(0,0,0,0.06)',
            position: 'relative',
          }}
        >
          <img
            src={heroImg}
            alt="Рабочее пространство Aether Studio"
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
              maxHeight: 440,
              objectFit: 'cover',
            }}
          />
          {/* Floating stat cards */}
          <Box
            sx={{
              position: 'absolute',
              bottom: 20,
              left: 20,
              display: { xs: 'none', sm: 'flex' },
              gap: 1.5,
            }}
          >
            {[
              { icon: 'ti-code', label: '50+ проектов' },
              { icon: 'ti-users', label: '30+ клиентов' },
              { icon: 'ti-clock', label: '3+ года опыта' },
            ].map((s) => (
              <Box
                key={s.label}
                sx={{
                  bgcolor: 'rgba(255,255,255,0.92)',
                  backdropFilter: 'blur(8px)',
                  borderRadius: 3,
                  px: 2,
                  py: 1,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  border: '0.5px solid rgba(0,0,0,0.06)',
                }}
              >
                <i
                  className={`ti ${s.icon}`}
                  style={{ fontSize: 16, color: '#534AB7' }}
                  aria-hidden="true"
                />
                <Typography variant="caption" sx={{ fontWeight: 500, fontSize: '0.78rem' }}>
                  {s.label}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
