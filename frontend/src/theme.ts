import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#0A0A0C', // Off-black base
      paper: '#121215',   // Slightly lighter card/panel background
    },
    primary: {
      main: '#FFFFFF',     // Clean white elements
      contrastText: '#0A0A0C',
    },
    secondary: {
      main: '#8F9094',     // Muted gray
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#8F9094',
    },
    divider: 'rgba(255, 255, 255, 0.08)', // Fine lines for grid layout
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
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0, // Sharp corners to match duties.xyz grid style
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
          color: '#0A0A0C',
          '&:hover': {
            backgroundColor: '#E6E6E6',
            color: '#0A0A0C',
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(255, 255, 255, 0.15)',
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
