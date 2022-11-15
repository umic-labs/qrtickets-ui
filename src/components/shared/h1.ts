import { styled } from '@mui/material/styles'
import { colors } from './colors'

const H1 = styled('h1')`
  color: ${colors.text};
  font-family: 'Roboto', sans-serif;
  font-size: 36px;
  line-height: 36px;
  text-align: left;
  margin-bottom: 0.8em;
  font-weight: 500;
  padding: 1em 0;
  border-bottom: 1px solid ${colors.gray300};
`

export default H1
