import { Box, Container, Typography, Button, Grid } from '@mui/material';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <Box
      component="footer"
      sx={{
        pt: { xs: 6, md: 8 },
        pb: { xs: 4, md: 5 },
        borderTop: '0.5px solid rgba(0,0,0,0.06)',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} sx={{ mb: 6 }}>
          {/* Brand */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: '"DM Serif Display", serif',
                fontWeight: 400,
                fontSize: '1.3rem',
                mb: 1.5,
              }}
            >
              Æther
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: 'text.secondary', maxWidth: 280 }}
            >
              Создаём цифровые продукты с вниманием к каждой детали.
              Минск, Беларусь.
            </Typography>
          </Grid>

          {/* Navigation */}
          <Grid item xs={6} md={2}>
            <Typography
              variant="caption"
              sx={{
                color: 'text.secondary',
                display: 'block',
                mb: 2,
                fontWeight: 500,
              }}
            >
              Навигация
            </Typography>
            {['Услуги', 'Портфолио', 'Контакты'].map((label) => (
              <Button
                key={label}
                size="small"
                onClick={() => {
                  const id = label === 'Услуги' ? '#services' : label === 'Портфолио' ? '#portfolio' : '#contact';
                  document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
                }}
                sx={{
                  display: 'block',
                  color: 'text.secondary',
                  fontWeight: 400,
                  fontSize: '0.85rem',
                  p: 0,
                  mb: 1,
                  minWidth: 0,
                  textAlign: 'left',
                  '&:hover': { color: 'text.primary', bgcolor: 'transparent' },
                }}
              >
                {label}
              </Button>
            ))}
          </Grid>

          {/* Social */}
          <Grid item xs={6} md={3}>
            <Typography
              variant="caption"
              sx={{
                color: 'text.secondary',
                display: 'block',
                mb: 2,
                fontWeight: 500,
              }}
            >
              Соцсети
            </Typography>
            {[
              { label: 'Telegram', href: 'https://t.me/+375256429146', icon: 'ti-brand-telegram' },
              { label: 'GitHub', href: 'https://github.com/anevskiy2025-art', icon: 'ti-brand-github' },
            ].map((link) => (
              <Button
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                size="small"
                startIcon={
                  <i className={`ti ${link.icon}`} style={{ fontSize: 15 }} aria-hidden="true" />
                }
                sx={{
                  display: 'flex',
                  color: 'text.secondary',
                  fontWeight: 400,
                  fontSize: '0.85rem',
                  p: 0,
                  mb: 1,
                  minWidth: 0,
                  '&:hover': { color: 'text.primary', bgcolor: 'transparent' },
                }}
              >
                {link.label}
              </Button>
            ))}
          </Grid>

          {/* Back to top */}
          <Grid item xs={12} md={3} sx={{ display: 'flex', alignItems: { xs: 'flex-start', md: 'flex-start' }, justifyContent: { md: 'flex-end' } }}>
            <Button
              onClick={scrollToTop}
              variant="outlined"
              size="small"
              startIcon={<i className="ti ti-arrow-up" style={{ fontSize: 15 }} aria-hidden="true" />}
              sx={{ borderRadius: 3 }}
            >
              Наверх
            </Button>
          </Grid>
        </Grid>

        {/* Bottom line */}
        <Box
          sx={{
            pt: 3,
            borderTop: '0.5px solid rgba(0,0,0,0.06)',
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            gap: 1,
          }}
        >
          <Typography variant="caption" sx={{ color: 'text.secondary' }}>
            © {new Date().getFullYear()} Aether Digital Studio
          </Typography>
          <Typography variant="caption" sx={{ color: 'text.secondary' }}>
            Разработка: Невский Александр Владимирович
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
