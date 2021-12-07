import { Container, Heading } from 'components'

import faq from './content'
import * as S from './styles'

const SectionFaq = () => (
  <S.Wrapper>
    <S.Content>
      <Container>
        <Heading>Perguntas Frequentes</Heading>

        <S.Questions>
          {faq.map(({ question, answer }, index) => (
            <S.Question key={index}>
              <Heading lineBottom>{question}</Heading>
              <div dangerouslySetInnerHTML={{ __html: answer }} />
            </S.Question>
          ))}
        </S.Questions>
      </Container>
    </S.Content>
  </S.Wrapper>
)

export default SectionFaq
