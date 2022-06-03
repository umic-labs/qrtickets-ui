
import { styled } from '@mui/material/styles'
import { colors } from './colors'

interface Props {
  children: any
  isVisible: boolean
}

const Layer: React.FC<Props> = (props: Props): JSX.Element => {
  return (
    <LayerStyle className={!props.isVisible ? 'is-hidden' : '' }>
      {props.isVisible && props.children}
    </LayerStyle>
  )
}

const LayerStyle = styled('div')`
  background-color: ${colors.white};
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 990;
  min-height: 100vh;
  width: 100vw;
  overflow-y: scroll;
  animation: ease;
  
  &.is-hidden {
    opacity: 100%;
    transform: scale(0.93) translateZ(0px);
    visibility: hidden;
  }
`;

export default Layer
