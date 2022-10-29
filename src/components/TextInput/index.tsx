import { InputHTMLAttributes } from 'react'

import * as S from './styles'

export type TextInputProps = InputHTMLAttributes<HTMLInputElement>

const TextInput = (props: TextInputProps) => {

  return (
    <S.Input
      {...props}
      type="text"
    />
  )
}

export default TextInput