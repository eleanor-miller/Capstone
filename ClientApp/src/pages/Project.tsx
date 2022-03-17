import * as React from 'react'
import logo from '/src/logo.svg'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { FormControl } from '@mui/material'
import { createTheme, ThemeProvider, styled } from '@mui/material/styles'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import Stack from '@mui/material/Stack'
import IconButton from '@mui/material/IconButton'
import PhotoCamera from '@mui/icons-material/PhotoCamera'

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

const Input = styled('input')({
  display: 'none',
})

export default function Project() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    // eslint-disable-next-line no-console
    console.log({
      Title: data.get('Title'),
      Start: data.get('Start'),
      YarnBrand: data.get('YarnBrand'),
      Weight: data.get('Weight'),
      Colorway: data.get('Colorway'),
      Dyelot: data.get('Dyelot'),
      Favorite: data.get('Favorite'),
      Notes: data.get('Notes'),
    })
  }

  return (
    <ThemeProvider theme={theme}>
      <header className="sign-up">
        <h3>New Project</h3>
      </header>
      <FormControl>
        <Container component="main" maxWidth="sm">
          <CssBaseline />
          <Box sx={{ flexGrow: 1, mb: 6 }}>
            <Grid container spacing={2} sx={{ mb: 4 }}>
              <Grid item xs={8}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="Title"
                  label="Project Title"
                  name="Title"
                  autoFocus
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="Start"
                  label="Start Date"
                  name="Start"
                  autoFocus
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  margin="normal"
                  fullWidth
                  id="YarnBrand"
                  label="Yarn Brand"
                  name="YarnBrand"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  fullWidth
                  id="Colorway"
                  label="Colorway"
                  name="Colorway"
                  autoFocus
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  margin="normal"
                  fullWidth
                  id="Weight"
                  label="Weight"
                  name="Weight"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  fullWidth
                  id="Dyelot"
                  label="Dye Lot"
                  name="Dyelot"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  margin="normal"
                  fullWidth
                  multiline
                  rows={6}
                  id="Notes"
                  label="Notes"
                  name="Notes"
                  autoFocus
                />
              </Grid>
            </Grid>
            <Stack justifyContent="center" direction="row" spacing={10}>
              <Button variant="outlined" startIcon={<EditIcon />}>
                Edit
              </Button>
              <Button variant="outlined" startIcon={<DeleteIcon />}>
                Delete
              </Button>
            </Stack>
          </Box>
        </Container>
      </FormControl>
    </ThemeProvider>
  )
}
