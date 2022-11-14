import styled from 'styled-components'
import tw from 'tailwind-styled-components'

type IconPositionProps = {
  $iconPosition?: 'left' | 'right'
}

type WrapperProps = {
  $error?: boolean
  $disabled?: boolean
}

const Icon = styled.div`
  & > svg {
    width: 2.2rem;
    height: 100%;
  }
`

const Styles = {
  InputWrapper: tw.div`
    flex
    items-center
    bg-mck_gray_light
    rounded-md
    p-1
    border-solid
    border-2
    border-mck_gray_light
    focus-within:shadow-sm
    focus-within:bg-mck_primary
    focus-within:text-mck_gray_light
  `,
  Input: tw.input`
    text-mck_black
    focus:text-mck_gray_light
    font-display
    text-base
    p-1
    ${(props: { $iconPosition?: 'left' | 'right' }) =>
      !!props.$iconPosition &&
      (props.$iconPosition === 'left' ? 'pl-3' : 'pr-3')}
    bg-transparent
    border-0
    outline-none

    autofill:shadow-inner
    autofill:shadow-mck_gray_light
    ${(props: IconPositionProps) =>
      props.$iconPosition === 'right' ? 'w-[calc(100% - 2.2rem)]' : 'w-full'}

    autofill:filter-none
    autofill:first-line:font-display
    autofill:first-line:text-base
  `,
  Label: tw.label`
    text-base
    text-mck_black
    dark:text-mck_gray_light
    cursor-pointer
  `,
  Icon: tw(Icon)`
    flex
    text-gray-500
    ${(props: IconPositionProps) =>
      props.$iconPosition === 'right' ? 'order-1' : 'order-none'}
  `,
  Error: tw.p`
    text-mck_red
    text-base
  `,
  Wrapper: tw.div`
  ${(props: WrapperProps) => props.$error && wrapperModifiers.error()}
  ${(props: WrapperProps) => props.$disabled && wrapperModifiers.disabled()}
  `
}

const disabledStyle = `
  cursor-not-allowed
  text-gray-500
  placeholder:text-current
`

const wrapperModifiers = {
  error: () => `
    ${(Styles.InputWrapper = tw(Styles.InputWrapper)`border-mck_red`)}

    ${(Styles.Icon = tw(Styles.Icon)`text-mck_red`)}
    ${(Styles.Label = tw(Styles.Label)`text-mck_red`)}
    `,
  disabled: () => `
    ${(Styles.Label = tw(Styles.Label)`${disabledStyle}`)}
    ${(Styles.Input = tw(Styles.Input)`${disabledStyle}`)}
    ${(Styles.Icon = tw(Styles.Icon)`${disabledStyle}`)}
  `
}

export default Styles
