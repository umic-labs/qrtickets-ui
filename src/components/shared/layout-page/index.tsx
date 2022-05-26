import React from 'react'
import { Wrapper } from './styles'


interface Props {
  children: JSX.Element
}

const LayoutPage: React.FC<Props>  = (props: Props): JSX.Element => {
  return (
    <Wrapper>
      {props.children}
    </Wrapper>
  )
}

export default LayoutPage