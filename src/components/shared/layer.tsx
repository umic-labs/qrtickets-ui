
import { CloseOutlined } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import { styled } from '@mui/material/styles'
import { colors } from './colors'

interface Props {
  children: any
  isVisible: boolean
  isMain?: boolean
  onClose?: Function
}

const Layer: React.FC<Props> = (props: Props): JSX.Element => {
  return (
    <LayerStyle
      className={[
        (props.isVisible && !props.isMain ? 'is-visible' : ''),
        (props.isMain ? 'is-main' : ''),
        (props.isMain && !props.isVisible ? 'is-hidden' : ''),
      ].join(' ')
    }
    >
      {
        props.onClose && (
          <IconButtonStyle
            onClick={() => props.onClose && props.onClose()} 
          >
            <CloseOutlined />
          </IconButtonStyle>
        )
      }

      {(props.isVisible || !props.onClose) && props.children}
    </LayerStyle>
  )
}

const IconButtonStyle = styled(IconButton)`
  color: ${colors.gray700};
  position: absolute;
  right: 10px;
  top: 16px;
`

const LayerStyle = styled('div')`
  @keyframes appear {
    from {transform: scale(1.1); opacity: 0;}
    to {transform: scale(1); opacity: 100%;}
  }

  background-color: ${colors.gray100};
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 990;
  min-height: 100vh;
  width: 100vw;
  overflow-y: scroll;
  animation: 0.2s ease-out;
  visibility: hidden;
  
  &.is-visible {
    visibility: visible;
    animation-name: appear;
  }

  &.is-hidden {
    opacity: 0%;
    transform: scale(0.9);
  }

  &.is-main {
    background-color: ${colors.white};
    visibility: visible;
  }
`;

export default Layer
