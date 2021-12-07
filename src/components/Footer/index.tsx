import Container from 'components/Container'

import * as S from './styles'

const Footer = () => (
  <S.Wrapper>
    <Container>
      <p>
        Desenvolvido por{' '}
        <a href="https://github.com/buzzcode42/">Fernando dos Santos</a>
      </p>
      <p>Todos os direitos reservados © {new Date().getFullYear()}</p>
    </Container>
  </S.Wrapper>
)

export default Footer
