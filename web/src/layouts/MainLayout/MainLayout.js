import { useState } from 'react'
import {
  AppBar,
  Box,
  Container,
  Grid,
  Paper,
  Toolbar,
  Typography,
} from '@mui/material'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'

import NavList from 'src/components/NavList/NavList'

// const drawerWidth = 240

const MainLayout = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  return (
    <Grid container spacing={5} px={3}>
      <Grid item xs={12}>
        <AppBar position="sticky" color="transparent" sx={{ borderRadius: 2 }}>
          <Container maxWidth="false">
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: 'none' } }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant="h4"
                component="div"
                color={'teal'}
                fontWeight={'bold'}
                sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
              >
                CTCAdmin2
              </Typography>

              <Box sx={{ alignItems: 'end' }}>
                <span>User name</span>
                <span>Language</span>
                <span>Logout</span>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </Grid>
      <Grid item container xs={12} spacing={3}>
        <Grid
          item
          xs={1}
          md={3}
          lg={2}
          sx={{
            display: { xs: 'none', md: 'flex' },
          }}
        >
          <Paper elevation={4} sx={{ width: 1 }}>
            <NavList />
          </Paper>
        </Grid>
        <Grid item xs={12} md={9} lg={10}>
          <Paper elevation={4} sx={{ padding: 4 }}>
            {children}
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default MainLayout

//  sm, md, lg, xl
