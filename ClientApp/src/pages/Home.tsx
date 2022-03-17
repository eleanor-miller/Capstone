import * as React from 'react'
import logo from '/src/logo.svg'
import Card from '../components/Card'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import LockSharpIcon from '@mui/icons-material/LockSharp'
import Typography from '@mui/material/Typography'
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

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <header className="sign-up">
        <h2>Home</h2>
      </header>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Card />
      </Container>
    </ThemeProvider>
  )
}
