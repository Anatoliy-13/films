import React from 'react';

import { CssBaseline, createTheme } from "@mui/material";
import { ThemeProvider } from '@emotion/react';
import { teal } from '@mui/material/colors';
import { Outlet } from 'react-router-dom';
import { AppHeader } from './AppHeader';



const defaultTheme = createTheme({
  palette: {
    primary: teal,
    secondary: {
      main: "#96000f",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppHeader />
      <main>
        <Outlet />
      </main>
    </ThemeProvider>
  );
}

export default App;
