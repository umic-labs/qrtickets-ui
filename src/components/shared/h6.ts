import { styled } from '@mui/material/styles'
import { colors } from './colors'

const H6 = styled('h6')`
  font-family: "Roboto", 'sans-serif';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;

  letter-spacing: 1.5px;
  text-transform: uppercase;

  color: ${colors.text};
`;

export default H6
