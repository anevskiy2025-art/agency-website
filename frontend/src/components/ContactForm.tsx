import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Alert,
  Card,
  CardContent,
} from '@mui/material';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
        const text =
          `<b>Новая заявка — Aether Digital Studio</b>\n\n` +
          `<b>Имя:</b> ${formData.name}\n` +
          `<b>Телефон:</b> ${formData.phone}\n` +
          `<b>Email:</b> ${formData.email}\n` +
          `<b>Сообщение:</b> ${formData.message}`;

        const res = await fetch(
          `https://api.telegram.org/bot${tgToken}/sendMessage`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              chat_id: tgChatId,
              text,
              parse_mode: 'HTML',
            }),
          }
        );
        const data = await res.json();
        if (res.ok && data.ok) {
          setSuccessMsg('Заявка отправлена! Свяжемся с вами в ближайшее время.');
          setFormData({ name: '', email: '', phone: '', message: '' });
        } else {
          setErrorMsg(data.description || 'Ошибка при отправке.');
        }
      } catch {
        setErrorMsg('Не удалось отправить. Проверьте подключение к интернету.');
      } finally {
        setLoading(false);
      }
      return;
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setSuccessMsg(data.message);
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setErrorMsg(data.error || 'Произошла ошибка.');
      }
    } catch {
      setErrorMsg('Сервер недоступен. Попробуйте позже.');
    } finally {
      setLoading(false);
    }
  };

  const messengers = [
    {
      name: 'Telegram',
      icon: 'ti-brand-telegram',
      href: 'https://t.me/+375256429146',
      color: '#0088cc',
      bg: '#E6F1FB',
    },
    {
      name: 'WhatsApp',
      icon: 'ti-brand-whatsapp',
      href: 'https://wa.me/375256429146',
      color: '#25D366',
      bg: '#E1F5EE',
    },
    {
      name: 'Viber',
      icon: 'ti-phone',
      href: 'viber://chat?number=%2B375256429146',
      color: '#7360F2',
      bg: '#EEEDFE',
    },
  ];

  return (
    <Box id="contact" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: { xs: 4, md: 6 }, maxWidth: 480 }}>
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
            Контакты
          </Typography>
          <Typography
            variant="h2"
            sx={{ fontSize: { xs: '2rem', md: '2.8rem' }, mb: 1.5 }}
          >
            Обсудим ваш проект
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            Расскажите о задаче — предложим решение в течение дня.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {/* Form */}
          <Grid item xs={12} md={7}>
            <Card>
              <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                {successMsg && (
                  <Alert
                    severity="success"
                    sx={{ mb: 3, borderRadius: 2 }}
                    onClose={() => setSuccessMsg(null)}
                  >
                    {successMsg}
                  </Alert>
                )}
                {errorMsg && (
                  <Alert
                    severity="error"
                    sx={{ mb: 3, borderRadius: 2 }}
                    onClose={() => setErrorMsg(null)}
                  >
                    {errorMsg}
                  </Alert>
                )}

                <form onSubmit={handleSubmit}>
                  <Grid container spacing={2.5}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Ваше имя"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Телефон"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Расскажите о проекте"
                        name="message"
                        multiline
                        rows={4}
                        required
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        disabled={loading}
                        fullWidth
                        sx={{ py: 1.5 }}
                      >
                        {loading ? 'Отправка...' : 'Отправить заявку'}
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </CardContent>
            </Card>
          </Grid>

          {/* Right side — contact info */}
          <Grid item xs={12} md={5}>
            <Box sx={{ mb: 4 }}>
              <Typography
                variant="h5"
                sx={{ fontSize: '1.1rem', mb: 2 }}
              >
                Прямая связь
              </Typography>

              <Box sx={{ mb: 3 }}>
                <Typography
                  variant="caption"
                  sx={{ color: 'text.secondary', display: 'block', mb: 0.3 }}
                >
                  Разработчик
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  Невский Александр Владимирович
                </Typography>
              </Box>

              <Box sx={{ mb: 3 }}>
                <Typography
                  variant="caption"
                  sx={{ color: 'text.secondary', display: 'block', mb: 0.3 }}
                >
                  Телефон
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  +375 (25) 642-91-46
                </Typography>
              </Box>
            </Box>

            {/* Messenger buttons */}
            <Typography variant="caption" sx={{ color: 'text.secondary', mb: 2, display: 'block' }}>
              Напишите в мессенджер
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              {messengers.map((m) => (
                <Button
                  key={m.name}
                  href={m.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outlined"
                  startIcon={
                    <i
                      className={`ti ${m.icon}`}
                      style={{ fontSize: 18, color: m.color }}
                      aria-hidden="true"
                    />
                  }
                  sx={{
                    justifyContent: 'flex-start',
                    borderColor: 'rgba(0,0,0,0.08)',
                    color: 'text.primary',
                    fontWeight: 500,
                    py: 1.3,
                    px: 2.5,
                    '&:hover': {
                      bgcolor: m.bg,
                      borderColor: m.color,
                    },
                  }}
                >
                  {m.name}
                </Button>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
