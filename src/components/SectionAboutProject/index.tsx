import { Heading } from 'components'
import Container from 'components/Container'

import * as S from './styles'

const SectionAboutProject = () => (
  <S.Wrapper>
    <Container>
      <S.Container>
        <S.Image>
          <source
            srcSet={require('@images/project.png?webp')}
            type="image/webp"
          />
          <source srcSet={require('@images/project.png')} type="image/png" />
          <img
            src={require('@images/project.png')}
            loading="lazy"
            alt="Tela do ecommerce com uma imagem do CMS por trás"
          />
        </S.Image>
        <div>
          <Heading>O que iremos construir</Heading>
          <S.Text>
            <p>
              Uma landing-page de um salão de beleza, aonde os clientes vão
              poder ver os serviços prestados pelo são e também agendar um
              serviço.
            </p>

            <p>
              Vamos também desenvolver um blog de notícias da cultura po. para
              que os administradores possam adicionar produtos, categorias,
              plataformas, criar promoções, editar partes do site, além de
              emails automatizados para às vendas de cada produto.
            </p>

            <p>
              Para criar esses dois projetos, iremos utilizar ferramentas como
              HTML5, CSS3, JavaScript ES6+ e outras coisas mais. Sempre prezando
              pela qualidade do código e boas práticas.
            </p>
          </S.Text>
        </div>
      </S.Container>
    </Container>
  </S.Wrapper>
)

export default SectionAboutProject
