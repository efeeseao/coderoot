import * as S from './styles'

type CardModuleProps = {
  title: string
  subTitle: string
  children: React.ReactNode
}

const CardModule = ({ title, subTitle, children }: CardModuleProps) => (
  <S.Card>
    <S.TitleWrapper>
      <S.Title>{title}</S.Title>
      <S.SubTitle>{subTitle}</S.SubTitle>
    </S.TitleWrapper>

    <S.Content>{children}</S.Content>
  </S.Card>
)

export default CardModule
