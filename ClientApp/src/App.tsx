import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from 'react-router-dom'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Project from './pages/Project'
import Home from './pages/Home'
import logo from '/src/logo.svg'
import { User } from './Types'
import FavoriteIcon from '@mui/icons-material/Favorite'
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
  const [user, setUser] = useState<User | null>(null)

  return (
    <>
      <Router>
        <header>
          <div>
            <a href="/Home">
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
                  <p>
                    Hi, currentUser={user} setUser={setUser}!
                  </p>
                </li>
                <li>
                  <a href="/SignIn">Sign In</a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route
            path="/SignIn"
            element={<SignIn user={user} setUser={setUser} />}
          />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Project" element={<Project />} />
        </Routes>
        <footer className="footer">
          <ThemeProvider theme={theme}>
            <p>
              Made with <FavoriteIcon color="primary" /> in Tampa, Florida.
            </p>
          </ThemeProvider>
        </footer>
      </Router>
    </>
  )
}
