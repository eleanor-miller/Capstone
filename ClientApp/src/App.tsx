import React from 'react'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import logo from '/src/logo.svg'
import FavoriteIcon from '@mui/icons-material/Favorite'

import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'

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
      {/* Test different pages and components here before creating files. */}
      <main className="home">
        {/*<h1>
          <img src={logo} alt="Wip Stitch" height={50} width={50} />
        </h1>
        <form className="search">
          <input type="text" placeholder="Search..." />
        </form>
        <ul className="results">
          <li>
            <h3>Sweater</h3>
            <p>
              <b>Started: </b>01/01/2022
            </p>
            <p>
              <b>Type: </b>Knit
            </p>
          </li>
          <li>
            <h3>Socks</h3>
            <p>
              <b>Started: </b>02/02/2022
            </p>
            <p>
              <b>Type: </b>Knit
            </p>
          </li>
          <li>
            <h3>Blanket</h3>
            <p>
              <b>Started: </b>03/03/2022
            </p>
            <p>
              <b>Type: </b>Crochet
            </p>
          </li>
  </ul> */}
        <SignUp />
      </main>
      <footer>
        <ThemeProvider theme={theme}>
          <p>
            Made with <FavoriteIcon color="primary" /> in Tampa, Florida.
          </p>
        </ThemeProvider>
      </footer>
    </>
  )
}
