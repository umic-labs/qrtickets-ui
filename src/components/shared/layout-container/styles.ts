import { styled } from '@mui/material/styles'

export const Content = styled('div')`
  width: 100%;

  @media (max-width: 575px) {
    max-width: 375px;
    padding: 0 20px 40px;
  }

  // Small devices (landscape phones, 576px and up)
  @media (min-width: 576px) {
    max-width: 576px;
    padding: 0 20px 40px;
  }

  // Medium devices (tablets, 768px and up)
  @media (min-width: 768px) {
    max-width: 576px;
    padding: 0 20px 40px;
  }

  // Large devices (desktops, 992px and up)
  @media (min-width: 992px) {
    max-width: 768px;
    padding: 0 80px;
  }

  // X-Large devices (large desktops, 1200px and up)
  @media (min-width: 1200px) {
  }

  // XX-Large devices (larger desktops, 1400px and up)
  @media (min-width: 1400px) {
  }

  box-sizing: border-box;
  left: 0;
  right: 0;
  overflow-x: clip;

  scrollbar-width: thin;
  scrollbar-color: #cccccc transparent;

  &::-webkit-scrollbar {
    z-index: 999;
    width: 20px;
    height: 20px;
  }

  &::-webkit-scrollbar-track {
    background-color: #ffffff;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #dddddd;
    border: 8px solid #ffffff;

    &:hover {
      background-color: #cccccc;
    }
  }
`

export const Wrapper = styled('div')`
  display: flex;
  justify-content: center;

  &.has-navbar {
    padding-top: 56px;
  }
`
