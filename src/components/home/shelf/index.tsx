import React from 'react'
import { BookItem } from '..'
import { Volume } from '../../../models'
import { TitleHeading } from '../../shared'
import { Container, Wrapper } from './styles'


interface Props {
  isFeatured?: boolean
  title: string
  volumes: Volume[]
}

const Shelf: React.FC<Props>  = (props: Props): JSX.Element => {
  return (
    <Wrapper className={props.isFeatured ? 'is-featured' : ''}>
      <TitleHeading>
        {props.title}
      </TitleHeading>

      <Container className={props.isFeatured ? 'is-featured' : ''}>
        {
          props.volumes.map((volume, key) => {
            return <BookItem volume={volume} key={key} />
          }
          )
        }
      </Container>
    </Wrapper>
  )
}

Shelf.defaultProps = {
  isFeatured: false,
}

export default Shelf