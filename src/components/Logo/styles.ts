import styled from 'styled-components'
import media from 'styled-media-query'

export const LogoWrapper = styled.div`
  height: 7rem;

  ${media.greaterThan('medium')`
    height 7rem;
  `}
`
