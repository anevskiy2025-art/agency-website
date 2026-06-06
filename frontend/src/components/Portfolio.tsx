import { useState } from 'react';
import { Box, Container, Typography, Grid, Chip, IconButton } from '@mui/material';

import verge1 from '../assets/verge_1.png';
import verge2 from '../assets/verge_2.png';
import verge3 from '../assets/verge_3.png';
import verge4 from '../assets/verge_4.png';
import verge5 from '../assets/verge_5.png';

import lumina1 from '../assets/lumina_1.png';
import lumina2 from '../assets/lumina_2.png';
import lumina3 from '../assets/lumina_3.png';
import lumina4 from '../assets/lumina_4.png';
import lumina5 from '../assets/lumina_5.png';

import vesper1 from '../assets/vesper_1.png';
import vesper2 from '../assets/vesper_2.png';
import vesper3 from '../assets/vesper_3.png';

import onyx1 from '../assets/onyx_1.png';

const categories = ['Все', 'Веб-сайты', 'Системы', 'Дизайн'];

interface Project {
  title: string;
  category: string;
  desc: string;
  images: string[];
  tags: string[];
}

const projects: Project[] = [
  {
    title: 'Verge Studio',
    category: 'Веб-сайты',
    desc: 'Портфолио премиум-класса для архитектурного бюро с анимациями и 3D-просмотром.',
    images: [verge1, verge2, verge3, verge4, verge5],
    tags: ['React', '3D', 'Анимации'],
  },
  {
    title: 'Lumina Dashboard',
    category: 'Системы',
    desc: 'Аналитическая платформа реального времени с графиками и прогнозированием.',
    images: [lumina1, lumina2, lumina3, lumina4, lumina5],
    tags: ['SaaS', 'Графики', 'API'],
  },
  {
    title: 'Vesper Brand',
    category: 'Дизайн',
    desc: 'Айдентика и визуальный код для бренда селективной парфюмерии.',
    images: [vesper1, vesper2, vesper3],
    tags: ['Брендинг', 'Упаковка', 'Фирменный стиль'],
  },
  {
    title: 'Onyx Store',
    category: 'Веб-сайты',
    desc: 'Минималистичный интернет-магазин ювелирных изделий с премиальной подачей.',
    images: [onyx1],
    tags: ['E-commerce', 'Каталог', 'Оплата'],
  },
];

function ImageCarousel({ images, title }: { images: string[]; title: string }) {
  const [idx, setIdx] = useState(0);
  const total = images.length;

  const prev = () => setIdx((i) => (i - 1 + total) % total);
  const next = () => setIdx((i) => (i + 1) % total);

  return (
    <Box sx={{ position: 'relative', borderRadius: 3, overflow: 'hidden', bgcolor: '#f0efed' }}>
      <img
        src={images[idx]}
        alt={`${title} — скриншот ${idx + 1}`}
        style={{
          width: '100%',
          height: 280,
          objectFit: 'cover',
          display: 'block',
          transition: 'opacity 0.3s ease',
        }}
      />
      {total > 1 && (
        <>
          {/* Navigation arrows */}
          <IconButton
            onClick={prev}
            size="small"
            aria-label="Предыдущий"
            sx={{
              position: 'absolute',
              left: 8,
              top: '50%',
              transform: 'translateY(-50%)',
              bgcolor: 'rgba(255,255,255,0.85)',
              backdropFilter: 'blur(4px)',
              width: 32,
              height: 32,
              '&:hover': { bgcolor: 'rgba(255,255,255,0.95)' },
            }}
          >
            <i className="ti ti-chevron-left" style={{ fontSize: 16 }} />
          </IconButton>
          <IconButton
            onClick={next}
            size="small"
            aria-label="Следующий"
            sx={{
              position: 'absolute',
              right: 8,
              top: '50%',
              transform: 'translateY(-50%)',
              bgcolor: 'rgba(255,255,255,0.85)',
              backdropFilter: 'blur(4px)',
              width: 32,
              height: 32,
              '&:hover': { bgcolor: 'rgba(255,255,255,0.95)' },
            }}
          >
            <i className="ti ti-chevron-right" style={{ fontSize: 16 }} />
          </IconButton>

          {/* Dot indicators */}
          <Box
            sx={{
              position: 'absolute',
              bottom: 10,
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              gap: 0.6,
            }}
          >
            {images.map((_, i) => (
              <Box
                key={i}
                onClick={() => setIdx(i)}
                sx={{
                  width: i === idx ? 16 : 6,
                  height: 6,
                  borderRadius: 3,
                  bgcolor: i === idx ? '#fff' : 'rgba(255,255,255,0.5)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              />
            ))}
          </Box>
        </>
      )}
    </Box>
  );
}

export default function Portfolio() {
  const [active, setActive] = useState(0);

  const filtered =
    active === 0
      ? projects
      : projects.filter((p) => p.category === categories[active]);

  return (
    <Box id="portfolio" sx={{ py: { xs: 8, md: 12 }, bgcolor: '#ffffff' }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ mb: { xs: 4, md: 6 } }}>
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
            Портфолио
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: 'space-between',
              alignItems: { xs: 'flex-start', md: 'flex-end' },
              gap: 3,
            }}
          >
            <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.8rem' } }}>
              Избранные проекты
            </Typography>

            {/* Filter chips */}
            <Box sx={{ display: 'flex', gap: 1 }}>
              {categories.map((cat, i) => (
                <Chip
                  key={cat}
                  label={cat}
                  size="small"
                  onClick={() => setActive(i)}
                  sx={{
                    fontWeight: 500,
                    fontSize: '0.8rem',
                    bgcolor: i === active ? '#1a1a1a' : 'transparent',
                    color: i === active ? '#fff' : 'text.secondary',
                    border: i === active ? 'none' : '0.5px solid rgba(0,0,0,0.1)',
                    '&:hover': {
                      bgcolor: i === active ? '#1a1a1a' : 'rgba(0,0,0,0.04)',
                    },
                  }}
                />
              ))}
            </Box>
          </Box>
        </Box>

        {/* Project grid */}
        <Grid container spacing={3}>
          {filtered.map((project, idx) => (
            <Grid item xs={12} sm={6} key={idx}>
              <Box
                sx={{
                  bgcolor: '#fff',
                  borderRadius: 4,
                  border: '0.5px solid rgba(0,0,0,0.06)',
                  overflow: 'hidden',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 30px rgba(0,0,0,0.06)',
                  },
                }}
              >
                {/* Image carousel */}
                <ImageCarousel images={project.images} title={project.title} />

                {/* Meta */}
                <Box sx={{ p: 2.5 }}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      mb: 1,
                    }}
                  >
                    <Typography variant="h5" sx={{ fontSize: '1.1rem' }}>
                      {project.title}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{ color: 'text.secondary', fontSize: '0.72rem' }}
                    >
                      {project.category}
                    </Typography>
                  </Box>
                  <Typography
                    variant="body2"
                    sx={{ color: 'text.secondary', mb: 2, fontSize: '0.85rem' }}
                  >
                    {project.desc}
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 0.8, flexWrap: 'wrap' }}>
                    {project.tags.map((tag) => (
                      <Box
                        key={tag}
                        sx={{
                          px: 1.2,
                          py: 0.3,
                          bgcolor: '#EEEDFE',
                          borderRadius: 1.5,
                          fontSize: '0.72rem',
                          fontWeight: 500,
                          color: '#534AB7',
                        }}
                      >
                        {tag}
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
