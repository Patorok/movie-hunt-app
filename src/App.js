import './App.css';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import MovieUi from './sections/MovieUi/MovieUi';
import AboutMeUi from './sections/AboutMeUi/AboutMeUi';

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: [
        '-apple-system',
        'sans-serif'
      ].join(','),
    },
    palette: {
      primary: {
        main: "#002D62"
      },
      secondary: {
        main: "#5072A7"
      },
      error: {
        main: "#9e1b32"
      },
      warning: {
        main: "#fbc02d"
      },
      info: {
        main: "#2196f3"
      },
      success: {
        main: "#4caf50"
      }
    }
  });
  
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <MovieUi />
        <AboutMeUi />
      </ThemeProvider>
    </div>
  );
}

export default App;
