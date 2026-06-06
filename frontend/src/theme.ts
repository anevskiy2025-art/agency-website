import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#faf9f7',
      paper: '#ffffff',
    },
    primary: {
      main: '#534AB7',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#1D9E75',
    },
    text: {
      primary: '#1a1a1a',
      secondary: '#6b6b6b',
    },
    divider: 'rgba(0, 0, 0, 0.06)',
  },
  shape: {
    borderRadius: 12,
  },
  typography: {
    fontFamily: '"DM Sans", sans-serif',
    h1: {
      fontFamily: '"DM Serif Display", serif',
      fontWeight: 400,
      lineHeight: 1.1,
    },
    h2: {
      fontFamily: '"DM Serif Display", serif',
      fontWeight: 400,
      lineHeight: 1.15,
    },
    h3: {
      fontFamily: '"DM Serif Display", serif',
      fontWeight: 400,
      lineHeight: 1.2,
    },
    h4: {
      fontFamily: '"DM Sans", sans-serif',
      fontWeight: 500,
    },
    h5: {
      fontFamily: '"DM Sans", sans-serif',
      fontWeight: 500,
    },
    h6: {
      fontFamily: '"DM Sans", sans-serif',
      fontWeight: 500,
    },
    body1: {
      fontFamily: '"DM Sans", sans-serif',
      fontWeight: 400,
      lineHeight: 1.7,
      fontSize: '1rem',
    },
    body2: {
      fontFamily: '"DM Sans", sans-serif',
      fontWeight: 400,
      lineHeight: 1.7,
      fontSize: '0.9rem',
    },
    caption: {
      fontFamily: '"DM Sans", sans-serif',
      fontWeight: 500,
      fontSize: '0.8rem',
      letterSpacing: '0.5px',
    },
    button: {
      fontFamily: '"DM Sans", sans-serif',
      fontWeight: 500,
      textTransform: 'none',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        body { background-color: #faf9f7; }
      `
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 40,
          padding: '10px 28px',
          fontSize: '0.95rem',
          transition: 'all 0.2s ease',
        },
        contained: {
          boxShadow: 'none',
          '&:hover': { boxShadow: 'none', transform: 'translateY(-1px)' },
        },
        outlined: {
          borderWidth: '1.5px',
          '&:hover': { borderWidth: '1.5px', transform: 'translateY(-1px)' },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(0, 0, 0, 0.1)',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#534AB7',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#534AB7',
            borderWidth: '1.5px',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: 'none',
          border: '0.5px solid rgba(0, 0, 0, 0.06)',
        },
      },
    },
  },
});
