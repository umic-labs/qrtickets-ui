import React from 'react'
import { Wrapper, Content } from './styles'


interface Props {
  children: any
  hasNavbar?: boolean
}

const LayoutContainer: React.FC<Props>  = (props: Props): JSX.Element => {
  return (
    <Wrapper className={props.hasNavbar ? 'has-navbar' : ''}>
      <Content>
        {props.children}
      </Content>
    </Wrapper>
  )
}

export default LayoutContainer