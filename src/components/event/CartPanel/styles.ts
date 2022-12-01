import { styled } from '@mui/material/styles'
import { colors } from '../../shared/colors'

export const WrapperCart = styled('div')`
  background-color: ${colors.gray50};
  padding: 20px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100vw;
  border-top: 1px solid ${colors.gray300};
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 20;
`

export const InfoPrice = styled('div')`
  text-align: left;
`

export const TotalItems = styled('span')`
  font-size: 14px;
`

