import { useState } from 'react';
import { Box, Container, Typography, Grid, Tabs, Tab } from '@mui/material';

const categories = ['Все', 'Веб-сайты', 'Системы', 'Дизайн'];

const projects = [
  {
    title: 'Verge Studio',
    category: 'Веб-сайты',
    desc: 'Портфолио премиум-класса для архитектурного бюро с плавными анимациями и 3D-просмотром.',
    svgPattern: (
      <svg width="100%" height="100%" style={{ backgroundColor: '#111114' }}>
        <defs>
          <pattern id="grid1" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid1)" />
        <line x1="10%" y1="10%" x2="90%" y2="90%" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1" />
        <line x1="90%" y1="10%" x2="10%" y2="90%" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1" />
        <circle cx="50%" cy="50%" r="40" fill="none" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="1" />
        <text x="50%" y="53%" fill="rgba(255,255,255,0.15)" fontSize="18" fontFamily="serif" textAnchor="middle">ARCH</text>
      </svg>
    )
  },
  {
    title: 'Lumina Dashboard',
    category: 'Системы',
    desc: 'Аналитическая платформа реального времени с интерактивными графиками и прогнозированием.',
    svgPattern: (
      <svg width="100%" height="100%" style={{ backgroundColor: '#111114' }}>
        <defs>
          <pattern id="grid2" width="40" height="40" patternUnits="userSpaceOnUse">
            <rect width="40" height="40" fill="none" stroke="rgba(255,255,255,0.02)" strokeWidth="1"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid2)" />
        <path d="M 20 180 Q 80 50, 150 120 T 300 30" fill="none" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="2" />
        <path d="M 20 180 Q 80 90, 150 140 T 300 70" fill="none" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="1" />
        <circle cx="150" cy="120" r="4" fill="#FFFFFF" />
        <circle cx="300" cy="30" r="4" fill="#FFFFFF" />
        <text x="30" y="40" fill="rgba(255,255,255,0.15)" fontSize="12" fontFamily="monospace">SYS.STATUS: ACTIVE</text>
      </svg>
    )
  },
  {
    title: 'Vesper Brand',
    category: 'Дизайн',
    desc: 'Айдентика и визуальный код для бренда селективной парфюмерии.',
    svgPattern: (
      <svg width="100%" height="100%" style={{ backgroundColor: '#111114' }}>
        <rect width="100%" height="100%" fill="#111114" />
        <text x="50%" y="55%" fill="rgba(255,255,255,0.08)" fontSize="90" fontFamily="Playfair Display" fontWeight="300" textAnchor="middle" dominantBaseline="middle">V</text>
        <text x="50%" y="80%" fill="rgba(255,255,255,0.3)" fontSize="14" fontFamily="Inter" letterSpacing="4" textAnchor="middle">VESPER LAB</text>
        <line x1="20%" y1="70%" x2="80%" y2="70%" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
      </svg>
    )
  },
  {
    title: 'Onyx Store',
    category: 'Веб-сайты',
    desc: 'Минималистичный интернет-магазин ювелирных изделий с премиальной подачей товаров.',
    svgPattern: (
      <svg width="100%" height="100%" style={{ backgroundColor: '#111114' }}>
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: 'rgba(255,255,255,0.02)', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: 'rgba(255,255,255,0.08)', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#grad1)" />
        <polygon points="150,40 230,110 190,180 110,180 70,110" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
        <line x1="150" y1="40" x2="190" y2="180" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
        <line x1="150" y1="40" x2="110" y2="180" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
        <text x="150" y="210" fill="rgba(255,255,255,0.2)" fontSize="11" fontFamily="Inter" letterSpacing="2" textAnchor="middle">FINE JEWELRY</text>
      </svg>
    )
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
                    '& .project-image': {
                      borderColor: 'rgba(255, 255, 255, 0.2)'
                    }
                  }
                }}
              >
                {/* Visual SVG Panel Container */}
                <Box 
                  className="project-image"
                  sx={{
                    height: 280,
                    width: '100%',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    overflow: 'hidden',
                    mb: 3,
                    transition: 'border-color 0.3s ease'
                  }}
                >
                  {project.svgPattern}
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
