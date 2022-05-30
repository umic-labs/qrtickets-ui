import { styled } from '@mui/material/styles'
import { colors } from '../../shared/colors';
import { H5 } from "../../shared/h5";

export const Subtitle = styled(H5)`
  display: flex;
  margin-bottom: 16px;
  
  >:last-child {
    margin-left: 16px;
  }
`

export const ItemDescription = styled("div")`
  margin-bottom: 32px;
  color: ${colors.text};

  font-family: 'Roboto', 'sans-serif';
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.5px;
  text-align: left;

  p {
    padding-left: 40px;
  }

  small {
    font-size: 0.9em;
    color: ${colors.gray700}
  }
`;
