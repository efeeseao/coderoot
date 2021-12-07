import * as S from './styles'

type ContainerProps = {
  id?: string
  children: React.ReactNode
}

const Container = ({ children, id }: ContainerProps) => (
  <S.Container id={id}>{children}</S.Container>
)

export default Container
