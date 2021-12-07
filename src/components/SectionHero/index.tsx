import React from 'react'

import Logo from 'components/Logo'
import Button from 'components/Button'
import * as S from './styles'

import { gaEvent } from 'utils/ga'
import Container from 'components/Container'

const onClick = () =>
  gaEvent({ action: 'click', category: 'cta', label: 'hero button' })

const SectionHero = () => (
  <S.Wrapper>
    <Container>
      <Logo />

      <S.Content>
        <S.TextBlock>
          <S.Title>Frontend descomplicado e direto ao ponto!</S.Title>
          <S.Description>
            Aprenda a criar interfaces modernas e projetos reais de qualidade!
          </S.Description>
          <S.ButtonWrapper>
            <Button
              href="https://forms.gle/JixQ6ZQ9UtrfuN7c6"
              onClick={onClick}
              wide
            >
              Se inscreva agora
            </Button>
          </S.ButtonWrapper>
        </S.TextBlock>

        <S.Image
          src="/img/hero.svg"
          alt="Ilustração de um desenvolvedor do lado esquerdo de um computador pensando."
        />
      </S.Content>
    </Container>
  </S.Wrapper>
)

export default SectionHero
