import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'

type ButtonStyleProps = {
  wide: boolean
  withPrice: boolean
}

const buttonModifiers = {
  withPrice: (theme: DefaultTheme) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${theme.spacings.xsmall};
  `,
  wide: (theme: DefaultTheme) => css`
    padding: 1.3rem ${theme.spacings.medium};

    ${media.greaterThan('medium')`
      padding: 1.3rem ${theme.spacings.large};
    `}
  `
}

export const ButtonWrapper = styled.a<ButtonStyleProps>`
  ${({ theme, wide, withPrice }) => css`
    background: linear-gradient(
      255.09deg,
      #ff60c8 -75.17%,
      #5b1fa6 102.26%,
      #7e3dce 102.26%
    );
    border-radius: ${theme.border.radius};
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.xsmall};
    text-decoration: none;
    text-align: center;
    white-space: nowrap;
    transition: background 0.3s ease-in-out;

    &:hover {
      background: linear-gradient(
        255.09deg,
        #ff60c8 -75.17%,
        #5b1fa6 102.26%,
        #7e3dce 102.26%
      );
    }

    ${wide && buttonModifiers.wide(theme)};
    ${withPrice && buttonModifiers.withPrice(theme)};
  `}
`
