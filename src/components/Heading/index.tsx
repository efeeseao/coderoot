import * as S from './styles'

export type HeadingProps = {
  reverseColor?: boolean
  lineBottom?: boolean
  children: string
}

const Heading = ({
  reverseColor = false,
  lineBottom = false,
  children
}: HeadingProps) => (
  <S.Wrapper reverseColor={reverseColor} lineBottom={lineBottom}>
    {children}
  </S.Wrapper>
)

export default Heading
