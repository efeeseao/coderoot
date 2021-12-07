import { Button } from 'components'
import { gaEvent } from 'utils/ga'

import * as S from './styles'

const onClick = () =>
  gaEvent({ action: 'click', category: 'buy', label: 'pricing box button' })

const PricingBox = () => (
  <S.Box>
    <S.Prices>
      <S.FullPrice>
        De <span>AOA 45.000</span> por apenas
      </S.FullPrice>
      <S.DiscountPrice>
        <span>3x de</span> AOA 15.000
      </S.DiscountPrice>
    </S.Prices>
    <S.BenefitsList>
      <S.BenefitsItem>
        Acesso aos <strong>6 módulos</strong>
      </S.BenefitsItem>

      <S.BenefitsItem>
        Código de <strong>todo o projeto</strong> separado em commits
      </S.BenefitsItem>

      <S.BenefitsItem>
        Contato <strong>direto</strong> com o instrutor via Facebook, Discord e
        WhatsApp
      </S.BenefitsItem>
    </S.BenefitsList>

    <Button
      href="https://forms.gle/JixQ6ZQ9UtrfuN7c6"
      onClick={onClick}
      withPrice
    >
      <p>Se inscreva agora</p>
      <div>
        <S.ButtonDiscountPrice>AOA 36.000</S.ButtonDiscountPrice>
      </div>
    </Button>
  </S.Box>
)

export default PricingBox
