import { styled } from '@mui/material/styles'

export const Wrapper = styled('div')`
  padding: 0 20px 40px;
  margin-top: 56px;
  box-sizing: border-box;
  left: 0;
  right: 0;
  overflow-x: clip;

  scrollbar-width: thin;
  scrollbar-color: #CCCCCC transparent;

  &::-webkit-scrollbar {
    z-index: 999;
    width: 20px;
    height: 20px;
  }

  &::-webkit-scrollbar-track {
    background-color: #FFFFFF;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #DDDDDD;
    border: 8px solid #FFFFFF;

    &:hover {
      background-color: #CCCCCC;
    }
  }
`