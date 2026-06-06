import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  TextField, 
  Button, 
  Alert, 
  Stack
} from '@mui/material';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

// Custom Viber SVG Icon
const ViberIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ display: 'block' }}>
    <path d="M19.78 4.22a9.96 9.96 0 0 0-7.06-2.92c-5.5 0-9.98 4.48-9.98 9.98 0 1.94.56 3.76 1.63 5.3L3 22l5.59-1.47a9.92 9.92 0 0 0 4.13.91c5.5 0 9.98-4.48 9.98-9.98a9.96 9.96 0 0 0-2.92-7.06zM12.72 20a8.55 8.55 0 0 1-3.79-.88l-.27-.16-3.32.87.89-3.23-.17-.28a8.53 8.53 0 0 1-1.3-4.54c0-4.73 3.85-8.58 8.58-8.58s8.58 3.85 8.58 8.58-3.85 8.58-8.58 8.58zm3.62-5.91c-.2-.1-.18-.1-.58-.3s-.4-.2-.59-.3-.39-.19-.59.1-.78.98-.96 1.18-.35.2-.75 0a9.42 9.42 0 0 1-2.77-1.71 10.37 10.37 0 0 1-1.92-2.39c-.2-.35-.02-.54.16-.72.16-.16.35-.4.53-.59.18-.2.24-.34.35-.57s.06-.44-.04-.64-.4-.98-.59-1.18c-.19-.2-.39-.19-.59-.19h-.4c-.2 0-.5.08-.76.35a3.1 3.1 0 0 0-1 2.37c0 1.48.67 2.91.96 3.3s2.9 4.43 7.03 6.07c.98.39 1.75.62 2.35.81.99.31 1.89.27 2.6.16.79-.12 2.45-1 2.79-1.97.34-.97.34-1.8.24-1.98-.1-.17-.3-.27-.7-.47z" />
  </svg>
);

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg(null);
    setErrorMsg(null);

    const tgToken = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
    const tgChatId = import.meta.env.VITE_TELEGRAM_CHAT_ID;

    if (tgToken && tgChatId) {
      try {
        const messageText = `<b>Новая заявка c сайта Aether Digital Studio</b>\n\n` +
          `<b>Имя:</b> ${formData.name}\n` +
          `<b>Телефон:</b> ${formData.phone}\n` +
          `<b>Email:</b> ${formData.email}\n` +
          `<b>Сообщение:</b> ${formData.message}`;

        const response = await fetch(`https://api.telegram.org/bot${tgToken}/sendMessage`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            chat_id: tgChatId,
            text: messageText,
            parse_mode: 'HTML'
          })
        });

        const data = await response.json();

        if (response.ok && data.ok) {
          setSuccessMsg('Заявка успешно отправлена! Александр Невский свяжется с вами в ближайшее время.');
          setFormData({ name: '', email: '', phone: '', message: '' });
        } else {
          setErrorMsg(data.description || 'Произошла ошибка при отправке в Telegram.');
        }
      } catch (err) {
        setErrorMsg('Не удалось отправить сообщение в Telegram. Проверьте интернет-соединение.');
      } finally {
        setLoading(false);
      }
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSuccessMsg(data.message);
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setErrorMsg(data.error || 'Произошла ошибка при отправке заявки.');
      }
    } catch (err) {
      setErrorMsg('Не удалось подключиться к серверу. Пожалуйста, попробуйте позже.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box 
      id="contact" 
      sx={{ 
        py: { xs: 8, md: 12 },
        borderBottom: '1.5px solid #252525'
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
                / КОНТАКТЫ
              </Typography>
              <Typography 
                variant="h3" 
                sx={{ 
                  fontSize: { xs: '2rem', md: '2.5rem' }, 
                  fontWeight: 900
                }}
              >
                ОБСУДИМ ПРОЕКТ
              </Typography>
            </Box>
          </Grid>

          {/* Center Column: Form */}
          <Grid item xs={12} md={5}>
            <Box sx={{ borderTop: '1.5px solid #252525', pt: 3 }}>
              {successMsg && (
                <Alert severity="success" sx={{ mb: 4, borderRadius: 0, bgcolor: 'rgba(46, 125, 50, 0.08)', color: '#2e7d32', border: '1.5px solid #2e7d32' }}>
                  {successMsg}
                </Alert>
              )}

              {errorMsg && (
                <Alert severity="error" sx={{ mb: 4, borderRadius: 0, bgcolor: 'rgba(211, 47, 47, 0.08)', color: '#d32f2f', border: '1.5px solid #d32f2f' }}>
                  {errorMsg}
                </Alert>
              )}

              <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Ваше имя"
                      name="name"
                      variant="outlined"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Номер телефона"
                      name="phone"
                      variant="outlined"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Email"
                      name="email"
                      type="email"
                      variant="outlined"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Расскажите о проекте"
                      name="message"
                      multiline
                      rows={4}
                      variant="outlined"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button 
                      type="submit" 
                      variant="contained" 
                      size="large"
                      disabled={loading}
                      sx={{ px: 5, py: 1.8, width: '100%' }}
                    >
                      {loading ? 'Отправка...' : 'Отправить заявку'}
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Box>
          </Grid>

          {/* Right Column: Contact Details & Messengers */}
          <Grid item xs={12} md={4}>
            <Box 
              sx={{ 
                borderTop: '1.5px solid #252525', 
                pt: 3,
                height: '100%'
              }}
            >
              <Typography 
                variant="h4" 
                sx={{ 
                  fontSize: '1.8rem', 
                  mb: 4,
                  fontWeight: 900
                }}
              >
                ПРЯМАЯ СВЯЗЬ
              </Typography>
              
              <Box sx={{ mb: 3.5 }}>
                <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 700 }}>
                  Разработчик
                </Typography>
                <Typography variant="body1" sx={{ fontSize: '1.1rem', fontWeight: 600, mt: 0.5 }}>
                  Невский Александр Владимирович
                </Typography>
              </Box>

              <Box sx={{ mb: 4.5 }}>
                <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 700 }}>
                  Телефон
                </Typography>
                <Typography variant="body1" sx={{ fontSize: '1.1rem', fontWeight: 600, mt: 0.5 }}>
                  +375 (25) 642-91-46
                </Typography>
              </Box>

              <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', mb: 2, fontWeight: 700 }}>
                БЫСТРЫЙ ЧАТ В МЕССЕНДЖЕРАХ
              </Typography>
              
              <Stack spacing={1.5}>
                {/* Telegram Link */}
                <Button 
                  fullWidth 
                  variant="outlined" 
                  startIcon={<TelegramIcon />}
                  href="https://t.me/+375256429146"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ 
                    justifyContent: 'flex-start', 
                    py: 1.5,
                    px: 3,
                    fontWeight: 700
                  }}
                >
                  Telegram
                </Button>

                {/* WhatsApp Link */}
                <Button 
                  fullWidth 
                  variant="outlined" 
                  startIcon={<WhatsAppIcon />}
                  href="https://wa.me/375256429146"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ 
                    justifyContent: 'flex-start', 
                    py: 1.5,
                    px: 3,
                    fontWeight: 700
                  }}
                >
                  WhatsApp
                </Button>

                {/* Viber Link */}
                <Button 
                  fullWidth 
                  variant="outlined" 
                  startIcon={<ViberIcon />}
                  href="viber://chat?number=%2B375256429146"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ 
                    justifyContent: 'flex-start', 
                    py: 1.5,
                    px: 3,
                    fontWeight: 700
                  }}
                  onClick={() => {
                    setTimeout(() => {
                      window.open('https://viber.click/375256429146', '_blank');
                    }, 500);
                  }}
                >
                  Viber
                </Button>
              </Stack>
            </Box>
          </Grid>
          
        </Grid>
      </Container>
    </Box>
  );
}
