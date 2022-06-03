
import { styled } from '@mui/material/styles'
import { colors } from './colors'

const H2 = styled("h2")`
  color: ${colors.text};
  font-family: "Roboto", sans-serif;
  font-size: 24px;
  line-height: 24px;
  text-align: left;
  margin: 0 0 0.8em;
  font-weight: 400;
  padding: 1em 0;
  border-bottom: 1px solid ${colors.gray300};
  text-align: center;
`;

export default H2
