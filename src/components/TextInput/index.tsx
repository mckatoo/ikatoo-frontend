import { InputHTMLAttributes } from 'react'
import Styles from './styles'

export type TextInputProps = InputHTMLAttributes<HTMLInputElement>

const TextInput = (props: TextInputProps) => {
  return <Styles.Input {...props} type="text" />
}

export default TextInput
