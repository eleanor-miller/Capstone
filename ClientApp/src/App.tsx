import React from 'react'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Home from './pages/Home'
import logo from '/src/logo.svg'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { Typography } from '@mui/material'
import Link from '@mui/material/Link'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      <Link color="inherit" href="#">
        Wip Stitch
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff7f23',
      contrastText: '#110803',
    },
    secondary: {
      main: '#a5c4d4',
      contrastText: '#110803',
    },
    text: {
      primary: '#110803',
      secondary: '#110803',
    },
    divider: '#0b4b6c',
    error: {
      main: '#b65721',
    },
    warning: {
      main: '#b65721',
    },
    info: {
      main: '#a5c4d4',
      contrastText: '#110803',
    },
    success: {
      main: '#0b4b6c',
    },
  },
})

export function App() {
  return (
    <>
      <header>
        <div>
          <a href="#">
            <img
              className="logo"
              src={logo}
              alt="Wip Stitch"
              height={50}
              width={50}
            />
          </a>
          <nav>
            <ul>
              <li>
                <p>Hi, Eleanor!</p>
              </li>
              <li>
                <a href="#">Sign In</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <Home />
      <footer>
        <ThemeProvider theme={theme}>
          <Copyright sx={{ mt: 4, mb: 2 }} />
          <p>
            Made with <FavoriteIcon color="primary" /> in Tampa, Florida.
          </p>
        </ThemeProvider>
      </footer>
    </>
  )
}
