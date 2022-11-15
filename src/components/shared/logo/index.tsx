import React from 'react'
import { Wrapper } from './styles'
import LogoImage from './logo.png'

const Logo: React.FC = (): JSX.Element => {
  return (
    <Wrapper>
      <img src={LogoImage} alt="Google Livros" />
    </Wrapper>
  )
}

export default Logo
