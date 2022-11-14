import { useState, InputHTMLAttributes } from 'react'
import Styles from './styles'

export type TextInputProps = {
  onInputChange?: (value: string) => void
  label?: string
  initialValue?: string
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  disabled?: boolean
  error?: string
} & InputHTMLAttributes<HTMLInputElement>

const TextInput = ({
  icon,
  iconPosition = 'left',
  label,
  name,
  initialValue = '',
  error,
  disabled = false,
  onInputChange,
  ...props
}: TextInputProps) => {
  const [value, setValue] = useState(initialValue)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value
    setValue(newValue)

    !!onInputChange && onInputChange(newValue)
  }

  return (
    <Styles.Wrapper $disabled={disabled} $error={!!error}>
      {!!label && <Styles.Label htmlFor={name}>{label}</Styles.Label>}
      <Styles.InputWrapper>
        {!!icon && (
          <Styles.Icon $iconPosition={iconPosition}>{icon}</Styles.Icon>
        )}
        <Styles.Input
          type="text"
          onChange={onChange}
          value={value}
          $iconPosition={iconPosition}
          disabled={disabled}
          name={name}
          {...(label ? { id: name } : {})}
          {...props}
        />
      </Styles.InputWrapper>
      {!!error && <Styles.Error>{error}</Styles.Error>}
    </Styles.Wrapper>
  )
}

export default TextInput
