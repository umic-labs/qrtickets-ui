import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 30px 17px 20px;
  box-sizing: border-box;
  left: 0;
  right: 0;
  height: calc(100vh - 56px);
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