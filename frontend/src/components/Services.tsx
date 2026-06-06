import { Box, Container, Typography, Grid } from '@mui/material';

const services = [
  {
    num: '01',
    title: 'Веб-разработка',
    desc: 'Проектирование и создание быстрых, надежных веб-сайтов и веб-приложений. Чистый код, адаптивность под любые устройства и безупречная скорость работы.',
    details: ['React / Vue / Next.js', 'Интеграция CRM & API', 'Админ-панели']
  },
  {
    num: '02',
    title: 'UI/UX Дизайн',
    desc: 'Создание интуитивно понятных интерфейсов и детальных дизайн-систем. Визуальный стиль, который подчеркивает статус бренда и ведет пользователя к действию.',
    details: ['Интерактивные прототипы', 'Адаптивный дизайн', 'Брендинг']
  },
  {
    num: '03',
    title: 'E-commerce решения',
    desc: 'Разработка интернет-магазинов с высокой конверсией. Полная интеграция платежных шлюзов, систем учета товаров, корзины и быстрого заказа.',
    details: ['Каталоги товаров', 'Корзины и онлайн-оплата', 'Фильтрация и поиск']
  },
  {
    num: '04',
    title: 'SEO и оптимизация',
    desc: 'Комплексная оптимизация сайта для высоких позиций в Яндекс и Google. Ускорение времени загрузки, оптимизация контента и технический аудит.',
    details: ['SEO-аудит', 'Оптимизация скорости (PageSpeed)', 'Семантика']
  }
];

export default function Services() {
  return (
    <Box 
      id="services" 
      sx={{ 
        py: { xs: 8, md: 15 }, 
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)' 
      }}
    >
      <Container maxWidth="xl">
        {/* Section Header */}
        <Box sx={{ mb: { xs: 6, md: 10 } }}>
          <Typography 
            variant="subtitle2" 
            sx={{ 
              color: 'text.secondary', 
              textTransform: 'uppercase', 
              letterSpacing: '3px',
              mb: 2
            }}
          >
            / ЧТО МЫ ДЕЛАЕМ
          </Typography>
          <Typography 
            variant="h2" 
            sx={{ 
              fontSize: { xs: '2.2rem', md: '3.5rem' }, 
              letterSpacing: '-1.5px',
              fontFamily: '"Playfair Display", serif'
            }}
          >
            Наши ключевые компетенции
          </Typography>
        </Box>

        {/* Services Grid */}
        <Grid container spacing={0} sx={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', borderLeft: '1px solid rgba(255, 255, 255, 0.08)' }}>
          {services.map((service) => (
            <Grid 
              item 
              xs={12} 
              md={6} 
              key={service.num}
              sx={{
                borderRight: '1px solid rgba(255, 255, 255, 0.08)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                p: { xs: 4, md: 6 },
                position: 'relative',
                transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                cursor: 'pointer',
                backgroundColor: 'transparent',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.02)',
                  '& .service-num': {
                    color: '#FFFFFF',
                    transform: 'translateX(5px)'
                  }
                }
              }}
            >
              {/* Service Number */}
              <Typography
                className="service-num"
                variant="subtitle2"
                sx={{
                  color: 'rgba(255, 255, 255, 0.25)',
                  fontSize: '1rem',
                  fontWeight: 600,
                  mb: 3,
                  display: 'inline-block',
                  transition: 'all 0.3s ease'
                }}
              >
                // {service.num}
              </Typography>

              {/* Service Title */}
              <Typography
                variant="h4"
                sx={{
                  fontSize: '1.8rem',
                  mb: 2,
                  fontFamily: '"Playfair Display", serif',
                  fontWeight: 500
                }}
              >
                {service.title}
              </Typography>

              {/* Service Desc */}
              <Typography
                variant="body2"
                sx={{
                  color: 'text.secondary',
                  fontSize: '1rem',
                  lineHeight: 1.6,
                  mb: 4
                }}
              >
                {service.desc}
              </Typography>

              {/* Service Tag Details */}
              <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap' }}>
                {service.details.map((detail) => (
                  <Box
                    key={detail}
                    sx={{
                      px: 2,
                      py: 0.5,
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      fontSize: '0.8rem',
                      color: 'text.secondary',
                      fontFamily: '"Inter", sans-serif'
                    }}
                  >
                    {detail}
                  </Box>
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
