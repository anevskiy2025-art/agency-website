import { useState } from 'react';
import { Box, Container, Typography, Grid, Tabs, Tab } from '@mui/material';

import vergeImg from '../assets/verge.png';
import luminaImg from '../assets/lumina.png';
import vesperImg from '../assets/vesper.png';
import onyxImg from '../assets/onyx.png';

const categories = ['Все', 'Веб-сайты', 'Системы', 'Дизайн'];

const projects = [
  {
    title: 'Verge Studio',
    category: 'Веб-сайты',
    desc: 'Портфолио премиум-класса для архитектурного бюро с плавными анимациями и 3D-просмотром.',
    image: vergeImg
  },
  {
    title: 'Lumina Dashboard',
    category: 'Системы',
    desc: 'Аналитическая платформа реального времени с интерактивными графиками и прогнозированием.',
    image: luminaImg
  },
  {
    title: 'Vesper Brand',
    category: 'Дизайн',
    desc: 'Айдентика и визуальный код для бренда селективной парфюмерии.',
    image: vesperImg
  },
  {
    title: 'Onyx Store',
    category: 'Веб-сайты',
    desc: 'Минималистичный интернет-магазин ювелирных изделий с премиальной подачей товаров.',
    image: onyxImg
  }
];

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  const filteredProjects = activeTab === 0 
    ? projects 
    : projects.filter(p => p.category === categories[activeTab]);

  return (
    <Box 
      id="portfolio" 
      sx={{ 
        py: { xs: 8, md: 15 }, 
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)' 
      }}
    >
      <Container maxWidth="xl">
        {/* Header and Filter block */}
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' }, 
          justifyContent: 'space-between', 
          alignItems: { xs: 'flex-start', md: 'flex-end' }, 
          mb: { xs: 6, md: 10 },
          gap: 4
        }}>
          <Box>
            <Typography 
              variant="subtitle2" 
              sx={{ 
                color: 'text.secondary', 
                textTransform: 'uppercase', 
                letterSpacing: '3px',
                mb: 2
              }}
            >
              / НАШИ ПРОЕКТЫ
            </Typography>
            <Typography 
              variant="h2" 
              sx={{ 
                fontSize: { xs: '2.2rem', md: '3.5rem' }, 
                letterSpacing: '-1.5px',
                fontFamily: '"Playfair Display", serif'
              }}
            >
              Избранные кейсы
            </Typography>
          </Box>

          <Tabs 
            value={activeTab} 
            onChange={handleTabChange}
            textColor="inherit"
            indicatorColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              '& .MuiTab-root': {
                fontSize: '0.95rem',
                minWidth: 'auto',
                px: 2,
                color: 'text.secondary',
                '&.Mui-selected': {
                  color: '#FFFFFF'
                }
              },
              '& .MuiTabs-indicator': {
                backgroundColor: '#FFFFFF',
                height: '1px'
              }
            }}
          >
            {categories.map((cat) => (
              <Tab label={cat} key={cat} />
            ))}
          </Tabs>
        </Box>

        {/* Portfolio Grid */}
        <Grid container spacing={4}>
          {filteredProjects.map((project, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Box 
                sx={{
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  p: 2,
                  transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  cursor: 'pointer',
                  '&:hover': {
                    borderColor: '#FFFFFF',
                    transform: 'translateY(-4px)',
                    '& .project-image img': {
                      transform: 'scale(1.03)'
                    }
                  }
                }}
              >
                {/* Visual Image Container */}
                <Box 
                  className="project-image"
                  sx={{
                    height: 280,
                    width: '100%',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    overflow: 'hidden',
                    mb: 3,
                    position: 'relative'
                  }}
                >
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover',
                      transition: 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                    }} 
                  />
                </Box>

                {/* Text Metadata */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                  <Typography 
                    variant="h5" 
                    sx={{ 
                      fontSize: '1.5rem', 
                      fontFamily: '"Playfair Display", serif',
                      fontWeight: 500
                    }}
                  >
                    {project.title}
                  </Typography>
                  <Typography 
                    variant="caption" 
                    sx={{ 
                      color: 'rgba(255, 255, 255, 0.4)', 
                      fontFamily: '"Inter", sans-serif',
                      textTransform: 'uppercase',
                      letterSpacing: '1px'
                    }}
                  >
                    [{project.category}]
                  </Typography>
                </Box>
                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                  {project.desc}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
