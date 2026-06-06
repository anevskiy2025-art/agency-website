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
        py: { xs: 8, md: 12 }, 
        borderBottom: '1.5px solid #252525' 
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          
          {/* Left Column: Title & Filters */}
          <Grid item xs={12} md={3}>
            <Box sx={{ borderTop: '1.5px solid #252525', pt: 3, position: { md: 'sticky' }, top: 120 }}>
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
                / ПОРТФОЛИО
              </Typography>
              <Typography 
                variant="h3" 
                sx={{ 
                  fontSize: { xs: '2rem', md: '2.5rem' }, 
                  fontWeight: 900,
                  mb: 3
                }}
              >
                ИЗБРАННЫЕ КЕЙСЫ
              </Typography>

              <Tabs 
                value={activeTab} 
                onChange={handleTabChange}
                textColor="inherit"
                variant="scrollable"
                scrollButtons="auto"
                sx={{
                  '& .MuiTabs-flexContainer': {
                    gap: 1,
                    flexWrap: { xs: 'nowrap', md: 'wrap' }
                  },
                  '& .MuiTab-root': {
                    fontFamily: '"Space Mono", monospace',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    minWidth: 'auto',
                    px: 1.8,
                    py: 0.8,
                    border: '1.5px solid #252525',
                    color: '#252525',
                    borderRadius: 0,
                    transition: 'all 0.15s ease-in-out',
                    '&.Mui-selected': {
                      color: '#f1f0ee',
                      backgroundColor: '#252525'
                    }
                  },
                  '& .MuiTabs-indicator': {
                    display: 'none'
                  }
                }}
              >
                {categories.map((cat) => (
                  <Tab label={cat.toUpperCase()} key={cat} />
                ))}
              </Tabs>
            </Box>
          </Grid>

          {/* Right Column: Grid List */}
          <Grid item xs={12} md={9}>
            <Grid 
              container 
              spacing={0} 
              sx={{ 
                borderTop: '1.5px solid #252525',
                borderLeft: '1.5px solid #252525'
              }}
            >
              {filteredProjects.map((project, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Box 
                    sx={{
                      borderRight: '1.5px solid #252525',
                      borderBottom: '1.5px solid #252525',
                      p: { xs: 3, md: 4.5 },
                      bgcolor: 'background.default',
                      transition: 'all 0.15s ease-in-out',
                      cursor: 'pointer',
                      '&:hover': {
                        bgcolor: 'background.paper',
                        '& img': {
                          transform: 'scale(1.025)'
                        }
                      }
                    }}
                  >
                    {/* Visual Image Container */}
                    <Box 
                      sx={{
                        height: { xs: 220, md: 280 },
                        width: '100%',
                        border: '1.5px solid #252525',
                        overflow: 'hidden',
                        mb: 3,
                        position: 'relative',
                        bgcolor: '#eae8e4'
                      }}
                    >
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        style={{ 
                          width: '100%', 
                          height: '100%', 
                          objectFit: 'cover',
                          transition: 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                        }} 
                      />
                    </Box>

                    {/* Text Metadata */}
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1.5 }}>
                      <Typography 
                        variant="h4" 
                        sx={{ 
                          fontSize: '1.8rem', 
                          fontWeight: 900,
                          lineHeight: 1
                        }}
                      >
                        {project.title}
                      </Typography>
                      <Typography 
                        variant="caption" 
                        sx={{ 
                          color: 'text.secondary', 
                          fontFamily: '"Space Mono", monospace',
                          fontWeight: 700,
                          fontSize: '0.72rem'
                        }}
                      >
                        [{project.category.toUpperCase()}]
                      </Typography>
                    </Box>
                    <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.92rem', lineHeight: 1.6 }}>
                      {project.desc}
                    </Typography>
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
