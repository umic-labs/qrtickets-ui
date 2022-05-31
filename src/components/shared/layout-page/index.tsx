import React from 'react'
import { Wrapper, Content } from './styles'


interface Props {
  children: JSX.Element | JSX.Element[]
}

const LayoutPage: React.FC<Props>  = (props: Props): JSX.Element => {
  return (
    <Wrapper>
      <Content>
        {props.children}
      </Content>
    </Wrapper>
  )
}

export default LayoutPage