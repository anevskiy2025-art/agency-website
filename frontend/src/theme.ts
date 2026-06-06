import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#050507', // Deep luxury black
      paper: '#0C0C0F',   // Slightly lighter cards
    },
    primary: {
      main: '#FFFFFF',
      contrastText: '#050507',
    },
    secondary: {
      main: '#8F9094',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#8F9094',
    },
    divider: 'rgba(255, 255, 255, 0.06)',
  },
  typography: {
    fontFamily: '"Inter", sans-serif',
    h1: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 500,
    },
    h2: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 500,
    },
    h3: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 500,
    },
    h4: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 500,
    },
    h5: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 500,
    },
    h6: {
      fontFamily: '"Inter", sans-serif',
      fontWeight: 600,
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
      fontFamily: '"Inter", sans-serif',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        body {
          background-color: #050507;
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.015) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.015) 1px, transparent 1px);
          background-size: 100px 100px;
          background-position: center top;
          position: relative;
        }
        body::before {
          content: "";
          position: absolute;
          top: 0;
          left: 50%;
          transform: translate(-50%, 0);
          width: 100%;
          max-width: 1600px;
          height: 800px;
          background: radial-gradient(circle at 50% 0%, rgba(115, 9, 243, 0.12) 0%, rgba(115, 9, 243, 0.02) 50%, rgba(0,0,0,0) 100%);
          z-index: 0;
          pointer-events: none;
        }
      `
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          border: '1px solid rgba(255, 255, 255, 0.15)',
          padding: '10px 24px',
          color: '#FFFFFF',
          transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          backgroundColor: 'transparent',
          '&:hover': {
            borderColor: '#FFFFFF',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            transform: 'translateY(-2px)',
          },
        },
        contained: {
          backgroundColor: '#FFFFFF',
          color: '#050507',
          '&:hover': {
            backgroundColor: '#E6E6E6',
            color: '#050507',
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(255, 255, 255, 0.12)',
            transition: 'border-color 0.3s ease',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#FFFFFF',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#FFFFFF',
            borderWidth: '1px',
          },
        },
      },
    },
  },
});
