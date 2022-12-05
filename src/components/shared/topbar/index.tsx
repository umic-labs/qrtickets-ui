import React from 'react'

import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import { AppBarCustom, NavTitle } from './styles'

interface Props {
  children?: React.ReactNode
}

const Topbar: React.FC<Props> = (props: Props): JSX.Element => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBarCustom position="absolute">
        <Toolbar sx={{ display: 'flex', justifyContent: 'center' }}>
          <NavTitle variant="h6">{props.children}</NavTitle>
        </Toolbar>
      </AppBarCustom>
    </Box>
  )
}

export default Topbar
