import * as React from 'react'
import logo from '/src/logo.svg'
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
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import { CardActionArea } from '@mui/material'

function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of reptiles, with over 6,000 species,
            ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
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

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <header className="sign-up">
        <h2>Home</h2>
      </header>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <ActionAreaCard />
      </Container>
    </ThemeProvider>
  )
}
