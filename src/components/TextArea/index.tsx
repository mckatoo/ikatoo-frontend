import React, { TextareaHTMLAttributes, useEffect, useState } from 'react'

import Styles from './styles'

export type TextAreaProps = {
  onTextAreaChange?: (value: string) => void
  label?: string
  labelColor?: 'black' | 'white'
  initialValue?: string
  disabled?: boolean
  error?: string
  name: string
} & TextareaHTMLAttributes<HTMLTextAreaElement>

const TextArea = ({
  label,
  labelColor = 'black',
  name,
  initialValue = '',
  error,
  disabled = false,
  onTextAreaChange,
  ...props
}: TextAreaProps) => {
  const [value, setValue] = useState(initialValue)

  useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.currentTarget.value
    setValue(newValue)

    !!onTextAreaChange && onTextAreaChange(newValue)
  }

  return (
    <Styles.Wrapper disabled={disabled} error={!!error}>
      {!!label && (
        <Styles.Label labelColor={labelColor} htmlFor={name}>
          {label}
        </Styles.Label>
      )}
      <Styles.ElementWrapper>
        <Styles.Element
          onChange={onChange}
          value={value}
          disabled={disabled}
          name={name}
          {...(label ? { id: name } : {})}
          {...props}
        />
      </Styles.ElementWrapper>
      {!!error && <Styles.Error>{error}</Styles.Error>}
    </Styles.Wrapper>
  )
}

export default TextArea
