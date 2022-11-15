import styled, { css } from 'styled-components'
import tw from 'tailwind-styled-components'
import { CheckboxProps } from '.'

const Input = tw.input`
  border-mck_gray_dark
  delay-100
  ease-in-out

  before:border-white
  before:delay-100
  before:ease-in-out

  focus:shadow-mck_primary

  hover:delay-100
  hover:ease-in-out
  hover:border-gray-500

  checked:border-mck_primary
  checked:bg-mck_primary
  checked:before:opacity-100
`

const Label = tw.label`
  pl-3
`

export default {
  Wrapper: styled.div`
    display: flex;
    align-items: center;
  `,
  Input: styled(Input)`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    appearance: none;
    width: 1.8rem;
    height: 1.8rem;
    border: 0.2rem solid;
    border-radius: 0.2rem;
    transition: background border;
    position: relative;
    outline: none;

    &:before {
      content: '';
      width: 0.6rem;
      height: 0.9rem;
      border: 0.2rem solid;
      border-top: 0;
      border-left: 0;
      transform: rotate(45deg);
      position: absolute;
      top: 0.1rem;
      opacity: 0;
    }

    &:focus {
      box-shadow: 0 0 0.5rem;
    }
  `,
  Label: styled(Label)<Pick<CheckboxProps, 'labelColor'>>`
    ${({ labelColor }) => css`
      cursor: pointer;
      color: ${labelColor};
      line-height: 1.8rem;
    `}
  `
}
