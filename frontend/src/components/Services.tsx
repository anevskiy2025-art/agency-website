import { Box, Container, Typography, Grid } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

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
        py: { xs: 8, md: 12 }, 
        borderBottom: '1.5px solid #252525',
        position: 'relative'
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          
          {/* Left Column: Section Title */}
          <Grid item xs={12} md={3}>
            <Box sx={{ borderTop: '1.5px solid #252525', pt: 3 }}>
              <Typography 
                variant="subtitle2" 
                sx={{ 
                  color: 'text.secondary', 
                  textTransform: 'uppercase', 
                  letterSpacing: '2px',
                  mb: 1,
                  fontWeight: 700
                }}
              >
                / УСЛУГИ
              </Typography>
              <Typography 
                variant="h3" 
                sx={{ 
                  fontSize: { xs: '2rem', md: '2.5rem' }, 
                  fontWeight: 900
                }}
              >
                ЧТО МЫ ДЕЛАЕМ
              </Typography>
            </Box>
          </Grid>

          {/* Right Column: Services Grid */}
          <Grid item xs={12} md={9}>
            <Grid 
              container 
              spacing={0} 
              sx={{ 
                borderTop: '1.5px solid #252525', 
                borderLeft: '1.5px solid #252525' 
              }}
            >
              {services.map((service) => (
                <Grid 
                  item 
                  xs={12} 
                  sm={6} 
                  key={service.num}
                  sx={{
                    borderRight: '1.5px solid #252525',
                    borderBottom: '1.5px solid #252525',
                    p: { xs: 4, md: 5 },
                    position: 'relative',
                    transition: 'all 0.2s ease-in-out',
                    cursor: 'pointer',
                    backgroundColor: 'transparent',
                    color: '#252525',
                    '&:hover': {
                      backgroundColor: '#252525',
                      color: '#f1f0ee',
                      '& .service-num': {
                        color: 'rgba(241, 240, 238, 0.4)',
                      },
                      '& .service-arrow': {
                        color: '#f1f0ee',
                        opacity: 1,
                        transform: 'translateX(0)'
                      },
                      '& .service-tag': {
                        borderColor: 'rgba(241, 240, 238, 0.2)',
                        color: 'rgba(241, 240, 238, 0.7)'
                      }
                    }
                  }}
                >
                  {/* Number and Arrow Header */}
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                    <Typography
                      className="service-num"
                      variant="caption"
                      sx={{
                        color: 'rgba(37, 37, 37, 0.35)',
                        fontSize: '0.85rem',
                        fontWeight: 700,
                        transition: 'color 0.2s ease-in-out'
                      }}
                    >
                      // {service.num}
                    </Typography>
                    
                    <ArrowForwardIcon 
                      className="service-arrow"
                      sx={{ 
                        color: '#252525', 
                        fontSize: '1.2rem',
                        opacity: 0.2,
                        transform: 'translateX(-5px)',
                        transition: 'all 0.2s ease-in-out'
                      }} 
                    />
                  </Box>

                  {/* Service Title */}
                  <Typography
                    variant="h4"
                    sx={{
                      fontSize: '2rem',
                      mb: 2,
                      fontWeight: 900,
                      lineHeight: 1
                    }}
                  >
                    {service.title}
                  </Typography>

                  {/* Service Desc */}
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'inherit',
                      opacity: 0.85,
                      fontSize: '0.95rem',
                      lineHeight: 1.6,
                      mb: 4
                    }}
                  >
                    {service.desc}
                  </Typography>

                  {/* Service Tag Details */}
                  <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                    {service.details.map((detail) => (
                      <Box
                        key={detail}
                        className="service-tag"
                        sx={{
                          px: 1.8,
                          py: 0.5,
                          border: '1.2px solid rgba(37, 37, 37, 0.12)',
                          fontSize: '0.72rem',
                          color: 'text.secondary',
                          fontFamily: '"Space Mono", monospace',
                          transition: 'all 0.2s ease-in-out',
                          fontWeight: 700
                        }}
                      >
                        {detail}
                      </Box>
                    ))}
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
          
        </Grid>
      </Container>
    </Box>
  );
}
