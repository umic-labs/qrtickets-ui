import React from 'react'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { ArrowBack, Menu } from '@mui/icons-material';
import { NavTitle } from './styles';


interface Props  {
  children?: React.ReactNode
}

const Topbar: React.FC<Props> = (props: Props): JSX.Element => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <ArrowBack />
          </IconButton>

          <NavTitle variant="h6">
            {props.children}
          </NavTitle>

          <IconButton
            size="large"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Menu />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Topbar