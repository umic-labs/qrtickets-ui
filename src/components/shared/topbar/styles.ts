import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';

export const NavTitle = styled(Typography)`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`

export const AppBarCustom = styled(AppBar)`
  z-index: 900;
`