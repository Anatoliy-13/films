import React from 'react';
import styles from './App.module.scss';
import { Link as RouterLink, Outlet } from 'react-router-dom';
import { AppBar, CssBaseline, Link, Toolbar, Typography, createTheme } from "@mui/material";
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';
import { ThemeProvider } from '@emotion/react';
import { teal } from '@mui/material/colors';


function HeaderLink({ children, to }: { to: string, children: React.ReactNode }) {
  return (
    <Link
      component={RouterLink}
      to={to}
      variant='button'
      color='inherit'
      sx={{my: 1, mx: 1.5}}
    >{children}</Link>
  )
}

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
      <AppBar>
        <Toolbar>
          <LiveTvOutlinedIcon sx={{ mr: 2 }} />
          <Typography variant='h6' color='inherit' noWrap>
            The movies DB
          </Typography>
            <nav>
                <HeaderLink to="/">Home</HeaderLink>
                <HeaderLink to="/Movies">Movies</HeaderLink>
                <HeaderLink to="/About">About</HeaderLink>
            </nav>
        </Toolbar>
      </AppBar>
      <main>
        <Outlet />
      </main>
    </ThemeProvider>
  );
}

export default App;
