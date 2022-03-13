import { useState } from 'react'
import { Collapse, List, ListItemButton, ListItemText } from '@mui/material'
import { Link, routes, useLocation } from '@redwoodjs/router'
import { ExpandLess, ExpandMore } from '@mui/icons-material'

const NavList = () => {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  return (
    <List component="nav">
      <ListItemButton
        component={Link}
        to={routes.vehicles()}
        selected={location.pathname === routes.vehicles()}
      >
        <ListItemText primary="Vehicles" />
      </ListItemButton>

      <ListItemButton onClick={() => setOpen(!open)}>
        <ListItemText primary="Expenses" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="National Expenses" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="International Expenses" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Trip Expenses" />
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton
        component={Link}
        to={routes.settings()}
        selected={location.pathname === routes.settings()}
      >
        <ListItemText primary="Settings" />
      </ListItemButton>
    </List>
  )
}

export default NavList
