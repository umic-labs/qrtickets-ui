import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 17px 0;
  margin-bottom: 40px;
  color: #2D2D2E;
  
  &.is-featured {
    background-color: #47B7ED;
    padding: 26px 17px;
    margin-left: -17px;
    margin-right: -17px;
    
    color: #FFFFFF;
  }
`

export const Container = styled.div`
  display: flex;
  color: #595A5C;
  overflow-x: scroll;
  overflow-y: hidden;
  
  &.is-featured {
    color: #FFFFFF;
  }
`