import { styled } from '@mui/material/styles'
import { colors } from '../../shared/colors'
import { H5 } from '../../shared'
import ReactMarkdown from 'react-markdown'

export const Wrapper = styled('div')`
  padding-bottom: 120px;
`

export const Subtitle = styled(H5)`
  display: flex;
  margin-bottom: 16px;

  > :last-child {
    margin-left: 16px;
  }
`

export const ItemDescription = styled('div')`
  margin-bottom: 32px;
  color: ${colors.text};

  font-family: 'Roboto', 'sans-serif';
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.5px;
  text-align: left;

  > p,
  > div {
    padding-left: 40px;
  }

  small {
    font-size: 0.9em;
    color: ${colors.gray700};
  }
`

export const ImageHero = styled('img')`
  @media (max-width: 575px) {
    margin: 0 -20px;
    width: calc(100% + 40px);
  }

  @media (min-width: 992px) {
    margin: 0 -80px;
    width: calc(100% + 160px);
  }
`

export const Markdown = styled(ReactMarkdown)`
  pre {
    padding: 0.5rem;
    line-height: 1.25;
    overflow-x: scroll;
  }

  a,
  a:visited {
    color: #3498db;
  }

  p {
    font-size: 1rem;
    margin-bottom: 1.3rem;
  }

  h1,
  h2,
  h3,
  h4 {
    margin: 1.414rem 0 0.5rem;
    font-weight: inherit;
    line-height: 1.42;
  }

  h1 {
    margin-top: 0;
    font-size: 3.998rem;
  }

  h2 {
    font-size: 2.827rem;
  }

  h3 {
    font-size: 1.999rem;
  }

  h4 {
    font-size: 1.414rem;
  }

  h5 {
    font-size: 1.121rem;
  }

  h6 {
    font-size: 0.88rem;
  }

  small {
    font-size: 0.707em;
  }

  /* https://github.com/mrmrs/fluidity */

  img,
  canvas,
  iframe,
  video,
  svg,
  select,
  textarea {
    max-width: 100%;
  }

  h1,
  h2,
  h3 {
    border-bottom: 2px solid #fafafa;
    margin-bottom: 1.15rem;
    padding-bottom: 0.5rem;
    text-align: center;
  }

  blockquote {
    border-left: 8px solid #fafafa;
    padding: 1rem;
  }

  pre,
  code {
    background-color: #fafafa;
  }
`
