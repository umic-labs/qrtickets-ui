import { styled } from '@mui/material/styles'

export const Content = styled('div')`
  // Small devices (landscape phones, 576px and up)
  @media (min-width: 576px) { max-width: 576px; }

  // Medium devices (tablets, 768px and up)
  @media (min-width: 768px) { max-width: 576px; }

  // Large devices (desktops, 992px and up)
  @media (min-width: 992px) { max-width: 576px; }

  // X-Large devices (large desktops, 1200px and up)
  @media (min-width: 1200px) { max-width: 576px; }

  // XX-Large devices (larger desktops, 1400px and up)
  @media (min-width: 1400px) { max-width: 576px; }

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

export const Wrapper = styled('div')`
  display: flex;
  justify-content: center;
`