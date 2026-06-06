import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#f1f0ee', // Warm off-white
      paper: '#e8e7e4',   // Slightly darker warm gray
    },
    primary: {
      main: '#252525',     // Stark charcoal
      contrastText: '#f1f0ee',
    },
    secondary: {
      main: '#787672',     // Muted gray-brown
    },
    text: {
      primary: '#252525',
      secondary: '#787672',
    },
    divider: 'rgba(37, 37, 37, 0.08)',
  },
  typography: {
    fontFamily: '"Inter", sans-serif',
    h1: {
      fontFamily: '"Barlow Condensed", sans-serif',
      fontWeight: 900,
      textTransform: 'uppercase',
      lineHeight: 0.9,
    },
    h2: {
      fontFamily: '"Barlow Condensed", sans-serif',
      fontWeight: 900,
      textTransform: 'uppercase',
      lineHeight: 0.95,
    },
    h3: {
      fontFamily: '"Barlow Condensed", sans-serif',
      fontWeight: 900,
      textTransform: 'uppercase',
      lineHeight: 0.95,
    },
    h4: {
      fontFamily: '"Barlow Condensed", sans-serif',
      fontWeight: 800,
      textTransform: 'uppercase',
    },
    h5: {
      fontFamily: '"Barlow Condensed", sans-serif',
      fontWeight: 700,
      textTransform: 'uppercase',
    },
    h6: {
      fontFamily: '"Space Mono", monospace',
      fontWeight: 700,
      textTransform: 'uppercase',
    },
    subtitle2: {
      fontFamily: '"Space Mono", monospace',
      textTransform: 'uppercase',
      fontWeight: 700,
    },
    body1: {
      fontFamily: '"Inter", sans-serif',
      lineHeight: 1.6,
    },
    body2: {
      fontFamily: '"Inter", sans-serif',
      lineHeight: 1.6,
    },
    caption: {
      fontFamily: '"Space Mono", monospace',
      textTransform: 'uppercase',
    },
    button: {
      fontFamily: '"Space Mono", monospace',
      textTransform: 'uppercase',
      fontWeight: 700,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        body {
          background-color: #f1f0ee;
          background-image: 
            linear-gradient(rgba(37, 37, 37, 0.015) 1px, transparent 1px),
            linear-gradient(90deg, rgba(37, 37, 37, 0.015) 1px, transparent 1px);
          background-size: 80px 80px;
          background-position: center top;
          position: relative;
        }
      `
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          border: '1.5px solid #252525',
          padding: '12px 28px',
          color: '#252525',
          transition: 'all 0.15s ease-in-out',
          backgroundColor: 'transparent',
          '&:hover': {
            borderColor: '#252525',
            backgroundColor: '#252525',
            color: '#f1f0ee',
          },
        },
        contained: {
          backgroundColor: '#252525',
          color: '#f1f0ee',
          '&:hover': {
            backgroundColor: 'transparent',
            color: '#252525',
          },
        },
        outlined: {
          border: '1.5px solid #252525',
          '&:hover': {
            border: '1.5px solid #252525',
            backgroundColor: '#252525',
            color: '#f1f0ee',
          }
        }
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          fontFamily: '"Space Mono", monospace',
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(37, 37, 37, 0.15)',
            borderWidth: '1.5px',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#252525',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#252525',
            borderWidth: '1.5px',
          },
        },
      },
    },
  },
});
