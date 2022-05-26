import React from 'react'
import { Logo } from '..'
import { Nav } from './styles'


interface Props {

}

const Topbar: React.FC  = (props: Props): JSX.Element => {
  return (
    <Nav>
      <Logo />
    </Nav>
  )
}

export default Topbar