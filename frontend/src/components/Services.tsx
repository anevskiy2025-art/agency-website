import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import teamImg from '../assets/team_collab.png';

const services = [
  {
    icon: 'ti-browser',
    title: 'Веб-разработка',
    desc: 'Быстрые и надёжные сайты на React, Next.js, Vue. Адаптивность, чистый код, интеграция с CRM и внешними API.',
    tags: ['React', 'Next.js', 'API'],
    color: '#EEEDFE',
    textColor: '#3C3489',
  },
  {
    icon: 'ti-palette',
    title: 'UI/UX дизайн',
    desc: 'Интуитивные интерфейсы и дизайн-системы. Прототипы в Figma, адаптивный дизайн, визуальный брендинг.',
    tags: ['Figma', 'Прототипы', 'Брендинг'],
    color: '#E1F5EE',
    textColor: '#085041',
  },
  {
    icon: 'ti-shopping-cart',
    title: 'E-commerce',
    desc: 'Интернет-магазины с высокой конверсией. Каталоги, корзины, онлайн-оплата, фильтрация и поиск.',
    tags: ['Каталоги', 'Оплата', 'Поиск'],
    color: '#FAECE7',
    textColor: '#712B13',
  },
  {
    icon: 'ti-chart-line',
    title: 'SEO и аналитика',
    desc: 'Оптимизация для Яндекс и Google. Ускорение загрузки, технический аудит, семантическое ядро.',
    tags: ['SEO-аудит', 'PageSpeed', 'Аналитика'],
    color: '#FAEEDA',
    textColor: '#633806',
  },
];

export default function Services() {
  return (
    <Box id="services" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        {/* Section header */}
        <Box sx={{ mb: { xs: 5, md: 8 }, maxWidth: 560 }}>
          <Typography
            variant="caption"
            sx={{
              color: '#534AB7',
              fontWeight: 500,
              letterSpacing: '1px',
              mb: 1.5,
              display: 'block',
            }}
          >
            Что мы делаем
          </Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.8rem' }, mb: 2 }}>
            Полный цикл разработки цифровых продуктов
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            От идеи до запуска — помогаем бизнесу расти через качественные
            цифровые решения.
          </Typography>
        </Box>

        {/* Service cards grid */}
        <Grid container spacing={3} sx={{ mb: { xs: 6, md: 8 } }}>
          {services.map((s) => (
            <Grid item xs={12} sm={6} key={s.title}>
              <Card
                sx={{
                  height: '100%',
                  transition: 'transform 0.2s ease, border-color 0.2s ease',
                  cursor: 'default',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    borderColor: 'rgba(0,0,0,0.12)',
                  },
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  {/* Icon badge */}
                  <Box
                    sx={{
                      width: 44,
                      height: 44,
                      borderRadius: 2.5,
                      bgcolor: s.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 2.5,
                    }}
                  >
                    <i
                      className={`ti ${s.icon}`}
                      style={{ fontSize: 22, color: s.textColor }}
                      aria-hidden="true"
                    />
                  </Box>

                  <Typography variant="h5" sx={{ fontSize: '1.15rem', mb: 1.5 }}>
                    {s.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{ color: 'text.secondary', mb: 2.5, minHeight: 60 }}
                  >
                    {s.desc}
                  </Typography>

                  {/* Tags */}
                  <Box sx={{ display: 'flex', gap: 0.8, flexWrap: 'wrap' }}>
                    {s.tags.map((tag) => (
                      <Box
                        key={tag}
                        sx={{
                          px: 1.5,
                          py: 0.4,
                          bgcolor: 'rgba(0,0,0,0.03)',
                          borderRadius: 2,
                          fontSize: '0.75rem',
                          fontWeight: 500,
                          color: 'text.secondary',
                        }}
                      >
                        {tag}
                      </Box>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Team photo banner */}
        <Box
          sx={{
            borderRadius: 4,
            overflow: 'hidden',
            border: '0.5px solid rgba(0,0,0,0.06)',
            position: 'relative',
          }}
        >
          <img
            src={teamImg}
            alt="Команда за работой"
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
              maxHeight: 320,
              objectFit: 'cover',
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              p: 3,
              background: 'linear-gradient(transparent, rgba(0,0,0,0.5))',
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
            }}
          >
            <Typography sx={{ color: '#fff', fontWeight: 500 }}>
              Работаем с любовью к деталям
            </Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem' }}>
              Минск, Беларусь
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
